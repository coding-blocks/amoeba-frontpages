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
  async asyncData ({ $axios }) {
    await $axios.get(`/jwt/logout`).catch(err => {
      console.error('Already Logged out', err)
    })
  },
  mounted () {
    this.$cookies.remove('auth-jwt', {
      path: '/',
      domain: window.location.host
    })      
    window.localStorage.clear()
    setTimeout(() => {
      window.location.href = '/'
    })
  }
}
</script>