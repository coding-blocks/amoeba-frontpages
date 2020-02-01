<template>
  <div>
    <div class="position-relative">
      <div class="border-card white">
        <img class="back-img" :src="course['cover-image']" alt="" />

        <div class="row justify-content-between align-items-center position-relative no-gutters">
          <div class="col-lg-10 col-sm-9 col-8">
            <div>
              <span class="bold font-xl">{{course.title}}</span>
              <span class="ml-4">
                <a href="#" class="white">
                  <i class="far fa-lg fa-heart"></i>
                </a>
                <a href="#" class="white">
                  <i class="fas fa-lg fa-share-alt ml-2"></i>
                </a>
              </span>
            </div>
            <div class="font-normal mt-2 font-sm">
              {{course.subtitle}}
            </div>
          </div>
          <div>
            <img
              class="s-70x70 round course-info-card-logo"
              :src="course.logo"
              :alt="course.title"
            />
          </div>
        </div>
        
        <RatingStars class="my-4 d-flex align-items-center position-relative" 
          :value="+course.rating"
          pos-rating-class="mr-2"
          neg-rating-class="mr-2"
          >
          <span class="ml-3">
            <b>{{this.course.rating}}/5.0,</b> {{this.course['review-count']}} ratings
          </span>
        </RatingStars>

        <div class="row course-info-row">
          <div class="col-md-6 mb-3 mb-md-0">
              <div class="card-mentor-image w-20">
                <img class="card-mentors" 
                  :src="instructor.photo"
                  :alt="'photo of' + instructor.name"
                  v-for="instructor in visibleInstructors" :key="instructor.id">
            </div>
            <div class="info-item" style="padding-left: 5rem;">
              <div>Instructors</div>
              <div>{{visibleInstructorNames}}</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="info-item">
            <div>Course Language</div>
            <div>Hindi, English</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="info-item">
            <div>Course Duration </div>
            <div>6 Months</div>
          </div>
          </div>
          
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
    visibleInstructorNames () {
      return this.visibleInstructors.map(i => i.name).join(', ')
    },
  }
}
</script>

<style scoped>
.card-mentor-image {
  width: 10%;
  max-width: 60px ;
}
.course-info-row .info-item > div:first-child {
  font-size: 0.9rem;
  font-weight: lighter;
  margin-bottom: 0.2rem;
}
.course-info-row .info-item {
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 1.5rem;
}
.back-img {
  top: 0;
  left: 0;
}
.position-relative {
  position: relative;
}
</style>