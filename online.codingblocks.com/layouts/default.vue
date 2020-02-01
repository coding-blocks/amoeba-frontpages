<template>
  <div class="a-ocb">
    <script defer src="https://hack.codingblocks.com/index.js"></script>

    <TheNavbarTop />
    <TheSideBar />
    <div class="row justify-content-center no-gutters">
      <div class="offset-0 offset-md-1 col-11" style="margin-top: 72px;">
        <cb-navbar topalign="right" />
        <div class="px-lg-5 px-md-4 px-0">
          <nuxt />
        </div>        
      </div>
    </div>



  </div>
</template>

<script>
import TheNavbarTop from '~/components/TheNavbarTop.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheSideBar from '~/components/TheSideBar.vue'

export default {
  components: {
    TheNavbarTop,
    TheFooter,
    TheSideBar
  }
}
</script>

<style>
body {
  padding-top: 70px;
}
</style>
