<template>
    <div class="hover-indicator p-4">
        <a href="#" class="row no-gutters justify-content-between align-items-center">
            <div class="v-align-ma">
                <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/lite.png" class="mr-1">
                <h4 class="d-inline-block">LITE</h4>
                <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/gradient-down.png" class="ml-1">
            </div>
            <div class="d-lg-block d-md-none d-block flex-1 card-md dark-grey ml-2 t-align-r">
                Batch starting {{selectedRunStart}}
            </div>
        </a>
        <div class="divider-h mt-4 mb-3"></div>
        <div class="row no-gutters hiding-section hiding-section--hidden">
            <div class="col-lg-6 col-md-12 col-6 pr-lg-2 pr-md-0 pr-2">
                <div class="mb-2 v-align-ma">
                    <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/content.png" class="mr-2">
                    <span class="dark-grey card-md">Course Content</span>
                </div>
                <div class="mb-2 v-align-ma">
                    <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/placeholder.png" class="mr-2">
                    <span class="dark-grey card-md">Quizzes</span>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-6 pl-lg-2 pl-md-0 pl-2">
                <div class="mb-2 v-align-ma">
                    <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/challenge.png" class="mr-2">
                    <span class="dark-grey card-md">Challenges</span>
                </div>
                <div class="mb-2 v-align-ma">
                    <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/certification.png" class="mr-2">
                    <span class="dark-grey card-md">Certification</span>
                </div>
            </div>
        </div>
        <div class="row no-gutters justify-content-between align-items-center">
            <div class="flex-1 pr-1">
                <div>
                    <h5 class="bold d-inline-block mr-2">&#8377; {{selectedRun.price}}</h5>
                    <span class="extra-bold dark-grey d-xl-inline d-md-block d-inline mt-xl-0 mt-md-2 mt-0">
                        <del>&#8377; {{selectedRun.mrp}}</del>
                    </span>
                </div>
                <div class="card-md mt-1 dark-grey">Enrollment ends {{selectedRunEnrollmentEnd}}</div>
            </div>
            <div>
                <a
                    class="button-dashed button-orange"
                    target="_blank"
                    :href="`https://dukaan.codingblocks.com/buy?productId=${selectedRun['product-id']}&` + (user && `oneauthId=${user['oneauth-id']}`)"
                    @click="addToCart()"
                    >Buy Now</a>

            </div>
        </div>
    </div>

</template>

<script>
import { formatTimestamp } from '~/utils/date'
import { format } from 'date-fns'
import { mapState } from 'vuex'
import config from '~/config.json'

export default {
  name: 'LiteTier',
  props: {
    run: {
      type: Object,
      required: true
    },
    courseId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selectedRunId: this.run.id
    }
  },
  computed: {
    showCard() {
      return this.runs.length
    },
    selectedRun() {
      return this.run
    },
    selectedRunEnrollmentEnd() {
      return formatTimestamp(this.selectedRun['enrollment-end'])
    },
    selectedRunStart() {
      return formatTimestamp(this.selectedRun.start)
    },
    selectedRunPriceString() {
      return +this.selectedRun.price > 0
        ? `₹ ${this.selectedRun.price}`
        : 'Free'
    },
    dukaanPublicUrl() {
      return config[process.env.NODE_ENV].dukaan.url
    },
    tryNowLink() {
      return `/app/classroom/course/${this.courseId}/run/${this.selectedRunId}`
    },
    user() {
      return this.session?.user
    },
    ...mapState(['session'])
  },
  methods: {
    log: function(title) {
      try {
      this.$gtag('event', 'view_event', {
        items: [
          {
            id: this.selectedRun['product-id'],
            name: this.selectedRun.description,
            list_name: this.selectedRun.name,
            brand: "CodingBlocks",
            category: "Course",
            list_position: 1,
            quantity: 1,
            price: this.selectedRun.price
          }
        ]
      })
      } catch (err) {
        console.error(err)
      }
    },
    addToCart () {
      this.$gtag('event', 'add_to_cart', {
        items: [
          {
            id: this.selectedRun['product-id'],
            name: this.selectedRun.description,
            list_name: this.selectedRun.name,
            brand: "CodingBlocks",
            category: "Course",
            list_position: 1,
            quantity: 1,
            price: this.selectedRun.price
          }
        ]
      })
    }
  },
  filters: {
    formatRunName (run) {
      return format(new Date(run.start*1000), "MMM yyyy")
    }
  }
}
</script>

