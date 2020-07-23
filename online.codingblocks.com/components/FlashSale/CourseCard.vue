<template>
  <div class="border-card p-0">
    <div class="d-flex align-items-center justify-content-between br-15 p-4" style="background-image: url(https://minio.codingblocks.com/amoeba/a0c2d06d-4aef-40d9-baac-328876d5290e.svg);">
      <div class="white">
        <div class="font-xs">Advanced Course</div>
        <div class="font-mdxl bold">Competitive Prog.</div>
      </div>
      <div>
        <div class="header__course-logo">
          <img src="https://minio.codingblocks.com/amoeba/0c0428ce-b68a-4b69-a984-7cacb3f50dcc.svg" alt="">
        </div>
      </div>
    </div>
    <div class="p-4">
      <ul class="divided-list">
        <li class="w-50 px-4">
          <div class="v-align-ma">
            <img :src="iconUrl" class="mr-1" />
            <div class="font-lg gradient-text-orange extra-bold">PREMIUM</div>
          </div>
          <div class="list-data">Hello</div>
        </li>
        <li class="w-50 px-4">
          <div class="list-heading">Hello</div>
          <div class="list-data">Hello</div>
        </li>
      </ul>
    </div>
  </div>  
</template>
<script>
import { iconForTier, featuresForRunTier } from '~/utils/run'

export default {
  computed: {
    iconUrl() {
      return iconForTier('PREMIUM')
    }
  }  
}
</script>
<style scoped>
  .header__course-logo {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
</style>
