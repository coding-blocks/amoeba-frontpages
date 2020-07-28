<template>
  <div>
    <div class="row no-gutters justify-content-between align-items-center">
      <div class="col-12">
        <div class="row no-gutters align-items-center">
          <img class="round s-70x70 mr-4 bg-gradient-orange" :src="review.user.photo | ensureAvatar" />
          <div class="flex-1">
            <h5 class="bold">
              {{ review.heading }}
              <div class="grey font-sm">{{ review.user.firstname }} {{ review.user.lastname }}</div>
            </h5>
            <div class="mt-1">
              <RatingStars
                pos-rating-class="mr-2"
                neg-rating-class="mr-2"
                :value="review.value"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-sm-0 mt-2">
        <img src="/img/company.png" alt />
      </div>
    </div>
    <div class="mt-4">{{ review.review }}</div>
    <div class="divider-h my-4"></div>
  </div>
</template>
<script>
import RatingStars from './RatingStars.vue'

export default {
  name: 'DetailedReviewsRow',
  props: {
    review: {
      type: Object,
      required: true
    },
  },
  components: {
    RatingStars
  },
  // computed: {
  //  heading () {
  //    const { heading } = this.review
  //    return heading.length > 20 ? `${this.review.value} Stars` :  heading
  //  },
  //  text () {
  //    const { heading , review } = this.review
  //    return review || (heading.length > 20 ? heading : '')
  //  }
  // },
  filters: {
    ensureAvatar (img) {
      const random  = Math.floor(Math.random()*36) + 1
      return img || `https://minio.codingblocks.com/img/avatar-${random}.svg`
    }
  }
}
</script>
<style>
.mymodal {
  height: 80vh;
  overflow: auto;
}
</style>
