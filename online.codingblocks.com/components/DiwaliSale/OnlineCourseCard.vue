<template>
  <div class="border-card p-0 py-5 white">
    <div class="row">
      <div class="col-6 d-flex flex-col justify-content-between align-items-start">
        <div class="pl-4 border-left-yellow">
          <div class="title bold">Online Course</div>
          <div class="font-sm mt-3 yellow">Lite &amp; Premium Batches</div>
        </div>
        <!-- 10px of border plus 1.5rem of pl-4 -->
        <div class="mt-5" style="padding-left: 2.125rem">
          <div class="font-mds">Coupon Code</div>
          <div class="d-flex mt-3">
            <div class="dashed-border p-2 font-md bold br-10">
              BFOL
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 d-flex flex-col justify-content-between align-items-center">
        <div class="percentage">
          75% OFF
        </div>
        <nuxt-link to="/courses" class="button-white-pink mt-4">
          Browse all courses
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .border-card {
    background: linear-gradient(90deg, #BF1F68 0%, #D93764 100%);
  }
  .border-left-yellow {
    border-left: solid 10px #FFBA08;
  }
  .yellow {
    color: #FFBA08;
  }
  .button-white-pink {
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 42.5px;
    background: #ffffff;
    color: #CE2D66;
  }
  .percentage {
    font-size: 50px;
    text-shadow: 4px 1px hsl(0deg 0% 100% / 50%);
  }
  .title {
    font-size: 1.75rem;
  }
</style>
