<template>
  <button @click="onClick()">

    <span v-if="text!=''">{{text}}</span>
    <span v-else><template><slot></slot></template></span>
    
  </button>  

</template>


<script>
import { mapState } from 'vuex'
import config from '~/config.json';

export default {
  props: {
    text: {
      type: String,
    }
  },
  methods: {
    onClick() {
      if (this.session.isAuthenticated) {
        this.$emit('click')
      } else {
        localStorage.setItem('redirectionPath', "absolute_path:" + window.location.href)
        window.location.href = this.loginUrl
      }
    }
  },
  computed: {
    ...mapState(['session']),
    loginUrl () {
      const { url, clientId } = config[process.env.NODE_ENV].oneauth
      return `${url}/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${this.publicUrl}`; 
    },
    publicUrl () {
      return `${window.location.protocol}//${window.location.hostname}/app/`
    }
  }
}
</script>
