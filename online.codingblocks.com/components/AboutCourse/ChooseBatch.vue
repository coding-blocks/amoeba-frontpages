<template>
  <div v-if="showCard">
    <div class="font-mds bold mb-3">Choose Batch</div>
    <select name="batch" class="mb-3" v-model="selectedRunId">
      <option v-for="run in runs" :key="run.id" :value="run.id">{{run.name}}</option>
    </select>
    <div class="grey card-md">Batch Starts {{ new Date(+selectedRun.start*1000).toDateString() }}</div>
    <div class="divider-h my-4"></div>
    <div class="d-flex justify-content-between mb-4">
      <div>
        <span class="bold gradient-text-orange font-xl">₹ 9499</span>
        <span class="font-sm bold grey pl-lg-3 pl-1">
          ₹
          <del>12999</del>
        </span>
      </div>
      <div class="gradient-text-orange">Enrollment ends {{ selectedRun.end }}</div>
    </div>
    <div class="d-flex">
      <button class="button-solid button-orange flex-1 mr-4">Buy Now</button>
      <button class="button-dashed button-orange flex-1">Try it for free!</button>
    </div>
  </div>
</template>

<script>
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
      console.log(this.selectedRunId)
      return this.runs.find((r) => r.id == this.selectedRunId)
    }
  }
}
</script>
