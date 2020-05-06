<template>
  <div class="mymodal">
    <header class="modal-header" id="modalTitle">
      <div class="mb-4 mt-4 ml-3 mr-3">
        <img class="float-left mr-3 ml-2" src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/reviews_tag.svg" />
        <div class="float-left">
          <span class="font-md">{{courseName}}</span><br>
          <span class="font-lg extra-bold">Customer Reviews</span>
        </div>
        <div class="float-right">
          <div class="bold font-sm float-right mt-2">{{ ratingStats.count }} Ratings</div>
          <div class="float-right mt-2">
            <RatingStars pos-rating-class="mr-3" neg-rating-class="d-none" :value="ratingStats.rating" />
          </div>
          <div class="bold font-xlg float-right mr-2">{{ ratingStats.rating }} / 5.0</div>
        </div>
      </div>
    </header>
    <section class="mt-4 ml-5 mr-3" id="modalDescription" v-infinite-scroll="() => this.loadMore.run()" infinite-scroll-disabled="disabledInfiniteScroll" infinite-scroll-distance="10">
      <slot class="ml-3 mt-2" name="body">
        <div class="row no-gutters align-items-center mb-3" v-for="review in modalReviews" :key="review.id">
          <div><img class="s-50x50 br-50 bg-grey mr-4 user_image" :src="review.user.photo" /></div>
          <div class="col-10">
            <div class="card-md bold capital">
              <h4>{{ review.user.firstname }} {{ review.user.lastname }}</h4>
            </div>
            <div class="mt-1">
              <RatingStars pos-rating-class="mr-2" neg-rating-class="d-none" :value="review.value" />
            </div>
          </div>
          <div class="col-12">
            <p class="font-sm mb-1 mt-2">{{ review.heading }}</p>
          </div>
          <div class="divider-h my-2"></div>
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
    },
    courseName: {
      type: String
    }
  },
  components: {
    RatingStars
  },
  data() {
    return {
      offset: 0,
      limit: 5,
      infiniteScrollDisabled: false,
      modalReviews: this.reviews
    }
  },
  computed: {
    isSearching() {
      return this.loadMore.isActive
    },
    disabledInfiniteScroll() {
      return !this.modalReviews.length || this.isSearching || this.infiniteScrollDisabled
    }
  },
  tasks(t, { timeout }) {
    return {
      loadMore: t(function*() {
        debugger;
        this.$nuxt.$loading.start()
        this.infiniteScrollDisabled = true
        const res = yield this.$axios.get(
          `ratings/course/${this.curCourseId}`, { params: { page: { limit: this.limit, offset: this.offset } } })
        this.offset += 5

        const newreviews = yield this.$jsonApiStore.sync(res.data)
        if (newreviews.length) {
          this.modalReviews = [...this.modalReviews, ...newreviews]
          this.infiniteScrollDisabled = false
        } else
          this.infiniteScrollDisabled = true // no new courses to load
        this.$nuxt.$loading.finish()
      })
    }
  }
}

</script>
<style>
.float-right {
  float: right;
}

.float-left {
  float: left;
}

.mymodal {
  height: 800px;
  overflow: auto;
}

.user_image {
  height: 62px;
  width: 62px;
}

.font-xlg {
  font-size: 35px;
}
</style>
