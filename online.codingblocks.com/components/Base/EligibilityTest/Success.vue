<template>
  <div class="col-lg-12 mt-5">
    <div class="br-10 overflow-hidden border">
      <div class="bg-gradient-dpink px-md-5 px-4 py-5 position-relative"
           style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
        <div class="row no-gutters align-items-center white">
          <div class="border round border-white all-center s-100x100">
            <img src="https://minio.codingblocks.com/amoeba/e2c13faa-f538-48d4-8ca1-88728a07c51a.svg">
          </div>
          <div class="flex-1 pl-4">
            <div style="font-size: 2rem;">Skill Assessment Report</div>
            <div class="mt-1 bold" style="font-size: 2rem;">Frontend Development</div>
          </div>
        </div>
      </div>
      <div class="bg-white p-md-5 p-4">
        <div class="row no-gutters align-items-center justify-content-between pb-5 mb-sm-5 mb-4 border-bottom">
          <div class="flex-1 pr-4">
            <div class="row no-gutters align-items-center">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tick_solid.svg">
              <div class="flex-1 pl-4">
                <div class="font-mdxl green bold">Congratulations</div>
                <div class="font-md mt-2">You are eligible for this course</div>
              </div>
            </div>
          </div>
          <div class="d-sm-block d-none">
            <ul class="divided-list">
              <li class="px-sm-5 px-4">
                <div class="font-mdxl green bold mb-2">10</div>
                <div class="font-md">Questions</div>
              </li>
              <li class="px-sm-5 px-4">
                <div class="font-mdxl green bold mb-2">{{result.correctAnswers}}</div>
                <div class="font-md">Correct</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row no-gutters justify-content-end d-sm-none d-block mb-5">
          <div>
            <ul class="divided-list mx-auto" style="width: fit-content;">
              <li class="px-sm-5 px-4">
                <div class="font-mdxl green bold mb-2">10</div>
                <div class="font-md">Questions</div>
              </li>
              <li class="px-sm-5 px-4">
                <div class="font-mdxl green bold mb-2">07</div>
                <div class="font-md">Correct</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="t-align-c">
          <button class="button-dashed button-orange">Take free trial</button>
          <button class="button-solid button-orange ml-4">Buy this course</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Success',
  props: {
    result: Object,
    course: Object
  }
}
</script>
