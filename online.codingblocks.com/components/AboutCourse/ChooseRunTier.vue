<template>
<div class="row no-gutters a-ocb">
  <div class="col-md-12 col-10">
    <div class="border-card px-0 py-5">
      <div class="row no-gutters justify-content-between align-items-center px-4 mb-4">
        <h5 class="bold">Choose Batch</h5>
        <a href="#" class="bold gradient-text-orange mr-3 v-align-ma">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/compare.png" class="mr-1">
          Compare
        </a>
      </div>
      <div class="tab-nav-underline px-4 mb-4">
          <div class="tab mr-xl-5 mr-lg-4 mr-md-2 mr-5"
              v-for="batch in allRuns"
              v-bind:key="batch.month"
              v-bind:class="[{ active: selectedBatch.month === batch.month}]"
              v-on:click="changeSelectedBatch(batch.month)"
              >
              {{batch.month}}
          </div>
      </div>
      <RunTiers
          v-for="(batch, index) in allRuns"
          v-bind:batch="batch"
          v-bind:index="index"
          v-bind:courseId="courseId"
          v-bind:key="batch.month"
          v-show="selectedBatch.month === batch.month"
          >
         </RunTiers>

    </div>
  </div>
</div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'
import { format } from 'date-fns'
import { mapState } from 'vuex'
import config from '~/config.json'
import RunTiers from '~/components/AboutCourse/RunTiers.vue'

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

      const dateToMonth = (date) => `${date.toLocaleString('default', {month: 'short'})}20`

      const monthYear = Array.from(new Set(this.runs.map((r) => dateToMonth(new Date(r.start*1000)))))

      const allRuns = monthYear.map((m) => {
          return {
              month: m,
              runs: this.runs.filter((r) => dateToMonth(new Date(r.start*1000)) === m)
          }
      })

    return {
      allRuns,
      batches: monthYear,
      selectedBatch: allRuns[0]
    }
  },
    components: {
        RunTiers
  },
  methods: {
  changeSelectedBatch(month) {
      this.selectedBatch = this.allRuns.find((r) => r.month === month)
  }
  },
  filters: {
    formatRunName (run) {
      return format(new Date(run.start*1000), "MMM yyyy")
    }
  }
}
</script>

