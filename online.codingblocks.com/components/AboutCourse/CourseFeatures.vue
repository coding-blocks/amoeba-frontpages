<template>
  <div class="course-features border-card">
    <div class="font-mds bold">Course Includes</div>
    <div class="divider-h my-3"></div>
    <div class="row justify-content-center">
      <div class="col-6 d-flex align-items-center my-3" v-for="feature in features" :key="feature.icon">
        <div class="col-5 pl-0">
          <img :src="feature.icon" alt="">
        </div>
        <div class="col-7 align-self-center font-sm pr-0">
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