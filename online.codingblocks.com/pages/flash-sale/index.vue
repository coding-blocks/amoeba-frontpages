<template>
  <div class="container">
    <HeroBanner class="mb-5" />
    <About />
  </div>
</template>
<script>
import About from '~/components/FlashSale/About.vue'
import HeroBanner from '~/components/FlashSale/HeroBanner'
import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser'

export default {
  mixins: [sidebarLayoutMixin],
  components: {
    About,
    HeroBanner
  }
}
</script>
