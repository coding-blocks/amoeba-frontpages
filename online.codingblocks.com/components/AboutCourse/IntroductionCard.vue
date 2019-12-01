<template>
  <div class="row">
    <div class="col-8">
      <div class="border-card p-5 bg-gradient-dpink white buy-course-card">
        <div class="row no-gutters justify-content-between align-items-center">
          <div>
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
            <div class="font-normal mt-3">
              {{course.subtitle}}
            </div>
          </div>
          <div class="course-logo">
            <img
              class="s-60x60 round"
              :src="course.logo"
              :alt="course.title"
            />
          </div>
        </div>
        
        <RatingStars class="rating my-5" :value="+course.rating">
          <span class="card-md font-normal ml-3">
            {{this.course.rating}}/5, {{this.course['review-count']}} ratings
          </span>
        </RatingStars>
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
