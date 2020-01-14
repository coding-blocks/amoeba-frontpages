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
          v-model="searchQuery"
        />
      </div>
    </div>
    <div class="row a-ocb">
      <CourseCard :course="course" v-for="course in courses" :key="course.id" />
    </div>
  </div>
</template>

<script>
import CourseCard from '~/components/Base/CourseCard.vue'
import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser'
import { jsonSchemaForAllCourses } from '~/utils/seo'

export default {
  mixins: [sidebarLayoutMixin],
  components: {
    CourseCard
  },
  async asyncData({ $axios, app }) {
    const res = await $axios.get('/courses', {
      params: {
        exclude: `ratings,instructors.*,jobs`,
        include: `instructors,runs`,
        filter: {
          unlisted: false
        },
        page: {
          limit: 100
        }
      }
    })
    const courses = app.$jsonApiStore.sync(res.data)
    return { courses }
  },
  data() {
    return {
      courses: [],
      searchQuery: null
    }
  },

  jsonld() {
    return jsonSchemaForAllCourses(this.courses)
  },

  head() {
    return {
      title: this.courses.subtitle,

      meta: [
        {
          hid: 1,
          type: 'description',
          content:
            'Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.'
        },
        {
          hid: 2,
          type: 'title',
          content:
            'Best online computer programming and coding courses in India.'
        },
        { hid: 3, type: 'twitter:card', content: 'summary' },
        { hid: 4, type: 'twitter:site', content: '@CodingBlocksIn' },
        {
          hid: 5,
          property: 'og:title',
          content:
            'Best online computer programming and coding courses in India.'
        },
        {
          hid: 6,
          property: 'og:description',
          content:
            'Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.'
        },
        {
          hid: 7,
          property: 'og:image',
          content:
            'https://online.codingblocks.com/images/online-logo-66038d0bc8e98ba84eb596e64accf139.png'
        },
        { hid: 8, property: 'og:site_name', content: 'Coding Blocks Online' },
        {
          hid: 9,
          property: 'og:url',
          content: 'https://online.codingblocks.com/'
        },
        {
          hid: 10,
          itemprop: 'name',
          content:
            'Best online computer programming and coding courses in India.'
        },
        {
          hid: 11,
          itemprop: 'description',
          content:
            'Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.'
        },
        {
          hid: 12,
          itemprop: 'image',
          content:
            'https://online.codingblocks.com/images/online-logo-66038d0bc8e98ba84eb596e64accf139.png'
        }
      ]
    }
  },
  tasks(t, { timeout }) {
    return {
      search: t(async function() {
        // await timeout(1000)

        const res = await this.$axios.get('/courses', {
          params: {
            exclude: `ratings,instructors.*`,
            include: `instructors,runs`,
            filter: {
              title: {
                $iLike: `%${this.searchQuery}%`
              },
              unlisted: false
            },
            page: {
              limit: 100
            }
          }
        })

        this.courses = this.$jsonApiStore.sync(res.data)
      })
        .flow('restart', { delay: 400 })
        .runWith('searchQuery')
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
</style>
