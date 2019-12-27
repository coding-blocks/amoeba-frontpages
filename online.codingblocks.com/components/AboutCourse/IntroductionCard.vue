<template>
  <div>
    <div class="position-relative">
    <div class="border-card bg-gradient-dpink white ">
      <img class="back-img" :src="course['cover-image']" alt="" />

      <div class="row justify-content-between align-items-center position-relative">
        <div class="col-8">
          <div>
            <span class="bold font-lg">{{course.title}}</span>
            <span class="ml-4">
              <a href="#" class="white">
                <i class="far fa-lg fa-heart"></i>
              </a>
              <a href="#" class="white">
                <i class="fas fa-lg fa-share-alt ml-2"></i>
              </a>
            </span>
          </div>
          <div class="font-normal mt-2">
            {{course.subtitle}}
          </div>
        </div>
        <div class="col-4 t-align-r">
          <img
            class="s-60x60 round"
            :src="course.logo"
            :alt="course.title"
          />
        </div>
      </div>
      
      <RatingStars class="my-4 d-flex align-items-center justify-content-between justify-content-md-start position-relative" :value="+course.rating">
        <span class="card-md font-normal ml-md-3 mr-5">
          {{this.course.rating}}/5, {{this.course['review-count']}} ratings
        </span>
      </RatingStars>

      <div class="d-none d-md-flex course-info-row position-relative">
        <div class="card-mentor-image mr-4">
            <img class="card-mentors" src="https://avatars0.githubusercontent.com/u/1327050?s=460&amp;v=4">
            <img class="card-mentors" src="https://avatars0.githubusercontent.com/u/1327050?s=460&amp;v=4">
        </div>
        <div class="info-item">
          <div>Instructors</div>
          <div>Arnav Gupta, Prateek Narang</div>
        </div>
        <div class="info-item">
          <div>Course Language</div>
          <div>Hindi, English</div>
        </div>
        <div class="info-item">
          <div>Course Duration </div>
          <div>6 Months</div>
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
  }
}
</script>

<style scoped>
.card-mentor-image {
  width: 10%;
  max-width: 60px ;
}
.course-info-row > .info-item > div:first-child {
  font-size: 0.9rem;
  font-weight: lighter;
  margin-bottom: 0.2rem;
}
.course-info-row > .info-item {
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
.card-mentor-image {
  padding-bottom: 5.5%
}
</style>