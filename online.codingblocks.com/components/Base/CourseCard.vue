<template>
  <div class="col-md-6 col-lg-4 mb-3">
    <div class="img-card">
      <div class="head pt-4">
        <!-- <img class="back-img back-img-course" loading="lazy" src="https://minio.codingblocks.com/amoeba/d89ffb7f-8f27-4aad-b490-2d3b2653d11d.svg"> -->
        <div class="t-align-r">
          <span class="font-lg pl-1 orange">&#8226;</span>
          <span class="font-lg pl-1 grey">&#8226;</span>
          <span class="font-lg pl-1 grey">&#8226;</span>
          <div class="card-sms">Beginner</div>
        </div>
        <h5 class="bold">Web Development</h5>
        <div class="mt-2">
          <span class="pos-rating orange">
            <FaIcon icon="star" class="fa-lg" v-show="!showEmpty" />
          </span>
          <span class="pos-rating orange">
            <FaIcon icon="star" class="fa-lg" v-show="!showEmpty" />
          </span>
          <span class="pos-rating orange">
            <FaIcon icon="star" class="fa-lg" v-show="!showEmpty" />
          </span>
          <span class="pos-rating orange">
            <FaIcon icon="star" class="fa-lg" v-show="!showEmpty" />
          </span>
          <span class="neg-rating">
            <FaIcon icon="star" class="fa-lg" v-show="!showEmpty" />
          </span>
          <span class="card-md font-normal ml-2">4/5, 435 ratings</span>
        </div>
        <div
          class="head__course-logo"
          style="padding: 0%; bottom: -30px; width: 70px; height: 70px;"
        >
          <img
            style="border-radius: 50%;"
            src="https://minio.codingblocks.com/amoeba/d89ffb7f-8f27-4aad-b490-2d3b2653d11d.svg"
            alt="logo"
          />
        </div>
      </div>
      <div class="px-lg-5 px-4 pt-5 pb-3">
        <div class="card-mentor mb-4">
          <div class="card-mentor-image">
            <img
              class="card-mentors"
              src="https://avatars0.githubusercontent.com/u/1327050?s=460&v=4"
            />
            <img
              class="card-mentors"
              src="https://avatars0.githubusercontent.com/u/1327050?s=460&v=4"
            />
          </div>
          <div class="pl-4">
            <div class="card-md font-normal">Instructors</div>
            <div class="bold">Arnav Gupta, Ayush Arora</div>
          </div>
        </div>
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="col-lg-8 col-6">
            <div>
              <span class="bold orange font-sm">&#x20b9; 9499</span>
              <span class="card-md bold grey pl-lg-3 pl-1">
                &#x20b9;
                <del>12999</del>
              </span>
            </div>
            <div class="card-md mt-1">Batches starting Dec 1st</div>
          </div>
          <button class="button-solid button-orange">Explore</button>
        </div>
        <div class="divider-h my-4"></div>
        <a href="#" class="orange t-align-c d-block card-md font-normal">Try it for Free!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {}
}
</script>

<style scoped>
.back-img {
  top: 0%;
  left: 0%;
}

.head {
  padding-left: 31px;
  padding-right: 31px;
  background-image: url('https://minio.codingblocks.com/amoeba/ccaf84b6-63df-40f8-b4df-f64b8b9ecd9e.svg');
  background-size: 100%;
}

/* .course-card {

} */
</style>
