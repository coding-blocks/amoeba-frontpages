<template>
  <div class="container-fluid">
    <div class="col-9">
      <IntroductionCard :course="course" />
      <div>
        <h2>Summary</h2>
        <VMarkdown :markdown="course.summary"/>
      </div>
      
      <VAsync :task="fetchRatingStats">
        <template v-slot="{ value }">
          <CourseRatingStats :stats="value" />
        </template>
      </VAsync>

      <CourseContentCard :sectionIds="topRunSectionIds"  />
      <ProjectsList :project-ids="projectIds" />
    </div>

  </div>


</template> 

<script>
import IntroductionCard from '~/components/AboutCourse/IntroductionCard.vue'
import VMarkdown from '~/components/Base/VMarkdown.vue'
import CourseRatingStats from '~/components/AboutCourse/CourseRatingStats.vue'

import CourseContentCard from '~/components/AboutCourse/CourseContentCard/Index.vue'
import ProjectsList from '~/components/AboutCourse/ProjectsList.vue'

import VAsync from '~/components/Base/VAsync.vue'


import { topRunForCourse } from '~/utils/course';


export default {
  data () {
    return {
      course: {}
    }
  },
  components: {
    IntroductionCard,
    VMarkdown,
    CourseContentCard,
    ProjectsList,
    CourseRatingStats,
    VAsync,
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
      const sections = this?.topRun?.sections
      return Array.isArray(sections) ? sections.map(s => +s.id) : []
    }
  },
  tasks(t, {timeout}) {
    return {
      fetchRatingStats: t(function * () {
        const { data: ratingStats } = yield this.$axios.get(`courses/${this.course.id}/rating`)
        return ratingStats
      })
    }
  }
}
</script>