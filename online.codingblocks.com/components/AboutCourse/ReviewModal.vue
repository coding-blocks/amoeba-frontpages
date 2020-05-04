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

    <section class="modal-body" id="modalDescription" v-infinite-scroll="() => this.loadMore.run()"
      infinite-scroll-disabled="disabledInfiniteScroll"
      infinite-scroll-distance="10">
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

  if (process.client) {
    var infiniteScroll = require('vue-infinite-scroll')
  }

export default {
  name: 'DetailedReviews',
  directives: {
    infiniteScroll
  },
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
    RatingStars
  },
  data() {
    return {
      offset: 0,
      limit: 6,
      infiniteScrollDisabled: false
    }
  },
  computed: {
    isSearching () {
      return this.loadMore.isActive
    },
    disabledInfiniteScroll () {
      return !this.reviews.length || this.isSearching || this.infiniteScrollDisabled
    }
  },
  tasks(t, { timeout }) {
    return {
      loadMore: t(function *() {
        debugger;
        this.$nuxt.$loading.start()
        this.infiniteScrollDisabled = true
        this.offset += 5
        const res = yield this.$axios.get(
            `ratings/course/45`, { params: { page: { limit: 5 , offset: 5}  } } )
        const newreviews = yield this.$jsonApiStore.sync(res.data)
        if (reviews.length) {
          this.reviews = [...this.reviews , ...newreviews]
          this.infiniteScrollDisabled = false
        }
        else
        this.infiniteScrollDisabled = true // no new courses to load
        this.$nuxt.$loading.finish()
      })
    }
  }
}
</script>
<style>
.float{
  float: right;
}

</style>