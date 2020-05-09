`<template>
  <VAaccordian>
    <template v-slot:head="{ onToggle, expanded }">
      <div v-show="featuredTag.tag.courses.length">
        <div class="row mb-4">
        <h4 class="font-lg col-10 capitalise">{{featuredTag.name}} ({{featuredTag.tag.courses.length}})</h4>
        <div class="my-auto font-normal font-md orange underline col-2" @click="onToggle" v-show="expandedCourses.length">{{expanded? 'Hide':'View All'}}</div>
        </div>
        <div class="w-100 h-100 row">
            <CourseCard
              :course="course"
              v-for="course in collapsedCourses"
              :key="course.id"
            />
        </div>
      </div>
    </template>
    <template v-slot:content >
      <div class="w-100 h-100 row">
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
      sortedCourses(){
        return this.featuredTag.tag.courses.sort((a,b)=> a.runs[0].price - b.runs[0].price)
      },
      collapsedCourses(){
        return this.sortedCourses.slice(0,3)
      },
      expandedCourses(){
        return this.sortedCourses.slice(3)

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