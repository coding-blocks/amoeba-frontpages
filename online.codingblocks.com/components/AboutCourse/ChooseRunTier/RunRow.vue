<template>
    <div>
      <div class="hover-indicator p-4">
        <VAccordion>
          <template v-slot:head="{ onToggle, expanded }">
            <div class="pointer row no-gutters justify-content-between align-items-center" @click="onToggle">
                <div class="v-align-ma">
                    <img :src="iconUrl" class="mr-1">
                    <h4 class="tier-name gradient-text-orange d-inline-block">{{tier}}</h4>
                    <img class="ml-1 accordion-icon" :class="{ up: expanded }" src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/gradient-down.png">
                </div>
                <div class="d-lg-block d-md-none d-block flex-1 card-md dark-grey ml-2 t-align-r">
                    Batch starting {{run.start | formatTimestamp}}
                </div>
            </div>
            <div class="divider-h mt-4 mb-3"></div>
          </template>
          <template v-slot:content>
            <RunRowFeatures :tier="tier" />
          </template>
        </VAccordion>
        
        <div class="row no-gutters justify-content-between align-items-center">
            <div class="flex-1 pr-1">
                <div>
                    <h5 class="bold d-inline-block mr-2">&#8377; {{run.price}}</h5>
                    <span class="extra-bold dark-grey d-xl-inline d-md-block d-inline mt-xl-0 mt-md-2 mt-0">
                      <del>&#8377;
                            {{run.mrp}}
                            </del></span>
                </div>
                <div class="card-md mt-1 dark-grey">Valid for {{validityInMonths}} Months</div>
            </div>
            <div>
              <a
              class="buy-now-button button-dashed button-orange"
              target="_blank"
              :href="`${dukaanPublicUrl}/buy?productId=${run['product-id']}&` + (user && `oneauthId=${user['oneauth-id']}`)"
              @click="addToCart()">
                Buy Now
              </a>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'
import { format } from 'date-fns'
import { mapState } from 'vuex'
import config from '~/config.json'
import { iconForTier, featuresForRunTier } from '~/utils/run'
import RunRowFeatures from './RunRowFeatures'
import VAccordion from '~/components/Base/VAccordion'

export default {
  name: 'RunRow',
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
  computed: {
    runStartString () {
      return formatTimestamp(this.run.start)
    },
    user() {
      return this.session?.user
    },
    iconUrl () {
      return iconForTier(this.run.tier)
    },
    tier () {
      return this.run.tier || 'PREMIUM'
    },
    validityInMonths () {
      const { start, end } = this.run 
      return Math.round((end - start) / (60 * 60 * 24 * 30))
    },
    dukaanPublicUrl() {
      console.log(config, config[process.env.NODE_ENV])
      return config[process.env.NODE_ENV].dukaan.url
    },
    ...mapState(['session']),
  },
  components: {
    RunRowFeatures,
    VAccordion
  },
  methods: {
    addToCart () {
      this.$gtag('event', 'add_to_cart', {
        items: [
          {
            id: this.run['product-id'],
            name: this.run.description,
            list_name: this.run.name,
            brand: "CodingBlocks",
            category: "Course",
            list_position: 1,
            quantity: 1,
            price: this.run.price
          }
        ]
      })
    }
  },
  filters: {
    formatTimestamp () {
      return formatTimestamp(...arguments)
    }
  }
}
</script>

<style scoped>
.accordion-icon {
  transition: all 0.3s;
}
.accordion-icon.up{
  transform: rotate(180deg)
}
.tier-name {
  letter-spacing: 1px;
}
.buy-now-button {
  letter-spacing: 0.5px;
}
</style>
