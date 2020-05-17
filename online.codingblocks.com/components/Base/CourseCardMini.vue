<template>
  <nuxt-link :to="`/courses/${course.slug}`" class="col-lg-4 col-md-5 col-12">
    <div class="br-10 overflow-hidden m-2">
      <div class="row head no-gutters justify-content-between align-items-center bg-gradient-pink py-3 px-lg-5 px-4"
        :style="`background-image: url('${course['cover-image']}')`"
      >
        <div class="flex-1 pr-4 white" style="max-width: calc(100% - 75px);">
          <div class="card-xs chars-spaced uppercase">{{difficultyText}} COURSE</div>
          <h5 class="bold mt-1 text-ellipses">{{courseTitleMini}}</h5>

          <RatingStars class="row no-gutters align-items-center mt-2 rating-stars-small" :value="Math.round(+this.course.rating)">
            <div class="flex-1 card-md ml-1 d-sm-flex d-none">
              <strong>{{this.course.rating}}/5,</strong>
              {{this.course['review-count']}} ratings
            </div>
            <div class="col-12 card-md mt-2 d-sm-none">
             <strong>{{this.course.rating}}/5,</strong>
              {{this.course['review-count']}} ratings
            </div>
          </RatingStars>
          <div class="divider-h my-3 bg-med-grey"></div>
          <div class="card-sm bold">Starting from</div>
          <div class="v-align-ma">
            <span class="mr-2 font-lg bold letter-spaced">
              {{price > 0 ? `₹${price}` : 'Free' }}
            </span>
            <span class="font-sm bold med-grey letter-spaced" v-show="showMrp">
              ₹<del class="med-grey ml-1">{{mrp}}</del>
            </span>
          </div>
        </div>
        <div class="s-70x70 round border all-center border-2 border-white bg-inherit">
          <img :src="course.logo">
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import RatingStars from '~/components/AboutCourse/RatingStars'
import { formatTimestamp } from '~/utils/date'
import { topRunForCourse, textForDifficulty, freeTrialRunForCourse } from '~/utils/course';

export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object
    }
  },
  computed: {
    visibleInstructors() {
      return this.course.instructors.slice(0, 2)
    },
    visibleInstructorNames () {
      return this.visibleInstructors.map(i => i.name).join(', ')
    },
    topRun () {
      return topRunForCourse(this.course)
    },
    freeTrialRun () {
      return freeTrialRunForCourse(this.course)
    },
    price () {
      return this.freeTrialRun ? this.freeTrialRun.price : 9999
    },
    mrp () {
      return this.freeTrialRun ? this.freeTrialRun.mrp : ''
    },
    difficultyText () {
      return textForDifficulty(this.course.difficulty)
    },
    tryNowLink () {
      return `/app/classroom/course/${this.course.id}/run/${this.freeTrialRun.id}`
    },
    startDateString () {
      return formatTimestamp(this.topRun.start)
    },
    courseId(){
      return `${this.course.id}`
    },
    courseTitleMini(){
      return this.course.title.split('|')[0]
    },
    showMrp () {
      return !(this.freeTrialRun && (this.freeTrialRun.mrp == this.freeTrialRun.price))
    },
  },
  components: {
    RatingStars
  }
}
</script>

<style scoped>
.head {
  padding-left: 31px;
  padding-right: 31px;
  background-image: url('https://minio.codingblocks.com/amoeba/ccaf84b6-63df-40f8-b4df-f64b8b9ecd9e.svg');
  background-size: 100%;
  background-size: cover;
  background-position: bottom;
}

.uppercase {
  text-transform: uppercase;
}

.letter-spaced {
  letter-spacing: 0.5px;
}

.bg-med-grey {
  background-color: rgba(255, 255, 255, 0.2);
}

.med-grey {
  color: rgba(255, 255, 255, 0.5) !important;
}

</style>

<style>
.rating-stars-small > span > img {
  width: 75%;
}

</style>
