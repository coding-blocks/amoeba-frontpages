<template>
  <div>
    <div class="border-card bg-black white goodies-card mt-5 py-0">
      <div class="position-absolute free-tag">
        <img src="https://minio.codingblocks.com/img/goodies-card-background-1.svg" alt="background" width="100%">
      </div>

      <div class="d-flex position-relative align-items-center">
        <div class="font-mds font-normal mb-2">
          <img class="s-20x20" src="https://minio.codingblocks.com/img/yellow-gift-box.svg" alt="gift"> <br>
          <span class="text gradient-text-orange"> CB Goodies </span> <br>
          Get free CB goodies and swags with this course!*
        </div>
        <img src="https://minio.codingblocks.com/img/goodies-prizes.png" alt="goodies" class="my-4" width="152px">
      </div>
      <div class="tnc p-3 font-xs">
        *Not applicable for LITE batches. 
      </div>
    </div>
  </div>
</template>

<style scoped>
.tnc {
  position: absolute;
  bottom: -20px;
  right: 0;
}
.goodies-card {
  overflow: unset;
  /* background: url('https://minio.codingblocks.com/img/goodies-card-background.svg') */
}
.free-tag {
  top: -20px;
  left: 0;
  width: 100%;
}

.goodies-card::after {
  bottom: 26%;
  height: 52%;
}
</style>