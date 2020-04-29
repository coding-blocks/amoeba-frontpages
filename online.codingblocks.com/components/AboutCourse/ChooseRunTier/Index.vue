<template>
  <div class="row no-gutters a-ocb">
    <div class="col-md-12 col-10">
      <div class="border-card px-0 pb-0">
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
          <TierComparison slot="body"/>
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
    }
  },
  data() {
    return {
      showModal: false,
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
    }
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
    filters: {
      formatRunName (run) {
        return format(new Date(run.start*1000), "MMM yyyy")
      }
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
</style>

