<template>
  <div class="container">
    <div class="p-5">
      <HeroBanner />
      <div class="row mt-5">
        <div class="col-12 col-lg-6">
          <CourseCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeroBanner from '~/components/FlashSale/HeroBanner'
import CourseCard from '~/components/FlashSale/CourseCard'

export default {
  components: {
    HeroBanner,
    CourseCard
  }
}
</script>
