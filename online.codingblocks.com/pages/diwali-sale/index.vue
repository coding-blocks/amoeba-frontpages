<template>
  <div>
    <div class="container py-5">
      <HeroBanner />
      <div class="row mt-5">
        <div class="col-md-6">
          <OnlineCourseCard />
        </div>
        <div class="col-md-6 mt-5 mt-md-0">
          <AccelerateCard />
        </div>
      </div>
    </div>
    <div class="my-auto">
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
  </div>
</template>
<script>
import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser'

import ExprienceCard from '~/components/LandingPage/ExperienceCard'
import Perkcard from '~/components/LandingPage/PerkCard'
import SuccessQuote from '~/components/LandingPage/SuccessQuote'
import NumberQuote from '~/components/LandingPage/NumberQuote'
import MentorCard from '~/components/LandingPage/MentorCard'
import FeatureCard from '~/components/LandingPage/FeatureCard'
import PromotionCard from '~/components/LandingPage/PromotionCard'
import OnlineCourseCard from '~/components/DiwaliSale/OnlineCourseCard'
import AccelerateCard from '~/components/DiwaliSale/AccelerateCard'
import HeroBanner from '~/components/DiwaliSale/HeroBanner'

export default {
  mixins: [sidebarLayoutMixin],
  components: {
    ExprienceCard,
    Perkcard,
    SuccessQuote,
    NumberQuote,
    MentorCard,
    FeatureCard,
    PromotionCard,
    OnlineCourseCard,
    AccelerateCard,
    HeroBanner
  }
}
</script>
