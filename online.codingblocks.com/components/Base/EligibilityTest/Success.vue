<template>
  <div class="col-lg-12 mt-5">
    <div class="br-10 overflow-hidden">
      <div class="bg-gradient-dpink px-md-5 px-4 py-5 position-relative"
           style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
        <div class="row no-gutters align-items-center white">
          <div class="border round border-white all-center s-100x100">
            <img src="https://minio.codingblocks.com/amoeba/e2c13faa-f538-48d4-8ca1-88728a07c51a.svg">
          </div>
          <div class="flex-1 pl-4">
            <div style="font-size: 2rem;">{{quizDescription}}</div>
            <div class="mt-1 bold" style="font-size: 2rem;">{{course.description}}</div>
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
        <div class="col-lg-8 col-md-12 col-8 col-sm-12 m-auto">
            <div
                v-if="result.coupon"
                class="row no-gutters align-items-center justify-content-between py-3 px-lg-5 px-4">
                <div class="flex-1 pr-3 orange card-sm">
                    Apply this coupon and get {{result.coupon.percentage}}% discount
                </div>
                <input type="text" class="py-2 px-3 b-orange card-sm bold pointer dashed-border t-align-c copy-code" id="coupon-code" :value=result.coupon.code @click.prevent="copyCouponCode" readonly style="border: 1px dashed #f2734c !important;" title="Click To Copy">
            </div>

        </div>

        <div class="t-align-c">

          <a :href="tryNowLink" class="button-dashed button-orange" v-on:click="explore('Free Trial')">Try it for Free!</a>

          <nuxt-link :to="`/courses/${course.slug}`" class="button-solid button-orange ml-4">Buy this course</nuxt-link>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { freeTrialRunForCourse } from '~/utils/course';

export default {
  name: 'Success',
  props: {
    result: Object,
    course: Object,
    quizDescription: String
  },
  computed: {
    freeTrialRun () {
      return freeTrialRunForCourse(this.course)
    },
    tryNowLink () {
      return `/app/classroom/course/${this.course.id}/run/${this.freeTrialRun.id}`
    },
  },
  methods: {
    explore(title) {
      this.$gtag('event', 'view_item', {
        items: [
          {
            id: this.courseId,
            name: this.courseName,
            list_name: "Course View",
            brand: "CodingBlocks",
            category: title,
            list_position: 1,
            price: '0'
          }
        ]
      })
    },
    copyCouponCode() {
      const couponCodeContainer = document.querySelector('#coupon-code')
      couponCodeContainer.select()
      const successful = document.execCommand('copy')
      window.getSelection().removeAllRanges()
      return false
    },
  }
}
</script>
