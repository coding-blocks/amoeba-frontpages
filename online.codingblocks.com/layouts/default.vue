<template>
  <div class="a-ocb">
    <script defer src="https://hack.codingblocks.com/index.js"></script>
    <div class="c-sidenav bottom-nav"></div>
    <div class="ml-sidenav">
      <div class="row no-gutters">
        <div class="col-12">
          <TheNavbarTop class="ml-sidenav" />
          <cb-navbar topalign="right">
          </cb-navbar>
          <nuxt />
        </div>
      </div>
      <TheFooter />
    </div>
    
    
    
  </div>
</template>

<script>
import TheNavbarTop from '~/components/TheNavbarTop.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheNavbarTop,
    TheFooter
  }
}
</script>


<style>
/* body {
  padding: 0
} */

.ml-sidenav {
  margin-left: 12vw;
}
</style>