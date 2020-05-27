<template>
  <div class="mymodal">
    <div class="border-card p-md-5 p-4">
      <header class="modal-header border-none p-0" id="modalTitle">
        <div
          class="row no-gutters justify-content-between align-items-center mb-5 pb-4"
        >
          <div class="col-lg-6 col-12">
            <div class="row no-gutters align-items-center">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/reviews_tag.svg" />
              <div class="flex-1 pl-4">
                <div style="letter-spacing: 0.1rem;">{{ courseName }}</div>
                <h2 class="bold">Customer Reviews</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 mt-lg-0 mt-3">
            <div
              class="row no-gutters align-items-center justify-content-lg-end justify-content-center"
            >
              <div class="font-mdxl extra-bold">{{ ratingStats.rating }}/5.0</div>
              <div class="d-flex align-items-center ml-4" style="width: fit-content;">
                <RatingStars
                  pos-rating-class="mr-2"
                  neg-rating-class="mr-2"
                  :value="ratingStats.rating"
                />
                <span class="font-sm bold ml-3">{{ ratingStats.count }}&nbsp;ratings</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        id="modalDescription"
        v-infinite-scroll="() => this.loadMore.run()"
        infinite-scroll-disabled="disabledInfiniteScroll"
        infinite-scroll-distance="10"
      >
        <slot name="body">
          <div v-for="review in modalReviews" :key="review.id">
            <div class="row no-gutters justify-content-between align-items-center">
              <div class="col-sm-6 col-12">
                <div class="row no-gutters align-items-center">
                  <img class="round s-70x70 mr-4 bg-gradient-orange" :src="review.user.photo | ensureAvatar" />
                  <div class="flex-1">
                    <h5 class="bold">{{ review.user.firstname }} {{ review.user.lastname }}</h5>
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
            <div class="mt-4">{{ review.heading }}</div>
            <div class="divider-h my-4"></div>
          </div>
        </slot>
      </section>
    </div>
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
      offset: 5,
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
      return (
        !this.modalReviews.length ||
        this.isSearching ||
        this.infiniteScrollDisabled
      )
    }
  },
  tasks(t, { timeout }) {
    return {
      loadMore: t(function*() {
        this.$nuxt.$loading.start()
        this.infiniteScrollDisabled = true
        const res = yield this.$axios.get(`ratings/course/${this.curCourseId}`,{ 
          params: { 
            page: { limit: this.limit, offset: this.offset } } 
          }
        )
        this.offset += 5

        const newreviews = yield this.$jsonApiStore.sync(res.data)
        if (newreviews.length) {
          this.modalReviews = [...this.modalReviews, ...newreviews]
          this.infiniteScrollDisabled = false
        } else this.infiniteScrollDisabled = true // no new reviews to load
        this.$nuxt.$loading.finish()
      })
    }
  },
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
