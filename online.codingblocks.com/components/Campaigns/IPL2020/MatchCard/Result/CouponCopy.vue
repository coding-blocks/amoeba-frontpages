<template>
  <div class="coupon-card white p-2">
    <div class="body p-3 t-align-c">
      <div class="font-mds bold">
        {{coupon}}
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    coupon: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
  .coupon-card {
    background: linear-gradient(90deg, #26A87C 0%, #55C25C 100%);
    border-radius: 5px;
  }
  .coupon-card .body {
    border: 1px dashed #FFFFFF;
    border-radius: 5px;
  }
</style>
