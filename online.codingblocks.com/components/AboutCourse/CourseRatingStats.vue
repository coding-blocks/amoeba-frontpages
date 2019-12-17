<template>
  <div class="row no-gutters">
    <div class="col-12 font-mds bold">Student Feedback </div>
    <div class="col-sm-3 col-12 my-auto">
      <div class="bold" style="font-size: 3.571rem;">{{stats.rating}} / 5.0 </div>
      <RatingStars class="rating my-2" :pos-rating-class="'mr-3'" :value="+stats.rating" />
      <div class="card-md bold">{{stats.count}} Ratings</div>
    </div>

    <div class="col-sm-9 col-12">
      <div class="row align-items-center mb-2" v-for="stat in distributedStats" :key="stat.stars">
        <div class="col-12 col-sm-7">
          <progress :value="stat.ratio"></progress>
        </div>
        <RatingStars class="col-12 col-sm-5 mt-sm-0 mt-2 rating d-flex" :pos-rating-class="'mx-3'" :value="+stat.stars">
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