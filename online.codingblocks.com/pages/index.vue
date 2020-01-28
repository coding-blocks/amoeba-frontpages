<template>
  <div>
    <div class="my-auto p-md-4">
      <Info />
    </div>
    <CompanyCard />
    <div class="my-auto">
      <div class="container mb-5">
        <div class="row justify-content-between mb-5 align-items-center no-gutters">
          <div class="col-md-8 col-6">
            <h4 class="bold">Learn from instructor led online courses</h4>
          </div>
          <div>
            <nuxt-link to="/courses" class="button-dashed button-orange">Browse Courses</nuxt-link>
          </div>
        </div>
        <div class="row">
          <ClassRoomCard :course="course" v-for="course in courses" :key="course.id" />
        </div>
      </div>

      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="font-lg mb-3">
            <strong>Our Talented Mentors</strong>
          </div>
        </div>
      </div>
      <MentorCard />
      <TrackCard />
      <CourseCard />
      <SuccessQuote />
    </div>
    <ExprienceCard />

    <div class="my-auto">
      <NumberQuote />
      <Perkcard />
      <FeatureCard />
    </div>

    <PromotionCard />
    <div class="my-auto">
      <StudentsExperience />
    </div>
  </div>
</template>

<script>
import Info from '~/components/LandingPage/InfoCard'
import CompanyCard from '~/components/LandingPage/CompanyCard'
import TrackCard from '~/components/LandingPage/LearningTrackCard'
import CourseCard from '~/components/LandingPage/courseCard'
import ExprienceCard from '~/components/LandingPage/ExperienceCard'
import Perkcard from '~/components/LandingPage/PerkCard'
import SuccessQuote from '~/components/LandingPage/SuccessQuote'
import NumberQuote from '~/components/LandingPage/NumberQuote'
import MentorCard from '~/components/LandingPage/MentorCard'
import PromotionCard from '~/components/LandingPage/PromotionCard'
import FeatureCard from '~/components/LandingPage/FeatureCard'
import StudentsExperience from '~/components/LandingPage/StudentsExperience'
import ClassRoomCard from '~/components/Base/CourseCard'

export default {
  layout: 'landing-page',
  components: {
    Info,
    CompanyCard,
    TrackCard,
    CourseCard,
    ExprienceCard,
    Perkcard,
    SuccessQuote,
    NumberQuote,
    MentorCard,
    PromotionCard,
    FeatureCard,
    StudentsExperience,
    ClassRoomCard
  },
  async asyncData ({ $axios, app }) {
    const res = await $axios.get(`/courses`, {
      params: {
        include: 'instructors,runs',
        exclude: 'ratings,instructors.*,feedbacks,runs.*',
        filter: {
          recommended: true,
          unlisted: false,
        },
        page: {
          limit: 3
        },
        sort: 'difficulty'
      }
    })

    const courses = app.$jsonApiStore.sync(res.data)
    return {
      courses
    }
  },
  data () {
    return {
      courses: []
    }
  }
}
</script>
