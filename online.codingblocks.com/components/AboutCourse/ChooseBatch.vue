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
      <a 
        class="button-solid button-orange flex-1 mr-4"
        target="_blank"
        :href="`${dukaanPublicUrl}/buy?productId=${selectedRun['product-id']}&` + (user && `oneauthId=${user['oneauth-id']}`)"
        v-on:click="log($event, 'BuyNow')"
      >
        Buy Now
      </a>
      <a class="button-dashed button-orange flex-1" :href="tryNowLink" v-on:click="log($event, 'FreeTrial')">Try it for free!</a>
    </div>
  </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'
import { mapState } from 'vuex'
import config from '~/config.json'

export default {
  name: 'ChooseBatch',
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
    },
    dukaanPublicUrl () {
      return config[process.env.NODE_ENV].dukaan.url
    },
    tryNowLink () {
      return `/app/classroom/course/${this.courseId}/run/${this.selectedRunId}`
    },
    user () {
      return this.session?.user
    },
    ...mapState(['session'])
  },
  methods: {
    log: function(event, title) {
      this.$gtm.pushEvent({ event: title})
    }
  }
}
</script>
