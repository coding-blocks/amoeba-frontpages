<template>
  <div>
    <slot name="head" :onToggle="toggle" :expanded="showContent"></slot>

    <div v-show="showContent">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VAccordion',
  data () {
    return {
      showContent: false
    }
  },
  methods: {
    toggle () {
      this.showContent = !this.showContent
    }
  }
}
</script>