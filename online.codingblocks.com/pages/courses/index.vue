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
import { metaForAllCourses } from '~/utils/seo'

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
      title: 'Coding Blocks Online | All Courses',
      meta: metaForAllCourses()
    }
  },
  tasks(t, { timeout }) {
    return {
      search: t(function *() {
        const res = yield this.$axios.get('/courses', {
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

        this.courses = yield this.$jsonApiStore.sync(res.data)
      })
        .flow('restart', { delay: 500 })
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
