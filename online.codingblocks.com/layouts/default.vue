<template>
  <div>
    <TheNavbarTop />
    <div class="mt-70">
      <nuxt />
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

<style lang="css" scoped>
.mt-70 {
  margin-top: 70px;
}
</style>
