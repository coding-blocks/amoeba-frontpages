<template>
  <div>
    <slot name="head" :onToggle="toggle" :expanded="showContent"></slot>

    <transition
      name="accordion"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @leave="leave"
    >
      <div class="body" v-show="showContent">
        <slot name="content"></slot>
      </div>
    </transition>
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
    },
    beforeEnter: function(el) {
      el.style.height = '0';
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  }
}
</script>

<style scoped>
.body {
  transition: 150ms ease-out;
}
.accordion-enter, .accordion-leave-to {
  opacity: 0;
}
</style>