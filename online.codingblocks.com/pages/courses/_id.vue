<template>
  <div class="container mt-5">

    <!-- First Half -> IntroCard IntroVideo Summary Choose Batch Course Tags -->
    <div class="row first-half">
      <IntroductionCard class="col-md-8 order-1" :course="course" />
      <IntroVideoPlayer class="col-md-4 order-3" :url="course['promo-video']" />
      <div class="col-md-8 mt-5 order-4">
        <div class="border-card">
          <h2>Summary</h2>
          <VMarkdown :markdown="course.summary"/>
        </div>
      </div>
      <div class="col-md-4 mt-5 order-2">
        <ChooseBatch :runs="availableRuns" />
        <CourseTags class="d-block d-sm-none" :tags="course.tags" v-if="!course.tags.length" />
      </div>
    </div>
    <div class="row">
      
      <div class="col-md-8 mt-5">
        <!-- Course Rating -->
        <VAsync :task="fetchRatingStats">
          <template v-slot="{ value }">
            <CourseRatingStats class="border-card" :stats="value" />
          </template>
        </VAsync>

        <!-- Sections Contents Accordion -->
        <CourseContentCard class="mt-5 course-content" :sectionIds="topRunSectionIds"  />
      </div>

      <div class="col-md-4 mt-5">
        <ProjectsList class="projects" :project-ids="projectIds" />
        <WildcraftCard class="mt-4" />
        <CourseFeatures :features="course.coursefeatures" class="mt-4" />
      </div>

    </div>
    <div class="row  mt-5">
      <MentorsCard class="col-md-8" :instructors="course.instructors" />
      <LeadGenerationCard class="col-md-4" />
    </div>

    <!-- Fin. -->
    <div class="my-5"></div>
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
import CourseTags from "~/components/AboutCourse/CourseTags.vue";
import WildcraftCard from "~/components/AboutCourse/WildcraftCard.vue";
import CourseFeatures from "~/components/AboutCourse/CourseFeatures.vue";
import LeadGenerationCard from '~/components/AboutCourse/LeadGenerationCard.vue';


import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser';

import VAsync from '~/components/Base/VAsync.vue'

import { topRunForCourse } from '~/utils/course';


export default {
  mixins: [sidebarLayoutMixin],
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
    ChooseBatch,
    CourseTags,
    WildcraftCard,
    CourseFeatures,
    LeadGenerationCard,
    VAsync
  },
  async asyncData ({ params, $axios, app }) {
    const res = await $axios.get(`/courses/${params.id}`)
    const course = app.$jsonApiStore.sync(res.data)
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
    availableRuns () {
      return (this.course['active-runs'] || [])
        .sort((run1, run2) => +run1.start - +run2.start)
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

@media (min-width: 576px) {
  .first-half > * {
    order: unset;
  }
}

.course-content {
  max-height: 600px;
  overflow: hidden;
}

</style>