<template>
  <div class="course-features border-card">
    <div class="font-md bold mb-4">Course Includes</div>
    <div class="row no-gutters">
      <div class="col-6 my-4" v-for="feature in features" :key="feature.icon">
        <img :src="feature.icon" alt class="mb-3" style="max-width: 60px !important;" />
        <div class="font-sm">
          {{feature.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseFeatures',
  props: {
    features: {
      type: Array,
      required: true
    }
  }
}
</script>