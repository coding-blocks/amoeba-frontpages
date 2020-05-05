<template>
  <div class="row no-gutters">
    <div class="border-card">
      <div class="font-md bold mb-5">
        Student Feedback

        <div class="orange detailed_review_button" >
          <button type="button" class="btn" @click.prevent.stop="showModal = true">
            View all reviews
          </button>

        </div>
      </div>
      <Modal v-if="showModal" @close="showModal = false">
        <DetailedReviews :ratingStats="ratingStats" :reviews="reviews" :curCourseId="curCourseId" slot="body"/>
      </Modal>
      <div class="row no-gutters align-items-center mb-3">
        <div class="col-lg-7">
          <div class="row no-gutters align-items-center">
            <div class="col-sm-6">
              <div class="bold" style="font-size: 3.571rem;">
                {{ ratingStats.rating }} / 5.0
              </div>
              <div class="my-3">
                <RatingStars
                  pos-rating-class="mr-3"
                  neg-rating-class="d-none"
                  :value="ratingStats.rating"
                />
              </div>
              <div class="font-sm bold">{{ ratingStats.count }} Ratings</div>
            </div>
            <div class="col-sm-6 mt-sm-0 mt-4">
              <div
                class="d-flex mb-3 align-items-center"
                v-for="stat in distributedStats"
                :key="stat.stars"
              >
                <progress
                  class="progress-yellow flex-1 mr-2"
                  :value="stat.ratio"
                ></progress>
                <span class="card-sm bold mr-1">{{ stat.stars }}</span>
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
                  style="max-width: 10px !important;"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 pl-lg-4 mt-lg-0 mt-5">
          <div
            class="row no-gutters align-items-center mb-3"
            v-for="(review , index) in reviews " v-if="index <= 2"
            :key="review.id"
          >
            <img class="s-40x40 br-25 bg-grey mr-2" :src="review.user.photo" />
            <div class="col-8">
              <div class="card-md bold capital">
                {{ review.user.firstname }} {{ review.user.lastname }}
              </div>
              <div class="text-ellipses card-md">{{ review.heading }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from './RatingStars.vue'
import DetailedReviews from './DetailedReviews.vue'
import Modal from './Modal.vue'

export default {
  name: 'CourseRatingStats',
  props: {
    ratingStats: {
      type: Object,
      required: true
    },
    reviews: {
      type: Object,
      required: true
    },
    curCourseId: {
      type: Number
    }
  },
  components: {
    RatingStars,
    DetailedReviews,
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    distributedStats () {
      const { count, stats } = this.ratingStats
      return Object.keys(stats).reverse()
        .map((key) => ({
          ratio: stats[key] / count,
          stars: +key + 1
        }))
    }
  }
}
</script>

<style scoped>
.capital{
  text-transform: capitalize;
}
.detailed_review_button{
  float: right;
}
</style>