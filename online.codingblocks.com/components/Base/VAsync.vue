<template>
  <div>
    <div v-show="this.task.isActive">
      <slot name="loading"></slot>
    </div>
    <slot :value="value" v-if="showContent"></slot>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
      //TODO: write a validate fn
    },
    autoFire: {
      type: Boolean,
      defaultValue: true
    }
  },
  mounted () {
    // fire this task, unless autoFire is disabled
    !this.autoFire && this.task.run()
  },
  computed: {
    showLoader () {
      return this.task.isActive
    },
    showContent () {
      return !this.task.isActive && this.task.lastResolved
    },
    value () {
      return this.showContent && this.task.lastResolved.value
    }
  }
}
</script>