<template>
  <div class="container t-align-c mt-5">
    Logging you out....
  </div>
</template>

<style scoped>
div {
  height: 50vh;
}
</style>

<script>
export default {
  asyncData ({ $axios }) {
    return $axios.get(`/jwt/logout`)
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      
      window.localStorage.clear()
      this.$cookies.remove('auth-jwt')      
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        window.location.href = "/"
      }, 0)
    })
  }
}
</script>