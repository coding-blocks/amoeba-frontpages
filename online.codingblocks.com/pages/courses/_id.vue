<template>
<div>
  <div class="container mt-5">
        <ul class="breadcrumbs mb-4">    
          <li>
              <nuxt-link to="/courses">
                Buy Courses
              </nuxt-link>
          </li>
          <li>    
            {{course.title}}
          </li>
        </ul>
  </div>

  <AlternateTrackCard :track="course['alternate-track']" v-if="course['alternate-track']" />
    <!-- First Half -> IntroCard IntroVideo Summary Choose Batch Course Tags -->
   <div class="container mt-5">
    <div class="row first-half">
      <IntroductionCard class="col-md-8 order-1" :course="course" />
      <IntroVideoPlayer class="col-md-4 order-3" :url="course['promo-video']" />
      <div class="col-md-8 mt-5 order-4">
        <div class="border-card">
          <h2 class="font-md">Summary</h2>
          <VMarkdown class="course-summary" :markdown="course.summary" />
        </div>
      </div>
      <div class="col-md-4 mt-5 order-2">
        <ChooseBatch :course-id="course.id" :runs="availableRuns" />
        <CourseTags class="d-block d-sm-none" :tags="tags" v-if="!tags.length" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mt-5">
        <!-- Course Rating -->
        <VAsync :task="fetchReviewStats">
          <template v-slot="{ value }">
            <CourseRatingStats v-bind="value" />
          </template>
        </VAsync>

        <!-- Sections Contents Accordion -->
        <CourseContentCard class="mt-5 course-content" :sectionIds="topRunSectionIds" />
      </div>

      <div class="col-md-4 mt-5">
        <SuggestedTrackCard :track="course['suggested-track']" :curCourseId="course.id"/>
        <ProjectsList class="projects" :project-ids="projectIds" />
        <WildcraftCard class="mt-4" />
        <CourseFeatures :features="course.coursefeatures" class="mt-4" />
      </div>
    </div>




    <div class="row mt-5">
      <MentorsCard class="col-md-8" :instructors="course.instructors" />
      <LeadGenerationCard :course-title="course.title" class="col-md-4" />
    </div>

    <StudentsExperience :show-iframe="false" />
    <!-- Fin. -->
    <div class="my-5"></div>
  </div>
</div>
</template>

<script>
import IntroductionCard from '~/components/AboutCourse/IntroductionCard.vue'
import VMarkdown from '~/components/Base/VMarkdown.vue'
import CourseRatingStats from '~/components/AboutCourse/CourseRatingStats.vue'

import CourseContentCard from '~/components/AboutCourse/CourseContentCard/Index.vue'
import ProjectsList from '~/components/AboutCourse/ProjectsList.vue'
import MentorsCard from '~/components/AboutCourse/MentorsCard.vue'
import IntroVideoPlayer from '~/components/AboutCourse/IntroVideoPlayer.vue'
import ChooseBatch from '~/components/AboutCourse/ChooseBatch.vue'
import CourseTags from '~/components/AboutCourse/CourseTags.vue'
import WildcraftCard from '~/components/AboutCourse/WildcraftCard.vue'
import CourseFeatures from '~/components/AboutCourse/CourseFeatures.vue'
import LeadGenerationCard from '~/components/AboutCourse/LeadGenerationCard.vue'
import StudentsExperience from '~/components/LandingPage/StudentsExperience.vue'
import SuggestedTrackCard from '~/components/AboutCourse/SuggestedTrackCard.vue'
import AlternateTrackCard from '~/components/AboutCourse/AlternateTrackCard.vue'


import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser'

import VAsync from '~/components/Base/VAsync.vue'
import { jsonSchemaForCourse } from '~/utils/seo'
import { topRunForCourse } from '~/utils/course'
import { metaForCourse } from '~/utils/seo'

export default {
  mixins: [sidebarLayoutMixin],
  async asyncData({ params, $axios, app }) {
    const res = await $axios.get(`/courses/${params.id}`)
    const course = app.$jsonApiStore.sync(res.data)
    return {
      course
    }
  },
  data() {
    return {
      course: {},
      eventFor75Percent: false,
      eventFor90Percent: false,
    }
  },

  jsonld() {
    return jsonSchemaForCourse(this.course)
  },
  head() {
    return {
      title: this.course.title,

      meta: metaForCourse(this.course)
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
    StudentsExperience,
    VAsync,
    SuggestedTrackCard,
    AlternateTrackCard
  },
  computed: {
    projectIds() {
      return this.course.projects.map((x) => x.id)
    },
    topRun() {
      return topRunForCourse(this.course)
    },
    availableRuns() {
      return (this.course['active-runs'] || []).sort(
        (run1, run2) => +run1.start - +run2.start
      )
    },
    topRunSectionIds() {
      const sections = this?.topRun?.sections
      return Array.isArray(sections) ? sections.map((s) => +s.id) : []
    },
    tags() {
      return this.course.tags || []
    }
  },
  tasks(t, { timeout }) {
    return {
      fetchReviewStats: t(function*() {
        const { data: ratingStats } = yield this.$axios.get(
          `courses/${this.course.id}/rating`
        )
        const response = yield this.$axios.get(
            `ratings/course/${this.course.id}?page%5Boffset%5D=0&page%5Blimit%5D=3`
        )
        const reviews = this.$jsonApiStore.sync(response.data)        
        return {ratingStats,reviews}
      })
    }
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      let percent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      try {
        if(!this.eventFor75Percent && percent > 0.75) {
          this.eventFor75Percent = true;
          this.$gtm.pushEvent({event: "Scroll75"})
        }
        if(!this.eventFor90Percent && percent > 0.90) {
          this.eventFor90Percent=true;
          this.$gtm.pushEvent({event: "Scroll90"})
        }
      } catch (e) {
        console.error(e)
      }
    }
  },
  created () {
    if(typeof window !== 'undefined') {
    window.addEventListener('scroll', this.handleScroll);
    }
  },
  mounted () {
    this.$gtag('event', 'view_item', {
      items: [{
        id: this.course.id,
        name: this.course.title,
        list_name: "Course View",
        brand: "CodingBlocks",
        category: 'course_view',
        list_position: 1,
        price: '0'
      }]
    })
  },
  destroyed () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
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
  /* max-height: 600px; */
  overflow: hidden;
}


.course-summary {
  line-height: 1.5rem;
  text-align: justify
}
</style>


<style>
.course-summary h3{
  font-size: 1.428rem;
  margin-top: 2rem;
}

.breadcrumbs > li:not(:last-child) {
  font-weight: bold;
}

.breadcrumbs {
  padding-left: 0 !important;
}

.breadcrumbs > li:not(:first-child) {
  padding-left: 1rem !important;

}

.breadcrumbs > li:not(:first-child)::after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  top: 2px;
  left: 0px;
  background: url('https://minio.codingblocks.com/amoeba/arrow-right-breadcrumb.svg') no-repeat;
}

</style>
