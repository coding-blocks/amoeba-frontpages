<template>
  <div>
      <div class="my-auto p-md-4 position-relative home-banner">
        <Info />
      </div>
    <CompanyCard class="position-relative" />
    <div class="my-auto">
      <TrackCard class="mb-5" />
      <div class="container mb-5">
        <div class="row justify-content-between mb-5 align-items-center no-gutters">
          <!-- <div class="col-md-8 col-6"> -->
            <h4 class="bold mx-auto">Learn from instructor led online courses</h4>
          <!-- </div> -->
        </div>
        <div class="row">
          <ClassRoomCard :course="course" v-for="course in courses" :key="course.id" />
        </div>
        <div class="row mt-4 mb-5">
          <div class="mx-auto">
            <nuxt-link to="/courses" class="button-solid button-orange font-mds ">Browse all Courses</nuxt-link>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="t-align-c mb-5">
          <h4 class="bold">Our Experienced Mentors</h4>
        </div>
      </div>
      <MentorCard />
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

<style scoped>
.home-banner {
  background-color: #FBFDF9;
}
</style>

<script>
import Info from '~/components/LandingPage/InfoCard'
import CompanyCard from '~/components/LandingPage/CompanyCard'
import TrackCard from '~/components/LandingPage/LearningTrackCard'
import TrackCards from '~/components/LandingPage/trackCards'
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
    TrackCards,
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
  async asyncData({ $axios, app }) {
    const res = await $axios.get(`/courses`, {
      params: {
        include: 'instructors,runs',
        exclude: 'ratings,instructors.*,feedbacks,runs.*',
        filter: {
          recommended: true,
          unlisted: false
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
  data() {
    return {
      courses: []
    }
  }
}
</script>


<style scoped>
.font-normal {
  font-weight: normal;
}
</style>

<style>
h4.bold, strong {
  letter-spacing: 1px;
}
</style>