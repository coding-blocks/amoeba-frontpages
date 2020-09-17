<template>
  <div>
    <div class="pb-4 border-bottom">
      <div class="d-flex justify-content-between align-items-center">
        <div class="font-md bold">Prediction Results</div>
        <div class="t-align-r">
          <div class="bold score">02/03</div>
          <div class="font-mds bold">Correct</div>
        </div>
      </div>
    </div>  
    <div class="mt-4">
      <div class="font-md bold">Your Coupon Code</div>
      <div class="font-mds med-grey mt-3">Get {{attempt.meta['percentage-off']}}% Off on all online courses</div>
      <div class="d-flex mt-3">
        <CouponCode 
          :coupon="attempt.meta['coupon-code']"
        />
      </div>
      <div class="bold med-grey mt-3">Valid till {{attempt.meta['coupon-expiry']}}</div>
    </div>
  </div>
</template>
<script>
import CouponCode from './CouponCopy';

export default {
  props: {
    attempt: {
      type: Object,
      required: true
    }
  },
  components: {
    CouponCode
  }
}
</script>
<style scoped>
  .score {
    color: #1F4FE0;
    font-size: 2.25rem;
  }
</style>
