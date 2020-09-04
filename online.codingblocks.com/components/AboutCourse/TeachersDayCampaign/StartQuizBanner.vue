<template>
  <div class="px-lg-5 px-md-4 px-sm-5 px-4 py-5 bg-dark-grey br-10 white know-your-mentor">
    <div class="know-your-mentor__tag font-mds" style="left: calc(50% - 160px);">
      TEACHER'S DAY SPECIAL
    </div>
    <div class="row no-gutters align-items-center">
      <div class="d-md-block d-none pr-5" style="border-right: solid 1px #D69D72;">
        <h2 class="light beige">know your</h2>
        <div class="extra-bold" style="font-size: 36px;">MENTOR</div>
        <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline-mentor.svg">
      </div>
      <div class="col-12 d-md-none d-block pb-4 mb-4" style="border-bottom: solid 1px #D69D72;">
        <h2 class="light beige">know your</h2>
        <div class="extra-bold" style="font-size: 36px;">MENTOR</div>
        <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline-mentor.svg">
      </div>
      <div class="flex-1 pl-md-5 pl-0">
        <div class="row no-gutters justify-content-between align-items-center">
          <div class="flex-1" style="padding-right: 150px;">
            <h2 class="beige">Do you think you know your mentor?</h2>
            <div class="mt-sm-3 mt-4 font-sm">
              Answer 4 simple questions about them and
              <strong class="underline">get 70% off</strong>
              on online courses!!
            </div>
            <a 
              href="#" 
              class="d-block font-xs mt-sm-3 mt-4 underline beige"
              @click.stop.prevent="showTncModal = true"
            >
              Terms and Conditions
            </a>
            <div class="d-md-none d-block mt-3">
              <LoginRequiredButton 
                class="button-solid button-white dark-grey ml-5"
                @click="onClickPlay()"
                text="Play Now"
              />
            </div>
            <div class="know-your-mentor__teacher">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/teacher.svg">
            </div>
          </div>
          <div class="d-md-block d-none">
            <LoginRequiredButton 
              class="button-solid button-white dark-grey ml-5"
              @click="onClickPlay()"
              text="Play Now"
            />
          </div>
        </div>
      </div>
    </div>
    <Modal 
      v-if="showTncModal"
      @close="showTncModal = false"
    >
      <div slot="body" class="black p-5">
        <h2>Terms and Conditions</h2>
        <ul style="list-style: decimal">
          <li>The CB Teacher's Day campaign is organized by Coding Blocks Pvt. Ltd. Activity participants (hereinafter referred to as "Participants") take part in this by starting the game. </li>
          <li>All Participants shall be deemed as having agreed to the following terms and conditions. </li>
          <li>It's a 2-day Quiz Game i.e. 5th and 6th September. </li>
          <li>Every participant gets two chances for every course( one per day). </li>
          <li>Each participant can take the quiz for all the courses in one day. </li>
          <li>The validity of the Coupon Code is till 7th Sep 2020,11:59 PM. </li>
          <li>OTP verified mobile or email users can only access this feature. </li>
          <li>All coupons are valid only on lite and premium courses. </li>
          <li>In case of any discrepancies, the final decision of Coding Blocks would be valid. </li>
        </ul>
      </div>
    </Modal>
  </div>
</template>
<script>
import LoginRequiredButton from '~/components/Base/LoginRequiredButton'
import Modal from '~/components/AboutCourse/Modal'

export default {
  data() {
    return {
      showTncModal: false
    }
  },
  methods: {
    onClickPlay() {
      this.$emit('playNow')
    }
  },
  components: {
    LoginRequiredButton,
    Modal
  }
}
</script>
