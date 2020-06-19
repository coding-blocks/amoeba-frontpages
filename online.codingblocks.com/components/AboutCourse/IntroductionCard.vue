<template>
  <div>
    <div class="position-relative">
      <div class="border-card white p-lg-5 p-4">
        <img class="back-img" :src="course['cover-image']" alt />

        <div class="row justify-content-between align-items-center no-gutters">
          <div class="flex-1 z-pos">
            <div class="row no-gutters align-items-center">
              <span class="bold font-xl col-xl-8">{{course.title}}</span>
              <span class="ml-xl-4 mt-xl-0 mt-3">
                <a href="#" class="white">
                  <i class="far fa-lg fa-heart"></i>
                </a>
                <a href="#" class="white">
                  <i class="fas fa-lg fa-share-alt ml-2"></i>
                </a>
              </span>
            </div>
            <div class="font-normal mt-xl-2 mt-3 font-sm">{{course.subtitle}}</div>
          </div>
          <div class="z-pos">
            <img class="s-70x70 round border border-white" :src="course.logo" :alt="course.title" />
          </div>
        </div>

        <RatingStars
          class="my-4 d-flex align-items-center position-relative"
          :value="+course.rating"
          pos-rating-class="mr-2"
          neg-rating-class="mr-2"
        >
          <span class="ml-3">
            <b>{{this.course.rating}}/5.0,</b>
            {{this.course['review-count']}} ratings
          </span>
        </RatingStars>

        <div class="row no-gutters">
          <div class="col-md-6 mb-3 mb-md-0">
            <div class="mentor-row">
              <div class="mentor-row__image-container">
                <img
                  class="mentor-row__image-container__mentor-image s-40x40"
                  :src="instructor.photo"
                  :alt="'photo of' + instructor.name"
                  v-for="instructor in visibleInstructors"
                  :key="instructor.id"
                />
              </div>
              <div class="mentor-row__text-container font-sm">
                <div>Instructors</div>
                <div class="bold">{{visibleInstructorNames}}</div>
              </div>
            </div>
          </div>
          <div class="ml-md-5 font-sm z-pos">
            <div>
              <div>Course Language</div>
              <div class="bold">{{course.language || 'English and Hindi'}}</div>
            </div>
          </div>
          <!-- <div class="col-6 col-md-3">
            <div class="info-item">
            <div>Course Duration </div>
            <div>6 Months</div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from './RatingStars.vue'
export default {
  name: 'IntroductionCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    RatingStars
  },
  computed: {
    visibleInstructors() {
      return this.course.instructors.slice(0, 2)
    },
    visibleInstructorNames() {
      return this.visibleInstructors.map((i) => i.name).join(', ')
    }
  }
}
</script>

<style scoped>
.back-img {
  top: 0;
  left: 0;
  z-index: 0;
}
</style>