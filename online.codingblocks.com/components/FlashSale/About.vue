<template>
  <div class="d-flex bg-lightgrey px-4 py-5 justify-content-between br-10">
    <div class="col-md-6">
      <h2 class="pb-4 bold">ABOUT SALE</h2>
      <div>
        <p>
          <strong>Placement Season </strong> is on its way and we want you to be entirely prepared for it. 
        </p>
        
        <p class="bold">
          Here’s the treasure box for y’all to ace your dream interview with a bang. 
        </p>

        <p>
          Get placed with the right approach/ get placed with expertise.
        </p>
      </div>
    </div>
    <div class="col-md-5">
      <h2 class="pb-4 bold">HURRY UP!</h2>
      <div class="d-flex align-items-center mb-5">
        <div class="time-panel t-align-c py-3">

          <div class="value">04</div>
          <div class="font-xl">Days</div>
        </div>
        <div class="font-xl px-3"> : </div>
        <div class="time-panel t-align-c py-3">
          <div class="value">08</div>
          <div class="font-xl">hourse</div>
        </div>
        <div class="font-xl px-3"> : </div>
        <div class="time-panel t-align-c py-3">
          <div class="value">04</div>
          <div class="font-xl">Days</div>
        </div>
      </div>

      <h2 class="py-4 bold">COUPON CODE</h2>

      <div class="coupon-code">
        GET PLACED
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>


<style scoped>
.bg-lightgrey {
  background-color: #f2f2f2;
}

h2  {
  font-size: 30px;
  font-weight: normal;
}
p {
  font-size: 26px;
}
.time-panel {
  background-color: #333;
  color: white;
  width: 7.7rem;
  height: 7.7rem;
  border-radius: 10px;
}
.time-panel .value {
  font-size: 3.14rem;
}

.coupon-code {
  border: 1px solid black;
  font-size: 2.71rem;
  font-weight: bold;
  padding: 1.6rem;
  display: inline-block;
  position: relative;
  border-radius: 10px;
}

.coupon-code:after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 5%;
  border: 1px dashed black;
  width: 96%;
  height: 90%;
  left: 2%;
  border-radius: 10px;

}
</style>