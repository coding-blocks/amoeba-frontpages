<template>
  <div>
    <div class="font-mds med-grey t-align-c t-align-md-l">
      Time left to predict
    </div>
    <div class="mt-4">
      <VueCountdown :time="predictionEnd" @end="onEnd()">
        <template slot-scope="props">
          <div class="d-flex align-items-center justify-content-center justify-content-md-start">
            <div class="t-align-c py-3">
              <div class="font-mdxl bold"> {{props.days}} </div>
              <div class="font-mds">Days</div>
            </div>
            <div class="font-xl px-3"> : </div>
            <div class="t-align-c py-3">
              <div class="font-mdxl bold"> {{props.hours}} </div>
              <div class="font-mds">Hours</div>
            </div>
            <div class="font-xl px-3"> : </div>
            <div class="t-align-c py-3">
              <div class="font-mdxl bold"> {{props.minutes}}</div>
              <div class="font-mds">Mins</div>
            </div>
            <div class="font-xl px-3"> : </div>
            <div class="t-align-c py-3">
              <div class="font-mdxl bold"> {{ props.seconds }} </div>
              <div class="font-mds">Secs</div>
            </div>
          </div>
        </template>
      </VueCountdown>
    </div>
    <div class="mt-4" v-if="enabled">
      <button
        class="button-solid button-blue font-mds"
        @click="onStart()"
      >
        {{isAuthenticated ? 'Make Predictions' : 'Login to Predict'}}
      </button>
    </div>
  </div>  
</template>
<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
import { mapState } from 'vuex'

export default {
  props: {
    match: {
      type: Object,
      required: true
    }
  },
  components: {
    VueCountdown
  },
  computed: {
    predictionEnd() {
      const predictionEnd = new Date(this.match['prediction-end'])
      return predictionEnd - Date.now()
    },
    ...mapState(['session']),
    isAuthenticated() {
      return this.session?.isAuthenticated
    }
  },
  data() {
    const predictionEnd = new Date(this.match['prediction-end'])
    return {
      enabled: predictionEnd > Date.now()
    }
  },
  methods: {
    onEnd() {
      this.enabled = false
    },
    onStart() {
      if (this.isAuthenticated) {
        return this.$emit('start')
      }

      window.location = '/app/'
    }
  }
}
</script>
<style scoped>
  .button-blue {
    background: linear-gradient(90deg, #1C40DE 0%, #2167E3 100%);
  }
</style>
