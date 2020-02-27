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
import config from '~/config.json';

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
    localStorage.removeItem("ember_simple_auth-session")
    localStorage.removeItem("redirectionPath")

    // window.localStorage.clear()
    setTimeout(() => {
          console.log("redirecting")

      window.location.href = 'https://account.codingblocks.com/logout?redirect=' + config[process.env.NODE_ENV].publicUrl
    }, 0)
  }
}
</script>