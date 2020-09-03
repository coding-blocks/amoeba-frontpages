<template>
  <div class="know-your-mentor">
    <Header :instructor="{name: 'Jatin Katyal'}" />  
    <div class="mt-4 pb-4 border-bottom">
      <div class="row">
        <div class="col-md-8 d-flex align-items-center t-align-c t-align-md-l justify-content-center justify-content-md-start">
          <div class="s-30x30 bg-beige round mr-4 all-center white">
            <i 
              class="fas fa-lg"
              :class="won ? 'fa-check' : 'fa-times'"
            ></i>
          </div>
          <div class="d-block">
            <div class="font-mdxl bold beige">
              {{won ? 'Congratulations' : 'Sorry, you missed it!'}}
            </div>
            <div class="font-md">
              {{won ? 'You just won a 70% off discount coupon' : 'Try again with different course'}}
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center justify-content-md-end col-md-4">
          <ul class="divided-list t-align-c">
            <li class="px-3">
              <div class="font-mdxl beige">4</div>
              <div class="font-md">Questions</div>
            </li>
            <li class="px-3">
              <div class="font-mdxl beige">{{correct}}</div>
              <div class="font-md">Correct</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <CourseCardMini :course="course" />
      </div>
      <div class="col-md-6 d-flex flex-column align-items-center align-items-md-end">
        <div class="coupon-box p-2 white br-10">
          <div class="coupon-box-content font-mdxl p-3 br-10">
            MENTOR70
          </div>
        </div>
        <div class="font-md mt-3">
          Coupon valid till <span class="bold">7th Sept, 11:59PM</span>
        </div>
        <button class="mt-3 button-solid button-orange">
          Buy this Course
        </button>
      </div>
    </div>
  </div>  
</template>
<script>
import Header from '~/components/AboutCourse/TeachersDayCampaign/QuizModal/Header'
import CourseCardMini from '~/components/Base/CourseCardMini.vue'

export default {
  props: {
    quizAttempt: {
      type: Object,
      required: true
    },
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    correct() {
      return this.quizAttempt['tbm-submission'].result.questions.reduce((acc, curr) => acc + curr.correctlyAnswered.length, 0)
    },
    won() {
      return this.quizAttempt['tbm-submission'].score === 40
    }
  },
  components: {
    Header,
    CourseCardMini
  }  
}
</script>
<style scoped>
  .bg-beige {
    background: #D69D72;
  }
  .coupon-box {
    background: #333333;
  }
  .coupon-box-content {
    border: 1px dashed #fff;
  }
</style>
