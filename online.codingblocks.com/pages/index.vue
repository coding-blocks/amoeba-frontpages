<template>
  <div>
    <Info />
    <CompanyCard />
    <TrackCard />
    <CourseCard />
    <ExprienceCard />
    <Perkcard />
  </div>
</template>

<script>
import Info from '~/components/LandingPage/InfoCard'
import CompanyCard from '~/components/LandingPage/CompanyCard'
import TrackCard from '~/components/LandingPage/LearningTrackCard'
import CourseCard from '~/components/LandingPage/courseCard'
import ExprienceCard from '~/components/LandingPage/ExperienceCard'
import Perkcard from '~/components/LandingPage/PerkCard'

export default {
  components: {
    Info,
    CompanyCard,
    TrackCard,
    CourseCard,
    ExprienceCard,
    Perkcard
  }
}
</script>

<style scoped>
</style>
