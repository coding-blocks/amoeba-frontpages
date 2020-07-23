<template>
  <div class="container">
    <div class="p-5">
      <HeroBanner />
      <About class="mt-5" />
      <div class="row mt-5">
        <div class="col-12 col-lg-6">
          <CourseCard />
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
  }
}
</script>
