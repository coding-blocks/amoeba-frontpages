<template>
  <div v-show="featuredTag.tag.courses.length">
    <div class="my-3 font-normal font-md">{{featuredTag.name}}</div>
    <div class="w-100 h-100 row">
        <CourseCard
          :course="course"
          v-for="course in featuredTag.tag.courses"
          :key="course.id"
        />
    </div>
  </div>
</template>
<script>
  import CourseCard from './CourseCard'
  
  export default {
    name: 'FeaturedTagExplore',
    props: {
      featuredTag: {
        type: Object
      }
    },
    components: {
      CourseCard
    },

  }
</script>
<style>

</style>