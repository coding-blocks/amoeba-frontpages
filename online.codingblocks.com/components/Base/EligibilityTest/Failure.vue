<template>
    <div class="col-lg-12">
        <div class="br-10 overflow-hidden">
            <div class="bg-gradient-dpink px-md-5 px-4 py-5 position-relative"
                 style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                <div class="row no-gutters align-items-center white">
                    <div class="border round border-white all-center s-100x100">
                        <img src="https://minio.codingblocks.com/amoeba/e2c13faa-f538-48d4-8ca1-88728a07c51a.svg">
                    </div>
                    <div class="flex-1 pl-4">
                      <div style="font-size: 2rem;">{{quizDescription}}</div>
                        <div class="mt-1 bold" style="font-size: 2rem;">{{course.title}}</div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-md-3 p-3">
                <div class="row no-gutters align-items-center justify-content-between pb-3 mb-sm-5 mb-2 border-bottom">
                    <div class="flex-1 pr-4">
                        <div class="row no-gutters align-items-center">
                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cross_solid.svg">
                            <div class="flex-1 pl-4">
                                <div class="font-mdxl pink bold">Sorry, you missed it!</div>
                                <div class="font-md mt-2">You are not eligible for this course</div>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-block d-none">
                        <ul class="divided-list">
                            <li class="px-sm-5 px-4">
                                <div class="font-mdxl pink bold mb-2">10</div>
                                <div class="font-md">Questions</div>
                            </li>
                            <li class="px-sm-5 px-4">
                              <div class="font-mdxl pink bold mb-2">{{result.correctAnswers}}</div>
                                <div class="font-md">Correct</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row no-gutters justify-content-end d-sm-none d-block mb-5">
                    <div>
                        <ul class="divided-list mx-auto" style="width: fit-content;">
                            <li class="px-sm-5 px-4">
                              <div class="font-mdxl pink bold mb-2">10</div>
                                <div class="font-md">Questions</div>
                            </li>
                            <li class="px-sm-5 px-4">
                                <div class="font-mdxl pink bold mb-2">{{result.correctAnswers}}</div>
                                <div class="font-md">Correct</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mb-5">
                    <div class="font-mds med-grey">BASED ON YOUR TEST RESULTS</div>
                    <div class="font-mds mt-1 bold">We recommend you this course instead!</div>
                </div>

                <div class="row c-card-carousel">
                    <div class="col-xl-5 col-sm-8 col-11">
                        <div class="br-10 overflow-hidden border">
                            <div class="bg-gradient-dpink p-4">
                                <div class="row no-gutters justify-content-between align-items-center">
                                    <div class="col-xl-8 col-sm-9 white pr-3 order-md-1 order-sm- 1 order-2">
                                        <div class="card-xs chars-spaced">BEGINNERS COURSE</div>
                                        <h5 class="bold mt-1 text-ellipses">{{recommendedCourse.title}}</h5>
                                        <div class="row no-gutters align-items-center mt-2">
                                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/pos-rating-small.svg" class="mr-1">
                                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/pos-rating-small.svg" class="mr-1">
                                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/pos-rating-small.svg" class="mr-1">
                                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/pos-rating-small.svg" class="mr-1">
                                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/neg-rating-small.svg" class="mr-1">
                                            <div class="flex-1 card-md ml-1 mt-1">
                                                <strong>{{recommendedCourse.rating}}/5.0,&nbsp;</strong>
                                                {{recommendedCourse.review_count}}&nbsp;ratings
                                            </div>
                                        </div>
                                        <div class="divider-h my-4 bg-white"></div>
                                        <div class="row no-gutters justify-content-between align-items-center">
                                            <div class="flex-1 pr-2">
                                                <div class="card-sm bold">Starting from</div>
                                                <div class="v-align-ma">
                                                    <span class="mr-2 font-lg bold">&#8377;&nbsp;{{price}}</span>
                                                    <span class="font-sm bold med-grey"><del>&#8377;&nbsp;{{mrp}}</del></span>
                                                </div>
                                            </div>
                                            <nuxt-link :to="`/courses/${recommendedCourse.slug}`" class="button-solid button-white mt-3 pink d-xl-none d-block">Buy Now </nuxt-link>
                                        </div>
                                    </div>
                                    <div
                                        class="s-60x60 round border p-2 all-center border-2 border-white bg-inherit order-sm-2 order-md-2 order-1 mb-sm-0 mb-4">
                                        <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/android.svg">
                                    </div>
                                </div>
                                <div class="d-xl-block d-none">
                                    <nuxt-link :to="`/courses/${recommendedCourse.slug}`" class="button-solid button-white mt-3 pink">Buy Now </nuxt-link>
                                </div>
                            </div>
                            <div
                                v-if="result.coupon"
                                class="row no-gutters align-items-center justify-content-between py-3 px-4">
                                <div class="flex-1 pr-3 orange card-sm">
                                    Apply this coupon and get {{result.coupon.percentage}}% discount
                                </div>
                                <div class="py-2 px-3 border b-orange dashed-border card-sm bold copy-code" id="coupon-code" @click.prevent="copyCouponCode('code-span')" @mouseover="showCopy = true" @mouseout="showCopy = null">

                                    <span id="code-span">{{result.coupon.code}}</span> <span id="copy-span" v-show="showCopy === true">Copy</span>
                                </div>
                            </div>
                        </div>
          </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Failure',
    props: {
      result: Object,
      course: Object,
      quizDescription: String
    },
    data() {
      return {
        recommendedCourse: {
          title: '',
          rating: 0,
          review_count:0,
          runs: [{price:0, mrp:0}]
        },
          showCopy: null
      }
    },
    mounted() {
      this.loadRecommendedCourse.run()
    },
    tasks (t) {
      return {
        loadRecommendedCourse:  t(function *() {
          const response = yield this.$axios.get(`/courses/${this.course['prerequisite-course-id']}`, {
            params: {
              exclude: `instructors.*,jobs,runs`
            }
          })
          this.recommendedCourse = this.$jsonApiStore.sync(response.data)
        })
      }
    },
          computed: {
      price () {
        return this.recommendedCourse.runs[0].price
      },

      mrp () {
        return this.recommendedCourse.runs[0].mrp
      },
      reviews () {
                  return this.recommendedCourse['review-count']
      }
    },
    methods: {
      copyCouponCode(containerid) {
          if (document.selection) { // IE
              var range = document.body.createTextRange();
              range.moveToElementText(document.getElementById(containerid));
              range.select();
          } else if (window.getSelection) {
              var range = document.createRange();
              range.selectNode(document.getElementById(containerid));
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
          }
          document.execCommand('copy');

      },
    }
  }
</script>
<style>
#coupon-code {
    position: relative;
}
.copy-code:hover {
    color: #C5C5C5;
}
#copy-span{
    color:#333;
    position: absolute;
    left:42%;
    top:20%;
}
</style>
