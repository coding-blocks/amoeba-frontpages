<template>
  <div>
    <Header :instructor="instructor" />
    <div class="t-align-c mt-5 font-mds pb-5 border-bottom">
      WHAT TO KNOW BEFORE YOU BEGIN:
    </div>
    <div class="row mt-5">
      <div class="col-sm-4 mb-sm-0 mb-4">
        <div class="font-mds bold mb-3 v-align-ma">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/clock-small.svg" class="mr-2" /> 
          <span>Timed</span>
        </div> 
        <div class="font-sm med-grey">
          The questions are timed, you will get 30 seconds for one question.
        </div>
      </div>
      <div class="col-sm-4 mb-sm-0 mb-4">
        <div class="font-mds bold mb-3 v-align-ma">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/files-small.svg" class="mr-2" /> 
          <span>Questions</span>
        </div> 
        <div class="font-sm med-grey">
          There will be 4 questions based on mentor choices.
        </div>
      </div>
      <div class="col-sm-4 mb-sm-0 mb-4">
        <div class="font-mds bold mb-3 v-align-ma">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/clock-small.svg" class="mr-2" /> 
          <span>Winners</span>
        </div> 
        <div class="font-sm med-grey">
          Answer all 4 correctly and win 70% off coupon for online course.
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <button 
        class="button-solid bg-dark-grey animated-icon-button"
        @click="startQuiz()"
      >
        <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/thunder-button.svg" class="mr-2">
        Start The Quiz
      </button>
    </div>
  </div>
</template>
<script>
import Header from '~/components/AboutCourse/TeachersDayCampaign/QuizModal/Header'

export default {
  props: {
    instructor: {
      type: Object,
      required: true
    },
    startQuiz: {
      type: Function,
      required: true
    }
  },
  components: {
    Header
  }
}
</script>
<style scoped>
  .vertical-divider {
    width: 1px;
    background-color: #f2f2f2;
  }
</style>
