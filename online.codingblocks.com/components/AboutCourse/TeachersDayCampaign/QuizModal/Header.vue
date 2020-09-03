<template>
  <div class="bg-dark-grey br-10 white know-your-mentor">
    <div class="know-your-mentor__tag font-mds" style="left: calc(50% - 160px);">
      TEACHER'S DAY SPECIAL
    </div>
    <div class="row no-gutters align-items-center">
      <div class="col-md-6 col-sm-7 col-12 pl-lg-5 pl-md-4 pl-sm-5 pl-4 py-5 position-static">
        <div class="h-100">
          <div class="know-your-mentor__teacher know-your-mentor__teacher--left d-sm-block d-none">
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/teacher.svg">
          </div>
          <div class="flex-1 big-screen-padding">
            <h2 class="light beige">know your</h2>
            <div class="extra-bold" style="font-size: 36px;">MENTOR</div>
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline-mentor.svg">
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-5 col-12">
        <div class="know-your-mentor__skewed-container h-100 pr-lg-5 pr-md-4 pr-sm-5 pr-4 pl-sm-0 pl-4 py-5">
          <div class="row no-gutters align-items-end justify-content-sm-end justify-content-start">
            <div class="flex-1 t-align-r pr-5 d-md-block d-none">
              <div class="font-mds beige">Mentor Quiz</div>
              <h2>{{instructor.name}}</h2>
            </div>
            <div class="round s-100x100" style="border: solid 2px #D69D72;">
              <img :src="instructor.photo">
            </div>
            <div class="col-12 t-align-sm-r t-align-l d-md-none d-block mt-4">
              <div>
                <div class="font-mds beige">Mentor Quiz</div>
                <h2>{{instructor.name}}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="know-your-mentor__teacher d-sm-none d-block">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/teacher.svg">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    instructor: {
      type: Object,
      required: true
    }
  }
}
</script>
