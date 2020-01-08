<template>
  <div class="c-sidenav bottom-nav col-md-1 col-12">
    <div class="logo pb-5 pt-4 d-md-block d-none">
      <FaIcon icon="slack" class="fab fa-slack fa-3x"></FaIcon>
    </div>
    <div class="row all-center">
      <div class="col-2 col-md-12">
        <a href="/app/dashboard" class="nav-element py-4 px-2">
          <FaIcon icon="chart-pie" class="fas fa-chart-pie font-xl"></FaIcon>
          <h6 class="pt-2 d-none d-md-block">Dashboard</h6>
        </a>
      </div>
      <div class="col-2 col-md-12">
        <a href="#buy" class="nav-element py-4 px-2 active">
          <FaIcon icon="search" class="fas fa-search font-xl"></FaIcon>
          <h6 class="pt-2 d-none d-md-block">Buy Courses</h6>
        </a>
      </div>
      <div class="col-2 col-md-12">
        <a href="/app/tracks" class="nav-element py-4 px-2">
          <FaIcon icon="graduation-cap" class="fas fa-graduation-cap font-xl"></FaIcon>
          <h6 class="pt-2 d-none d-md-block">Tracks</h6>
        </a>
      </div>
      <div class="col-2 col-md-12">
        <a href="/app/classroom" class="nav-element py-4 px-2">
          <FaIcon icon="video" class="fas fa-video font-xl"></FaIcon>
          <h6 class="pt-2 d-none d-md-block">My Courses</h6>
        </a>
      </div>
      <div class="col-2 col-md-12">
        <a href="/app/jobs" class="nav-element py-4 px-2">
          <FaIcon icon="suitcase" class="fas fa-suitcase font-xl"></FaIcon>
          <h6 class="pt-2 d-none d-md-block">Hiring Blocks</h6>
        </a>
      </div>
    </div>
  </div>
</template>