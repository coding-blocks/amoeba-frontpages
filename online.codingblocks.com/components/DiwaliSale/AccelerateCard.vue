<template>
  <div class="border-card p-0 py-5 white">
    <div class="row">
      <div class="col-6 d-flex flex-col justify-content-between align-items-start">
        <div class="pl-4 border-left-yellow">
          <div class="title bold d-flex align-items-center">
            <img 
              src="https://minio.codingblocks.com/public/accelerate.png" 
              alt="Accelerate"
              class="mr-2"
            >
            Courses
          </div>
          <div class="font-sm mt-3 yellow">
            Live Batches
          </div>
        </div>
        <!-- 10px of border plus 1.5rem of pl-4 -->
        <div class="mt-5" style="padding-left: 2.125rem">
          <div class="font-mds">Coupon Code</div>
          <div class="d-flex mt-3">
            <div class="dashed-border p-2 font-md bold br-10">
              BFLV50
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 d-flex flex-col justify-content-between align-items-center">
        <div class="percentage">
          50% OFF
        </div>
        <a href="https://codingblocks.com/live-classes.html" target="_blank" class="button-white-pink mt-4">
          Browse all courses
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .border-card {
    background: linear-gradient(90deg, #4F33DA 0%, #6536DE 100%);
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
    color: #6035DD;
  }
  .percentage {
    font-size: 50px;
    text-shadow: 4px 1px hsl(0deg 0% 100% / 50%);
  }
  .title {
    font-size: 1.75rem;
  }
</style>
