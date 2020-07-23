<template>
  <div class="border-card p-0">
    <div class="d-flex align-items-center justify-content-between br-15 p-4" style="background-image: url(https://minio.codingblocks.com/amoeba/a0c2d06d-4aef-40d9-baac-328876d5290e.svg);">
      <div class="white">
        <div class="font-xs">Advanced Course</div>
        <div class="font-mdxl bold">Competitive Prog.</div>
        <RatingStars class="mt-2" :value="5">
          <span class="card-md font-normal ml-2"> 5/5, 5 ratings</span>
        </RatingStars>
      </div>
      <div>
        <div class="header__course-logo">
          <img src="https://minio.codingblocks.com/amoeba/0c0428ce-b68a-4b69-a984-7cacb3f50dcc.svg" alt="">
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
            <span class="font-xl bold mr-2">₹ 12,999</span>
            <strike class="font-mds extra-bold grey">₹ 12,999</strike>
          </div>
          <div class="batch-text mt-1 grey">
            Batch starting 15 April ’20
          </div>
          <div class="mt-4">
            <button class="button button-dashed button-orange">Buy Now</button>
          </div>
        </div>
        <div class="vertical-divider"></div>
        <div class="pr-4">
          <div class="d-flex align-items-center">
            <img :src="iconLite" class="mr-1" />
            <div class="font-lg extra-bold">LITE</div>
          </div>
          <div class="mt-4">
            <span class="font-xl bold mr-2">₹ 12,999</span>
            <strike class="font-mds extra-bold grey">₹ 12,999</strike>
          </div>
          <div class="batch-text mt-1 grey">
            Batch starting 15 April ’20
          </div>
          <div class="mt-4">
            <button class="button button-dashed button-orange">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import RatingStars from '~/components/AboutCourse/RatingStars'
import { iconForTier, featuresForRunTier } from '~/utils/run'

export default {
  components: {
    RatingStars
  },
  computed: {
    iconPremium() {
      return iconForTier('PREMIUM')
    },
    iconLite() {
      return iconForTier('LITE')
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
</style>
