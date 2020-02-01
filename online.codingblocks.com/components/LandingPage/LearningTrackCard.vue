<template>
  <div class="mb-5">
    <div class="container">
      <div class="border-card p-5 bg-gradient-black-lr" style="position: relative;">
        <div class="d-flex align-items-center mb-5">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/track_icon.svg" alt />
          <h2
            class="gradient-text-orange bold font-lg ml-3 flex-1"
          >Introducing: Learning tracks</h2>
          <img src="https://minio.codingblocks.com/amoeba/newer.svg" class="s-70x70 float-right" />
        </div>

        <div class="white normal font-sm">
          Our expert instructors believe that systematically designed paths can help you to master your skills & achieve your career goals. We've got your back! Learning Tracks are carefully crafted with a step by step guide that saves you the effort to find out which course fits you well, and in what sequence to maximize your learning experience.
          <br />
          <br />Happy learning!
        </div>

        <TrackCards class="mt-5" />
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
