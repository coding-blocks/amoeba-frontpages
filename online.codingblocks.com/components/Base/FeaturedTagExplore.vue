`<template>
  <VAaccordian>
    <template v-slot:head="{ onToggle, expanded }">
      <div v-show="featuredTag.courses.length">
        <div class="row mb-4">
          <h4 class="font-lgs col-10 capitalise">{{featuredTag.name}} ({{featuredTag.courses.length}})</h4>
          <div class="my-auto font-lgs orange underline col-2 t-align-r pointer" @click="onToggle" v-show="expandedCourses.length">{{expanded? 'Hide':'View All'}}</div>
        </div>
        <div class="h-100 row">
            <CourseCard
              :course="course"
              v-for="course in collapsedCourses"
              :key="course.id"
            />
        </div>
      </div>
    </template>
    <template v-slot:content >
      <div class="h-100 row">
            <CourseCard
              :course="course"
              v-for="course in expandedCourses"
              :key="course.id"
            />
        </div>
    </template>
  </VAaccordian>
</template>


<script>
  import CourseCard from './CourseCard'
  import VAaccordian from './VAccordion'
  
  export default {
    name: 'FeaturedTagExplore',
    props: {
      featuredTag: {
        type: Object
      }
    },
    components: {
      CourseCard,
      VAaccordian
    },
    computed:{
      collapsedCourses(){
        return this.featuredTag.courses.slice(0,3)
      },
      expandedCourses(){
        return this.featuredTag.courses.slice(3)

      }
    }

  }
</script>
<style>
.underline{
  text-decoration: underline;
}
.capitalise{
  text-transform: capitalize;
}
</style>`