<template>
  <div>
    <header class="modal-header" id="modalTitle">
        <div>
        <h2>Customer Reviews</h2>
              <div class="font-sm float">{{ ratingStats.count }} Ratings</div>
              <div class="float mx-2">
                <RatingStars
                  pos-rating-class="mr-3"
                  neg-rating-class="d-none"
                  :value="ratingStats.rating"
                />
              </div>
              <div class="bold float">{{ ratingStats.rating }} / 5.0</div>
        </div>
    </header>

    <section class="modal-body" id="modalDescription">
      <slot name="body">
        <div
          class="row no-gutters align-items-center mb-3"
          v-for="review in reviews"
          :key="review.id"
        >
          <img class="s-40x40 br-25 bg-grey mr-2" :src="review.user.photo" />
          <div class="col-8">
            <div class="card-md bold capital">
              {{ review.user.firstname }} {{ review.user.lastname }} 
            </div>
              <div class="">
                <RatingStars
                  pos-rating-class="mr-3"
                  neg-rating-class="d-none"
                  :value="review.value"
                />
              </div>
            <div class="text-ellipses card-md">{{ review.heading }}</div>
          </div>
        </div>
      </slot>
    </section>
  </div>
</template>
<script>
import RatingStars from './RatingStars.vue'

export default {
  name: 'DetailedReviews',
  props: {
    ratingStats: {
      type: Object,
      required: true
    },
    reviews: {
      type: Object,
      required: true
    }
  },
  components: {
    RatingStars
  },
  data() {
    return {
      offset: 0,
      limit: 9
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style>
.float{
  float: right;
}
</style>