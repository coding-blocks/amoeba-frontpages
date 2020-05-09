<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <div class="col-lg-4 col-md-6 col-12">
        <h3>Uplift your career with us</h3>
        <p class="font-sm">Accelerate your future. Learn anytime, anywhere.</p>
      </div>

      <div class="input-search d-flex col-lg-7 col-md-6 col-10 bg-light-grey">
        <input
          class="bg-light-grey"
          placeholder="What do you want to learn?"
          type="text"
          @keyup="({target}) => this.search.run(target.value)"
          v-model="searchQuery"
        />
      </div>
    </div>
    <div class="border-bottom-list" v-show="!searchQuery.trim()" >
      <FeaturedTagExplore :featuredTag='featuredTag' v-for="featuredTag in featuredTags" :key="`feature_${featuredTag.id}`" />
    </div>
    <div
      class="row a-ocb courses-list"
      v-infinite-scroll="() => loadMore.run()"
      infinite-scroll-disabled="disabledInfiniteScroll"
      infinite-scroll-distance="10"
    >
      <div class="w-100 h-100 d-flex flex-wrap">
        <CourseCard
          :course="course"
          v-for="course in courses"
          :key="course.id"
        />
      </div>
      <div v-show="!courses.length" class="font-md mx-auto ">No Results Found</div>
      <div class="mx-auto my-auto" v-show="isSearching">
        <img
          src="https://minio.codingblocks.com/amoeba/online-loader.gif"
          alt="loading..."
        />
      </div>

    </div>
    </div>
</template>

<script>

import CourseCard from '~/components/Base/CourseCard.vue'
import FeaturedTagExplore from '~/components/Base/FeaturedTagExplore.vue'
import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser'
import { jsonSchemaForAllCourses } from '~/utils/seo'
import { metaForAllCourses } from '~/utils/seo'

if (process.client) {
  var infiniteScroll = require('vue-infinite-scroll')
}

const fetchCourses = (axios, query = '', offset = 0, limit = 9) => {
  return axios.get('/courses', {
      params: {
        exclude: `ratings,instructors.*,jobs`,
        include: `instructors,runs`,
        filter: {
          unlisted: false,
          title: {
            $iLike: `%${query}%`
          }
        },
        page: {
          limit,
          offset
        }
      }
    })
}

export default {
  mixins: [sidebarLayoutMixin],
  components: {
    CourseCard,
    FeaturedTagExplore
  },
  directives: {
    infiniteScroll
  },
  async asyncData({ $axios, app }) {
    const res = await fetchCourses($axios)
    const courses = app.$jsonApiStore.sync(res.data)

    const featuredTagsPayload = await $axios.get('featured_tags/courses')
    // const featuredTags = app.$jsonApiStore.sync(featuredTagsRes.data) // calling this server sides fails, see computed property
    return { courses, featuredTagsPayload: featuredTagsPayload.data }
  },
  data() {
    return {
      courses: [],
      featuredTagsPayload: {},
      // featuredTags: [], // using this server sides fails, see computed property
      offset: 0,
      limit: 9,
      searchQuery: '',
      infiniteScrollDisabled: false
    }
  },
  computed: {
    isSearching () {
      return this.loadMore.isActive
    },
    disabledInfiniteScroll () {
      return !this.courses.length || this.isSearching || this.infiniteScrollDisabled
    },
    featuredTags () {
      // somehow calling this server side fails; need to debug why
      return process.client ? this.$jsonApiStore.sync(this.featuredTagsPayload) : []
    }
  },
  jsonld() {
    return jsonSchemaForAllCourses(this.courses)
  },
  head() {
    return {
      title: 'Coding Blocks Online | All Courses',
      meta: metaForAllCourses()
    }
  },
  tasks(t, { timeout }) {
    return {
      search: t(function *(query = '') {
        this.$nuxt.$loading.start()
        this.offset = 0 // reset pagination
        yield timeout(500)
        const res = yield fetchCourses(this.$axios, query, this.offset)

        this.courses = yield this.$jsonApiStore.sync(res.data)
        this.infiniteScrollDisabled = !this.courses.length

        this.$nuxt.$loading.finish()
      }).flow('restart', { delay: 500 }),

      loadMore: t(function *() {
        this.$nuxt.$loading.start()
        this.infiniteScrollDisabled = true

        this.offset += 9
        const res = yield fetchCourses(this.$axios, this.searchQuery, this.offset)

        const newCourses = yield this.$jsonApiStore.sync(res.data)
        if (newCourses.length) {
          this.courses = [...this.courses , ...newCourses]
          this.infiniteScrollDisabled = false
        }
        else
          this.infiniteScrollDisabled = true // no new courses to load

        this.$nuxt.$loading.finish()
      })
    }
  }
}
</script>

<style scoped>
.input-search {
  height: 50px;
}

input {
  width: 95%;
  height: 100%;
  margin: auto;
}
.courses-list {
  min-height: 62vh;
}
</style>
