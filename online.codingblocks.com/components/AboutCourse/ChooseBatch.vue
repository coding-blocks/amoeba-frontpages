<template>
  <div v-if="showCard">
    <div class="font-md bold mb-3">Choose Batch</div>
    <div class="select-container mb-3">
      <select name="batch" class="rounded-select pl-3" v-model="selectedRunId">
        <option v-for="run in runs" :key="run.id" :value="run.id">{{run.name}}</option>
      </select>
    </div>
    <div class="grey card-md">Batch Starts {{ selectedRunStart }}</div>
    <div class="divider-h my-4"></div>
    <div class="row no-gutters justify-content-between mb-4 align-items-center">
      <div class="v-align-ma">
        <span class="bold gradient-text-orange font-big">{{selectedRunPriceString}}</span>
        <span class="font-sm bold grey pl-3" v-if="+selectedRun.mrp > +selectedRun.price">
          ₹
          <del>{{selectedRun.mrp}}</del>
        </span>
      </div>
      <div class="gradient-text-orange">Enrollment ends {{ selectedRunEnrollmentEnd }}</div>
    </div>
    <div class="d-flex t-align-c">
      <a
        class="button-solid button-orange flex-1 mr-4 font-sm"
        target="_blank"
        :href="`https://dukaan.codingblocks.com/buy?productId=${selectedRun['product-id']}&` + (user && `oneauthId=${user['oneauth-id']}`)"
        @click="addToCart()"
      >Buy Now</a>
      <a
        class="button-dashed button-orange flex-1 font-sm"
        :href="tryNowLink"
        v-on:click="log('FreeTrial')"
      >Try it for free!</a>
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
      console.log(this.$gtag)
      try {
        this.$gtm.pushEvent({ event: title })
      } catch (err) {
        console.error(err)
      }
    },
    addToCart () {
      console.log(this.$gtag)
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
  }
}
</script>


<style scoped>
.font-big {
  font-size: 1.857rem;
}
</style>