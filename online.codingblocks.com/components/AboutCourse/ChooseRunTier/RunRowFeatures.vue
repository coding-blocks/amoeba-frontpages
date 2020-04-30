<template>
  <div class="row no-gutters hiding-section">
    <div class="col-lg-6 col-md-12 col-6 pr-lg-2 pr-md-0 pr-2" v-for="featurePair in featurePairs" :key="featurePair">
      <div class="mb-2 v-align-ma" v-for="feature in featurePair" :key="feature">
        <img :src="feature.icon" class="mr-2">
        <span class="dark-grey card-md">{{feature.label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { featuresForRunTier } from '~/utils/run'

export default {
  name: 'RunRowFeatures',
  props: {
    tier: {
      type: String,
      required: false
    }
  },
  computed: {
    featurePairs () {
      const features = featuresForRunTier(this.tier)
      return [ [features[0], features[1]], [features[2], features[3]] ] // c*ka bly*t this markup. i'm not reducing over this array of 4 items :/ 
    }
  }
}
</script>