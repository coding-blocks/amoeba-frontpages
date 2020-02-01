<template>
  <div class="mt-md-0 mt-5">
    <iframe :src="url" frameborder="0" controls allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'IntroVideoPlayer',
  props: {
    url: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
iframe {
  height: 100%;
  width: 100%;
  border-radius: 15px;
}
</style>