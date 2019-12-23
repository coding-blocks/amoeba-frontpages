<template>
  <div>
    <div class="my-auto p-md-4">
      <Info />
    </div>
    <CompanyCard />
    <div class="my-auto">
      <div class="container mb-5">
        <div class="row justify-content-between">
          <div class="col-6 font-lg mb-5">
            <strong>Learn from instructor led online courses</strong>
          </div>
          <div class="col-6 t-align-r">
            <button class="button-dashed button-orange">Browse Courses</button>
          </div>
        </div>
        <div class="row">
          <ClassRoomCard v-for="num in 3" :key="num" />
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
  }
}
</script>

<style scoped>

.pad{

}
</style>
