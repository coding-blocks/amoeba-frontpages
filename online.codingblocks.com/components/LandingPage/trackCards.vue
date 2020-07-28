<template>
  <div class="container col-lg-4 col-md-6 col-10 mx-md-3 mb-md-0 mb-5">
    <VueSlickCarousel v-if="tracks && tracks.length > 1" v-bind="settings">
      <div v-for="track in tracks" v-bind:key="track.slug" :href="`/app/tracks/${track.slug}`">
        <TrackCarouselCard v-bind:track="track" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import TrackCarouselCard from '~/components/LandingPage/TrackCarouselCard.vue'
export default {
  name: 'trackCards',
  components: { VueSlickCarousel, TrackCarouselCard },
  mounted() {
    this.fetchTracks.run()
  },
  data() {
    return {
      tracks: [],
      settings: {
        arrows: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 6,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  tasks(t) {
    return {
      fetchTracks: t(function * () {
        const response = yield this.$axios.get(`/career_tracks`, {
          params: {
            page: {
              limit: 6
            }
          }
        })
        this.tracks = yield this.$jsonApiStore.sync(response.data)
      })
    }
  }
}
</script>
<style>
.slick-slider {
  margin-left: -30px;
}
.slick-prev {
  left: -45px;
}
.slick-prev:before {
  content: url('/img/leftArrow.svg');
}
.slick-next {
  right: -45px;
}
.slick-next:before {
  content: url('/img/rightArrow.svg');
}
</style>
