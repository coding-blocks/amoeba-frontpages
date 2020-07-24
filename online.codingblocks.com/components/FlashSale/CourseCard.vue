<template>
  <div class="border-card p-0 h-100">
    <div class="d-flex align-items-center justify-content-between br-15 p-4 card-bg" :style="`background-image: url('${course['cover-image']}')`">
      <div class="white">
        <div class="font-xs">{{difficultyText}} Course</div>
        <div class="font-mdxl bold">{{course.title}}</div>
        <RatingStars class="mt-2" :value="Math.round(+this.course.rating)">
          <span class="card-md font-normal ml-2"> {{this.course.rating}}/5, {{this.course['review-count']}} ratings </span>
        </RatingStars>
      </div>
      <div>
        <div class="header__course-logo">
          <img :src="course.logo" alt="">
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="d-flex justify-content-between">
        <div class="pr-4">
          <div class="d-flex align-items-center">
            <img :src="iconPremium" class="mr-1" />
            <div class="font-lg gradient-text-orange extra-bold">PREMIUM</div>
          </div>
          <div class="mt-4">
            <span class="font-xl bold mr-2">₹ {{premiumRun.price | formatPrice}}</span>
            <strike class="font-mds extra-bold grey" v-show="premiumRun.mrp && premiumRun.price < premiumRun.mrp" > {{premiumRun.mrp}} </strike>
          </div>
          <div class="batch-text mt-1 grey">
            Batch starting {{premiumRun.start | formatDate}}
          </div>
          <div class="mt-4">
            <a 
            target="_blank" 
            class="button button-dashed button-orange"
            :href="`https://dukaan.codingblocks.com/buy?productId=${premiumRun['product-id']}&` + (user ? `oneauthId=${user['oneauth-id']}` : '') + `coupon=GETPLACED`"
            >Buy Now</a>
          </div>
        </div>
        <div class="vertical-divider"></div>
        <div class="pr-4">
          <div class="d-flex align-items-center">
            <img :src="iconLite" class="mr-1" />
            <div class="font-lg extra-bold">LITE</div>
          </div>
          <div class="mt-4">
            <span class="font-xl bold mr-2">₹ {{liteRun.price | formatPrice}}</span>
            <strike class="font-mds extra-bold grey" v-show="liteRun.mrp && liteRun.price < liteRun.mrp" > {{liteRun.mrp}} </strike>
          </div>
          <div class="batch-text mt-1 grey">
            Batch starting {{liteRun.start | formatDate}}
          </div>
          <div class="mt-4">
            <a 
              target="_blank"
              class="button button-dashed button-orange"
              :href="`https://dukaan.codingblocks.com/buy?productId=${liteRun['product-id']}&` + (user ? `oneauthId=${user['oneauth-id']}` : '') + `coupon=GETPLACED`"
            >Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import RatingStars from '~/components/AboutCourse/RatingStars'
import { formatTimestamp } from '~/utils/date'
import { iconForTier, featuresForRunTier } from '~/utils/run'
import { textForDifficulty } from '~/utils/course'

const propEq = (key, val) => obj => obj[key] === val

export default {
  components: {
    RatingStars
  },
  props: {
    course: {
      type: Object
    }
  },
  computed: {
    iconPremium() {
      return iconForTier('PREMIUM')
    },
    iconLite() {
      return iconForTier('LITE')
    },
    premiumRun () {
      const runsSortedByStart = this.course.runs.sort((r1, r2) => r2.start - r1.start) // sort in desc order of start
      return runsSortedByStart.find(propEq('tier', 'PREMIUM'))
    },
    liteRun () {
      const runsSortedByStart = this.course.runs.sort((r1, r2) => r2.start - r1.start) // sort in desc order of start
      return runsSortedByStart.find(propEq('tier', 'LITE'))
    },
    difficultyText () {
      return textForDifficulty(this.course.difficulty)
    },
  },
  filters: {
    formatDate (ms) {
      return formatTimestamp(ms)
    },
    formatPrice (price) {
      const last = String(price).slice(-3)
      return String(price).split('').reverse().reduce((acc, val, ind) => [ ...(ind%3 ? [val] : [val, ','])   , ...acc]).join('')
    }
  }
}
</script>
<style scoped>
  .header__course-logo {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  .vertical-divider {
    width: 1px;
    background-color: #f2f2f2;
  }
  .batch-text {
    font-size: 0.625remm;
  }
  .card-bg {
    background-size: cover;
    background-position: center;
  }
</style>
