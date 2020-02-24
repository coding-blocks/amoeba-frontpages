<template>
  <div class="c-sidenav bottom-nav col-md-1 col-12">
    <div class="logo pb-4 pt-4 d-md-block d-none">
      <img src="https://minio.codingblocks.com/amoeba/OnlineLogo2020.svg" alt="Logo" class="s-50x50" />
    </div>
    <div class="row all-center">
      <div class="col-2 col-md-12">
        <a href="/app/dashboard" class="nav-element py-4 px-2">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/dashboard_grey.svg"/>
          <h6 class="pt-2 d-none d-md-block font-sm">Dashboard</h6>
        </a>
      </div>
      <div class="col-2 col-md-12">
        <nuxt-link to="/courses" class="nav-element py-4 px-2 active">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/buy_grey.svg"/>
          <h6 class="pt-2 d-none d-md-block font-sm">Buy Courses</h6>
        </nuxt-link>
      </div>
      <div class="col-2 col-md-12">
        <a href="/app/tracks" class="nav-element py-4 px-2">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tracks_grey.svg"/>
          <h6 class="pt-2 d-none d-md-block font-sm">Tracks</h6>
        </a>
      </div>
      <div class="col-2 col-md-12">
        <a href="/app/classroom" class="nav-element py-4 px-2">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/mycourses_grey.svg"/>
          <h6 class="pt-2 d-none d-md-block font-sm">My Courses</h6>
        </a>
      </div>
      <div class="col-2 col-md-12">
        <a href="/app/jobs" class="nav-element py-4 px-2">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/job_grey.svg"/>
          <h6 class="pt-2 d-none d-md-block font-sm">Hiring Blocks</h6>
        </a>
      </div>
    </div>
  </div>
</template>