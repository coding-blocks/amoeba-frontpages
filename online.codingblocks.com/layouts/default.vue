<template>
  <div class="a-ocb">
    <script defer src="https://hack.codingblocks.com/index.js"></script>
    <div class="row no-gutters">
      <div class="col-1 bg-grey"></div>
      <div class="col-11">
        <TheNavbarTop />
        <cb-navbar topalign="right"></cb-navbar>
        <nuxt />
      </div>
    </div>
    
    
  </div>
</template>

<script>
import TheNavbarTop from '~/components/TheNavbarTop.vue'

export default {
  components: {
    TheNavbarTop
  }
}
</script>
