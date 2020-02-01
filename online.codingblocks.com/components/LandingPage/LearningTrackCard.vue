<template>
  <div class="mb-5">
    <div class="container">
      <div class="border-card p-5 bg-gradient-black-lr" style="position: relative;">
        <div class="d-flex align-items-center mb-5">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/track_icon.svg" alt />
          <h2
            class="gradient-text-orange bold font-lg ml-3 flex-1"
          >Introducing: Learning tracks</h2>
          <img src="https://minio.codingblocks.com/amoeba/new-orange.svg" class="s-70x70 float-right" />
        </div>

        <div class="white normal font-sm">
          We understand that sometimes you need more than one course to achieve your learning goals.
          We're here to help. Tracks arrange courses on a topic in sequenc, saving you the effort of
          going through our courses to find out which ones fit well together, and in what order. Our
          tracks are carefully vetted and arranged to maximize your learning experience.
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
