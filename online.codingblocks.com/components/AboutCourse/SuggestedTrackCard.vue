<template>
  <div class="row no-wgutters mt-4">
      <div class="border-card bg-gradient-purple white">
        <div class="side-tag">
          <div class="card-sm light" style="letter-spacing: 0.2rem;">THIS COURSE IS A PART OF</div>
          <h4 class="bold gradient-text-yellow capital">{{track.name}} track</h4>
          <div class="normal"> Other courses in this track</div>
        </div>


          <VAsync :task="fetchTrackCourses">
            <template v-slot="{value:courses}">
              <div class="row no-gutters align-items-center my-4">
                <div class="col-lg-3 col-md-12 col-2">
                  <img :src="courses[0].logo" class="pr-3"
                    style="max-width: 60px !important;">
                </div>
                <div class="flex-1">
                  <h6 class="bold">{{courses[0].title}}</h6>
                  <div class="mt-1">
                    <div>
                      <RatingStars :value="courses[0].rating" class="inline"/>
                      <span class="card-md">
                        <strong>{{courses[0].rating}}/5.0, </strong>
                        {{courses[0]["review-count"]}} Ratings
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              <div class="divider-h"></div>

              <div class="row no-gutters align-items-center my-4">
                <div class="col-lg-3 col-md-12 col-2">
                  <img :src="courses[1].logo" class="pr-3"
                    style="max-width: 60px !important;">
                </div>
                <div class="flex-1">
                  <h6 class="bold">{{courses[1].title}}</h6>
                  <div class="mt-1">
                    <div>
                      <RatingStars :value="courses[1].rating" class="inline"/>
                      <span class="card-md">
                        <strong>{{courses[1].rating}}/5.0, </strong>
                        {{courses[1]["review-count"]}} Ratings
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </template>
          </VAsync>
          
          

        <div class="mt-5">
          <a :href="trackLink" class="gradient-text-yellow v-align-ma">
            <span>View Full Track</span>
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/arrow_right_orange.svg" class="ml-2">
          </a>
        </div>
      </div>
  </div>
</template>

<script>
import RatingStars from '~/components/AboutCourse/RatingStars.vue'
import VAsync from '~/components/Base/VAsync'

export default {
    name:'SuggestedTrackCard',
    props: {
      track :{
        type:Object,
        required : true,
      },
      curCourseId : {
        type:Number,
      }
    },
    
    components : {
      RatingStars,
      VAsync
    },
    computed :{
      trackLink() {
        return `/app/tracks/${this.track.id}`
      }
    },
    tasks(t) {
    return {
      fetchTrackCourses: t(function*() {
        const response = yield this.$axios.get(
          `career_tracks/${this.track.id}/relationships/courses`
        )
        const relatedTrackCourses = this.$jsonApiStore.sync(response.data)
        return relatedTrackCourses.filter(course => course.id != this.curCourseId)

      })
    }
  }
}
</script>

<style scoped>
  .capital {
    text-transform : capitalize;
  }
  .inline {
    display: inline-block;
  }


</style>