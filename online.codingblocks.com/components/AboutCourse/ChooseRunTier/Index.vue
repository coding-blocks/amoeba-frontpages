<template>
  <div class="row no-gutters a-ocb">
    <div class="col-12 mb-5">
      <div class="border-card border-orange">
        <div class="row justify-content-between align-items-center px-4">
          <div>
            <h5 class="bold">Take Free Trial</h5>
            <div>Preview this course for free</div>
          </div>
          <div>
            <a @click.native="log('FreeTrial')" :href="tryNowLink" class="button-solid button-orange free-trial-button">Try it for free!</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
      <div class="border-card px-0 pb-0" id="choose-batch">
        <div class="row no-gutters justify-content-between align-items-center px-4 mb-4">
          <h5 class="bold">Choose Batch</h5>
          <a href="" class="bold gradient-text-orange mr-3 v-align-ma" v-on:click.prevent.stop="showModal = true">
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/compare.png" class="mr-1">
            Compare
          </a>
        </div>
        <div class="tab-nav-underline px-4">
            <div class="tab mr-xl-5 mr-lg-4 mr-md-2 mr-5"
                v-for="month in months"
                :key="month"
                :class="[{ active: selectedMonth === month}]"
                @click="changeSelectedMonth(month)"
                >
                  {{month}}
            </div>
        </div>

        <Modal v-if="showModal" @close="showModal = false">
          <div slot="body">
            <TierComparison />
            <div class="d-md-none t-align-c mt-2" @click="showModal = false">
              <button class="button-dashed button-orange">Go Back</button>
            </div>
          </div>
        </Modal>

        <transition-group name="fade" tag="div">
          <RunRow
              v-for="(run, index) in runsForSelectedMonth"
              :run="run"
              :index="index"
              :courseId="courseId"
              :key="run.id"
              >
          </RunRow>
        </transition-group>
      </div>
    </div>

    <link rel="preload" href="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/green-tick.png" as="image">
    <link rel="preload" href="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/red-cross.png" as="image">

  </div>
</template>

<script>
import { formatTimestamp, formatMonthFromTimestamp } from '~/utils/date'
import { byTier } from '~/utils/run'
import { format } from 'date-fns'
import { mapState } from 'vuex'
import config from '~/config.json'
import RunRow from './RunRow.vue'
import Modal from '../Modal.vue'
import TierComparison from '../TierComparison.vue'
 
export default {
  name: 'ChooseRunTier',
  props: {
    runs: {
      type: Array,
      required: false
    },
    courseId: {
      type: Number,
      required: true
    },
    trialRun: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: !!this.$route.query.compare,
      selectedMonth: formatMonthFromTimestamp(this.runs[0].start),
    }
  },
  computed: {
    months () {
      const months = new Set(this.runs.map(r => r.start).map(formatMonthFromTimestamp))
      return Array.from(months)
    },
    runsForSelectedMonth () {
      const { selectedMonth } = this
      return this.runs.filter(r => formatMonthFromTimestamp(r.start) === selectedMonth).sort(byTier)
    },
    tryNowLink() {
      return `/app/classroom/course/${this.courseId}/run/${this.trialRun.id}`
    },
  },
  components: {
    RunRow,
    Modal,
    TierComparison
  },
  methods: {
    changeSelectedMonth(month) {
      this.selectedMonth = month
    },
    log: function(title) {
      try {
      this.$gtag('event', 'view_event', {
        items: [
          {
            id: this.trialRun['product-id'],
            name: this.trialRun.description,
            list_name: this.trialRun.name,
            brand: "CodingBlocks",
            category: "Course",
            list_position: 1,
            quantity: 1,
            price: this.trialRun.price
          }
        ]
      })
      } catch (err) {
        console.error(err)
      }
    }
  },
  filters: {
    formatRunName (run) {
      return format(new Date(run.start*1000), "MMM yyyy")
    }
  }
}
</script>

<style scoped>
.fade-enter-active{
  transition: all 250ms;
}
.fade-enter {
  opacity: 0;
}
.border-orange {
  border: 1px solid #F2734C;
}
.free-trial-button {
  letter-spacing: 0.5px;
  font-weight: normal;
}
.border-highlight {
  animation: glow 2s;
}
@keyframes glow {
  0% { box-shadow: none}
  50% { 
    -webkit-box-shadow: 0px 0px 16px 0px rgba(243,110,60,1);
    -moz-box-shadow: 0px 0px 16px 0px rgba(243,110,60,1);
    box-shadow: 0px 0px 16px 0px rgba(243,110,60,1);
  }
  100% {
    box-shadow: none
  }
}
</style>

