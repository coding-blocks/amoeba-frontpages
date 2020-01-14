<template>
  <div v-if="showCard">
    <div class="font-mds bold mb-3">Choose Batch</div>
     <div class="select-container mb-3">
      <select name="batch" class="rounded-select pl-3" v-model="selectedRunId">
        <option v-for="run in runs" :key="run.id" :value="run.id">{{run.name}}</option>
      </select>
     </div>
    <div class="grey card-md">Batch Starts {{ selectedRunStart }}</div>
    <div class="divider-h my-4"></div>
    <div class="d-flex justify-content-between mb-4">
      <div>
        <span class="bold gradient-text-orange font-xl">₹ 9499</span>
        <span class="font-sm bold grey pl-lg-3 pl-1">
          ₹
          <del>12999</del>
        </span>
      </div>
      <div class="gradient-text-orange">Enrollment ends {{ selectedRunEnrollmentEnd }}</div>
    </div>
    <div class="d-flex">
      <a class="button-solid button-orange flex-1 mr-4" href="">Buy Now</a>
      <button class="button-dashed button-orange flex-1">Try it for free!</button>
    </div>
  </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'
export default {
  name: 'ChooseBatch',
  props: {
    runs: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      selectedRunId: this.runs[0]?.id
    }
  },
  computed: {
    showCard() {
      return this.runs.length
    },
    selectedRun() {
      return this.runs.find((r) => r.id == this.selectedRunId)
    },
    selectedRunEnrollmentEnd () {
      return formatTimestamp(this.selectedRun['enrollment-end'], "dd ccc MMM")
    },
    selectedRunStart () {
      return formatTimestamp(this.selectedRun.start, "dd ccc MMM")
    }
  }
}
</script>
