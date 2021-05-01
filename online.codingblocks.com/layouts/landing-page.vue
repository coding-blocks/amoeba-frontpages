<template>
  <div class="a-ocb">
    <!-- Without sidenav -->
    <!-- <promotion-banner /> -->
    <div class="row no-gutters">
      <div class="col-12">
        <TheNavBar class="ml-0 w-100" />
        <cb-navbar topalign="right" />
        <nuxt />
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from '~/components/LandingPage/Layout/TheNavBar.vue'
import TheFooter from '~/components/TheFooter.vue'
import config from '~/config.json';


export default {
  components: {
    TheNavBar,
    TheFooter
  }
}
</script>

<style>
body {
  padding-top: 0px !important;
}
.a-ocb {
  margin-bottom: 0rem;
}
</style>