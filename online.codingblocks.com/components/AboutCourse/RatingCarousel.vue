<template>
  <VAsync :task="fetchReviews">
    <template v-slot="{value : reviews }" >
      <div class="row rating-carousel" v-if="reviews.length">
          <div class="col-10 col-md-4 col-lg-3" v-for="review in reviews" :key="review.id">
            <div class="border-card round c-rating-card">
              <div class="row justify-content-between no-gutters">
                <div class="bold font-sm">{{review.user.firstname}} {{review.user.lastname}}</div>
                <!-- <div class="grey card-md"></div> //TIME-->
              </div>

              <div class="heading text-ellipses">
                {{review.heading}}
              </div>

              <div id="ember850" class="ember-view"><!-- showValue: {type: bool, description: to show total number of reviews} -->
              <RatingStars :value="review.value" class="rating"/>

</div>

              <div class="review grey">
                {{review.review}}
              </div>
            </div>
          </div>

    </div>
    </template>
  </VAsync>

    
</template>


<script>
import VAsync from '~/components/Base/VAsync'
import RatingStars from '~/components/AboutCourse/RatingStars.vue'


export default {
    name:"RatingCarousel",
    components : {
        VAsync,
        RatingStars
    },
    props : {
        courseId: {
            required :true,
        }
    },
    methods :{
      lastUpdate(time){

      }
    },
    tasks(t) {
    return {
      fetchReviews: t(function*() {
        const response = yield this.$axios.get(
            `ratings/course/${this.courseId}?page%5Boffset%5D=0&page%5Blimit%5D=10`
        )
        return this.$jsonApiStore.sync(response.data)
      })
    }
  }
    
}
</script>

<style scoped>

  
  .rating-carousel {
    flex-wrap: nowrap;
    overflow-x: auto;
    position: relative;
    padding: 20px;
    margin-top: 20px;
  }
  .c-rating-card {
    padding: 25px 18px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    -ms-border-radius: 15px;
    border-radius: 15px;
    height: 225px;
    margin-bottom: 30px;
  }

  .c-rating-card .heading {
    font-size: 1.143rem;
    margin-top: 15px;
    font-weight: 600;
  }
  .heading {
    text-transform: capitalize;
    font-size: 1.713rem;
  }
  .c-rating-card .review {
    height: 82px;
    overflow-y: auto;
  }
  .c-rating-card .rating {
    margin: 8px 0 15px;
  }
</style>


