<template>
  <div class="container mt-5">
    <div class="row">
      <IntroductionCard class="col-8" :course="course" />
      <IntroVideoPlayer class="col-4" :url="course['promo-video']" />
      <div class="col-8 mt-5">
        <div class="border-card">
          <h2>Summary</h2>
          <VMarkdown :markdown="course.summary"/>
        </div>
      </div>
      
      <VAsync class="col-8 mt-5" :task="fetchRatingStats">
        <template v-slot="{ value }">
          <CourseRatingStats class="border-card" :stats="value" />
        </template>
      </VAsync>

      <CourseContentCard class="col-8 mt-5" :sectionIds="topRunSectionIds"  />
      <ProjectsList class="col-8 mt-5" :project-ids="projectIds" />
      <MentorsCard class="col-8 mt-5" :instructors="course.instructors" />
    </div>
  </div>


</template> 

<script>
import IntroductionCard from '~/components/AboutCourse/IntroductionCard.vue'
import VMarkdown from '~/components/Base/VMarkdown.vue'
import CourseRatingStats from '~/components/AboutCourse/CourseRatingStats.vue'

import CourseContentCard from '~/components/AboutCourse/CourseContentCard/Index.vue'
import ProjectsList from '~/components/AboutCourse/ProjectsList.vue'
import MentorsCard from "~/components/AboutCourse/MentorsCard.vue";
import IntroVideoPlayer from "~/components/AboutCourse/IntroVideoPlayer.vue";
import ChooseBatch from "~/components/AboutCourse/ChooseBatch.vue";


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
    MentorsCard,
    IntroVideoPlayer,
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


<style scoped>
@media (min-width: 1200px) {
  .container {
    max-width: 1440px;
    padding: 0 2%;
  }
}

</style>