<template>
  <div class="a-ocb">
    <!-- Without sidenav -->
    <promotion-banner />
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
import TheNavbarTop from '~/components/LandingPage/Layout/TheNavBar.vue'
import TheFooter from '~/components/TheFooter.vue'
import config from '~/config.json';


export default {
  components: {
    TheNavbarTop,
    TheFooter
  }
}
</script>

<style>
body {
  padding-top: 0px !important;
}
</style>



