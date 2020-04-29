<template>
    <div>
        <div v-for ="run in batch.runs" :key="batch.month">
            <div v-if="run.tier === 'LITE'">
                <LiteTier :run="run" :courseId="courseId" />
            </div>
            <div class="divider-h"></div>

            <div v-if="run.tier === 'PREMIUM'">
                <PremiumTier :run="run" :courseId="courseId" />
                <div class="divider-h"></div>
            </div>
            <div v-if="run.tier === 'LIVE'">
                <LiveTier :run="run" :courseId="courseId" />
                <div class="divider-h"></div>
            </div>
            <div v-if="run.tier === 'CLASSROOM'">
                <ClassroomTier :run="run" :courseId="courseId" />
            </div>
        </div>
    </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'
import { format } from 'date-fns'
import { mapState } from 'vuex'
import config from '~/config.json'
import LiteTier from '~/components/AboutCourse/LiteTier.vue'
import LiveTier from '~/components/AboutCourse/LiveTier.vue'
import PremiumTier from '~/components/AboutCourse/PremiumTier.vue'
import ClassroomTier from '~/components/AboutCourse/ClassroomTier.vue'

export default {
  name: 'RunTiers',
  props: {
    batch: {
      type: Object,
      required: true
    },
    courseId: {
       type: Number,
       required: true
    }
  },
  data() {
    console.log(this.runs, '^^^^^^^^^^^^^^^^')
    return {
      runs: this.runs
    }
  },
    components: {
    LiteTier,
        LiveTier,
        PremiumTier,
        ClassroomTier
    }
}
</script>

