<template>
  <button
    @click="onClick()"
  >
    {{text}}
  </button>  
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      if (this.session.isAuthenticated) {
        this.$emit('click')
      } else {
        localStorage.setItem('redirectionPath', "absolute_path:" + window.location.href)
        window.location.href = '/app/login'
      }
    }
  },
  computed: {
    ...mapState(['session'])
  }
}
</script>
