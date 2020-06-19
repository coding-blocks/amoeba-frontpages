<template>
  <div class="mb-4 p-5 bg-light-grey learningTrackCards">
    <div class="container learningTrack">
      <div class="row justify-content-between mx-0" style="position: relative;">
        <div class="d-flex flex-1 justify-content-between mb-5 ">
          <div class="flex-col align-items-start">
            <h4 class="global-font-heading-color normal font-xl">Introducing</h4>
            <h2 class="global-font-heading-color extra-bold font-mdxl">Learning Tracks</h2>
          </div>
          <button class="button-orange button-dashed d-flex align-items-center help-button">
            <img src="/img/chat.svg" alt="chat" loading="lazy" />
            <span class="font-md ml-2">Need Help?</span>
          </button>
        </div>

        <div class="dark-grey normal font-md line-height-29">
          Our expert instructors believe that systematically designed paths can help you to master your skills &amp; achieve your career goals. We've got your back! <span class="bold">Learning Tracks </span> are carefully crafted with a step by step guide that saves you the effort to find out which course fits you well, and in what sequence to maximize your learning experience.
          <br />
          <span class="bold">Happy learning!</span>
        </div>

        <TrackCards />
      </div>
    </div>
  </div>
</template>
<script>
import TrackCards from '~/components/LandingPage/trackCards'
export default {
  components: {
    TrackCards
  }
}
</script>

<style scoped>
.learningTrack::before {
  content: "";
  background: #333333;
  position: absolute;
  left: 0rem;
  height: 70px;
  width: 10px;
}
.learningTrackCards::before {
  background: url(/img/tagBackground.svg) no-repeat;
  content: url(/img/newTag.svg);
  position: relative;
  top: -3.2rem;
  left: calc(100% - 14rem);
  padding: 9px 40px;
  background-position-x: calc(60%);
}
.line-height-29 {
  line-height: 29px;
}
.help-button {
  height: 50px;
  border-radius: 25px;
  padding: 0px 25px;
}
</style>
