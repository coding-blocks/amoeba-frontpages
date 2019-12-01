<template>
  <div class="row no-gutters">
    <div class="col-sm-4 col-12 mb-sm-0 mb-3">
      <div class="bold" style="font-size: 3.571rem;">{{stats.rating}}</div>
      <RatingStars class="rating my-2" :value="+stats.rating" />
      <div class="card-md bold">{{stats.count}} Ratings</div>
    </div>

    <div class="col-sm-8 col-12">
      <div class="row align-items-center mb-2" v-for="stat in distributedStats" :key="stat.stars">
        <div class="col-12 col-sm-7">
          <progress :value="stat.ratio"></progress>
        </div>
        <RatingStars class="col-12 col-sm-5 mt-sm-0 mt-2 rating" :value="+stat.stars">
        </RatingStars>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from './RatingStars.vue'
export default {
  name: 'CourseRatingStats',
  props: {
    stats: {
      type: Object,
      required: true
    }
  },
  components: {
    RatingStars
  },
  computed: {
    distributedStats () {
      const { count, stats } = this.stats
      return Object.keys(stats).reverse()
        .map((key) => ({
          ratio: stats[key]/count,
          stars: +key + 1
        }))
    }
  }  
}
</script>