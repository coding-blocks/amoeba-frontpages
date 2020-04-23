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
    <div
      class="row a-ocb courses-list"
      v-infinite-scroll="() => this.loadMore.run()"
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
      <div class="mx-auto my-auto" v-show="this.isSearching">
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
    CourseCard
  },
  directives: {
    infiniteScroll
  },
  async asyncData({ $axios, app }) {
    const res = await fetchCourses($axios)
    const courses = app.$jsonApiStore.sync(res.data)
    return { courses }
  },
  data() {
    return {
      courses: [],
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
