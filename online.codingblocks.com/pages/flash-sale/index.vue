<template>
  <div class="container">
    <div class="p-5">
      <HeroBanner />
      <About class="mt-5" />
      <div class="row mt-5">
        <div class="col-lg-6 my-3" v-for="course in courses" :key="course.id">
          <CourseCard :course="course"  />
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import About from '~/components/FlashSale/About.vue'
import HeroBanner from '~/components/FlashSale/HeroBanner'
import CourseCard from '~/components/FlashSale/CourseCard'
import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser'

export default {
  mixins: [sidebarLayoutMixin],
  components: {
    HeroBanner,
    CourseCard,
    About
  },
  async asyncData ({ $axios, app: { $jsonApiStore } }) {

    //     Title	ID
    // Competitive Prog	17
    //  Dynamic Programming	86
    //  Interview prep c++	44
    // Java	25
    // FAANG	129
    const courseIds = [17, 86, 44, 25, 129]

    const {data: coursesPayload} = await $axios.get(`/courses`, {
      params: {
        include: 'instructors,runs',
        exclude: 'ratings,instructors.*,feedbacks,runs.*',
        filter: {
          // recommended: true,
          // unlisted: false,
          id: {
            $in: courseIds
          }
        },
        sort: 'difficulty'
      }
    })

    $jsonApiStore.reset()
    const courses = $jsonApiStore.sync(coursesPayload)

    return {
      courses
    }
  },
  data () {
    return { courses: [] }
  }
}
</script>
