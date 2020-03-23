<template>
    <div class="bg-light-grey mx--5">
        <div class="container my-4 py-5">
          <div :class="session.isAuthenticated && 'mx-md-4 mx-lg-5'">
            <div class="row">
              <div class="col-md-9">
                <div class="d-flex align-items-center">
                  <div class="mr-3">
                    <img class="s-60x60 round tracks-logo my-auto" :src="track.logo" alt="">
                  </div>
                  <div class="justify-content-between col">
                    
                    <div class="bold font-md orange">
                      <span class="v-align-ma">
                      <FaIcon icon='exclamation-triangle' class="mr-2 s-20x20" />
                      </span>
                      <span> Try out the {{track.name}} track instead </span>
                    </div>
                    <div class="mt-3 grey">We recomend our all new tracks with newer content and guided learning experience. Explore and choose courses from {{track.name}} Track instead of this course!</div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-auto t-align-md-r t-align-c pt-md-0 pt-4">
                <button class="button-solid button-orange">
                  Explore Track
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "AlternateTrackCard",
    props: {
        track : {
            type: Object, 
            required: true
        }
    },
    computed: {
      ...mapState(['session'])
    }
}

</script>


<style scoped>
  @media (min-width: 992px) {
    .mx--5 {
      margin-right: -1.5rem;
      margin-left: -1.5rem;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1440px;
      padding: 0 2%;
    }
    .mx--5 {
      margin-right: -3rem;
      margin-left: -3rem;
    }
  }
  .tracks-logo {
    max-height: 100px;
    max-width: 100px;
    border-radius: 50px;
    border: 1.5px solid #fff;
    position: relative;
  }

  
</style>