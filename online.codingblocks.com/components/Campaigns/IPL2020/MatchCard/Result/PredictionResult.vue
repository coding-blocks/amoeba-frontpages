<template>
  <div>
    <div class="pb-4 border-bottom">
      <div class="d-flex justify-content-between align-items-center">
        <div class="font-md bold">Prediction Results</div>
        <div class="t-align-r">
          <div class="bold score">{{correctAnswers}}/{{totalQuestions}}</div>
          <div class="font-mds bold">Correct</div>
        </div>
      </div>
    </div>  
    <div class="mt-4" v-if="won">
      <div class="font-md bold">Your Coupon Code</div>
      <div class="font-mds med-grey mt-3">Get {{attempt.meta.coupon.percentage}}% Off on all online courses</div>
      <div class="d-flex mt-3">
        <CouponCode 
          :coupon="attempt.meta.coupon.code"
        />
      </div>
      <div class="bold med-grey mt-3">Valid till {{attempt.meta.coupon.valid_end}}</div>
    </div>
    <div class="mt-4" v-else>
      <img 
        src="https://minio.codingblocks.com/public/cross-red.svg"
        class="s-20x20"
      />
      <div class="font-md bold mt-3">Sorry you missed it!</div>
      <div class="font-mds med-grey mt-3">
        Oops, you did not predicted the right choices, Try again for the next match!!
      </div>
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
  computed: {
    correctAnswers() {
      return this.attempt['tbm-submission'].submission.score / 10
    },
    totalQuestions() {
      return this.attempt['tbm-submission'].submission.questions.length
    },
    won() {
      return this.attempt.meta.won
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
