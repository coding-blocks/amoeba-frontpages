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
            <div class="d-md-none d-block">
              <div class="button-solid button-white dark-grey mt-5">Play Now</div>
            </div>
            <div class="know-your-mentor__teacher">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/teacher.svg">
            </div>
          </div>
          <div class="d-md-block d-none">
            <button 
              class="button-solid button-white dark-grey ml-5"
              @click="onClickPlay()"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickPlay() {
      this.$emit('playNow')
    }
  }
}
</script>
