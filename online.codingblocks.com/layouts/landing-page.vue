<template>
  <div class="a-ocb">
    <script defer src="https://hack.codingblocks.com/index.js"></script>
    <!-- Without sidenav -->
    <div class="row no-gutters">
      <div class="col-12">
        <TheNavbarTop class="ml-0 w-100" />
        <cb-navbar topalign="right" />
        <nuxt />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbarTop from '~/components/LandingPage/Layout/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheNavbarTop,
    TheFooter
  }
}
</script>





