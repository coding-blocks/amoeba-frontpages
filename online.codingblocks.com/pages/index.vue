<template>
  <div>
    <Info />
    <CompanyCard />
    <MentorCard />
    <TrackCard />
    <CourseCard />
    <SuccessQuote />
    <ExprienceCard />
    <NumberQuote />
    <Perkcard />
    <ExclusiveFeature />
    <FeatureCard />
    <PromotionCard />
    <StudentsExperience />
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
import ExclusiveFeature from '~/components/LandingPage/FeatureTitle'
import MentorCard from '~/components/LandingPage/MentorCard'
import PromotionCard from '~/components/LandingPage/PromotionCard'
import FeatureCard from '~/components/LandingPage/FeatureCard'
import StudentsExperience from '~/components/LandingPage/StudentsExperience'

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
    ExclusiveFeature,
    MentorCard,
    PromotionCard,
    FeatureCard,
    StudentsExperience
  }
}
</script>

<style scoped>
</style>
