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
      <div v-if="attempt.meta.reward">
        <h4 class="mb-4">Congratulations You Won</h4>
        <div v-if="attempt.meta.isHattrickWin" class="font-mds red mt-3">You got a hattrick!</div>
        <div class="coupon-card white p-2">
          <div class="body p-3 t-align-c">
            <div class="font-mds bold">
              {{attempt.meta.reward}}
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="attempt.meta.coupon">
        <h4>Your Coupon Code</h4>
        <div class="font-mds med-grey mt-3">Get {{attempt.meta.coupon.percentage}}% Off on all online courses</div>
        <div class="d-flex mt-3">
          <CouponCode 
            :coupon="attempt.meta.coupon.code"
          />
        </div>
        <div class="bold med-grey mt-3">Valid till {{validTill}}</div>
      </div>
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
import moment from 'moment';

export default {
  props: {
    attempt: {
      type: Object,
      required: true
    }
  },
  computed: {
    correctAnswers() {
      console.log(this.attempt.id)
      return this.attempt['tbm-submission'].result.score / 10
    },
    totalQuestions() {
      return this.attempt['tbm-submission'].result.questions.length
    },
    won() {
      return this.attempt.meta.won
    },
    validTill() {
      return moment(this.attempt.meta.coupon.valid_end).format('MM DD YYYY')
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
  .coupon-card {
    background: linear-gradient(90deg, #26A87C 0%, #55C25C 100%);
    border-radius: 5px;
  }
  .coupon-card .body {
    border: 1px dashed #FFFFFF;
    border-radius: 5px;
  }
</style>
