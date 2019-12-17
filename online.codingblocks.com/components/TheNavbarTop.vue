<template>
  <div class="container-fluid c-topnav py-3" id="TheNavbarTop">
    <div class="d-flex justify-content-between">
      <div class="w-30 font-lg my-auto">
        Coding Blocks | Online
      </div>
      <div class="d-flex justify-content-between col-9 col-md-7 col-lg-6 align-items-center nav-items">
        <div>Learning Tracks</div>
        <div>Explore Courses</div>
        <div>Hiring Blocks</div>
        <button class="button-solid button-orange">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheNavbarTop'
}
</script>

<style scoped>
#TheNavbarTop {
  padding: 0 2%;
}
.nav-items {
  max-width: 650px;
}
</style>
