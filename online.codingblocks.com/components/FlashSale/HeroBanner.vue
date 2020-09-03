<template>
  <div class="background br-10">
    <div class="overlay p-5">
      <div class="row">
        <div class="d-flex justify-content-center col-12 col-md-6">
          <img 
            src="https://minio.cb.lk/public/flash-sale-logo.svg" 
            alt="Flash Sale Logo" 
          />
        </div>
        <div class="d-flex justify-content-center col-12 col-md-6 mt-4 mt-md-0">
          <div class="sale-card py-5">
            <div class="title px-5 mb-4">
              Interview Preparation
            </div>
            <div class="text ml-5">
              FLAT
            </div>
            <div class="amount pl-5">
              70%
            </div>
            <div class="text ml-5">
              OFF
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .background {
    background-color: #15171E;
  }
  .overlay {
    background: url(https://minio.codingblocks.com/public/flash-sale-overlay.svg);
  }
  .sale-card {
    background: linear-gradient(90deg, #D93764 0%, #F24F60 100%);
    border-radius: 30px;
    color: #ffffff;
    max-width: 300px;
  }
  .sale-card .title {
    font-size: 2.75rem;
    font-weight: bolder;
  }
  .sale-card .text {
    font-size: 1.875rem;
  }
  .sale-card .amount {
    font-size: 4.688rem;
    font-weight: bolder;
    border-left: #ffffff solid 7px;
    text-shadow: 4px 1px rgba(255, 255, 255, 0.5);
  }
</style>
