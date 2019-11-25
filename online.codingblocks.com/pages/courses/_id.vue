<template>
  <div>
    <IntroductionCard :course="course" />
    <CourseContentCard :sectionIds="topRunSectionIds"  />
    <ProjectsList :project-ids="projectIds" />

  </div>


</template> 

<script>
import IntroductionCard from '~/components/AboutCourse/IntroductionCard.vue'
import CourseContentCard from '~/components/AboutCourse/CourseContentCard/Index.vue'
import ProjectsList from '~/components/AboutCourse/ProjectsList.vue'

import { topRunForCourse } from '~/utils/course';


export default {
  data () {
    return {
      course: {}
    }
  },
  components: {
    IntroductionCard,
    CourseContentCard,
    ProjectsList
  },
  async asyncData ({ params, $axios, app }) {
    const res = await $axios.get(`/courses/${params.id}`)
    const course = app.$store.sync(res.data)
    return  {
      course
    }
  },
  computed: {
    projectIds () {
      return this.course.projects.map(x => x.id)
    },
    topRun () {
      return topRunForCourse(this.course)
    },
    topRunSectionIds () {
      return this.topRun.sections.map(s => s.id)
    }
  }
}
</script>