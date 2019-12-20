<template>
  <div>
    <info />
    <companycard />
    <trackCard />
  </div>
</template>

<script>
import info from '~/components/LandingPage/InfoCard'
import companycard from '~/components/LandingPage/CompanyCard'
import trackCard from '~/components/LandingPage/LearningTrackCard'

export default {
  components: {
    info,
    companycard,
    trackCard
  }
}
</script>

<style scoped>
</style>
