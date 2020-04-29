<template>
    <div>
      <div v-if="run.tier === 'LITE'">
          <LiteTier :run="run" :courseId="courseId" />
      </div>
      <div class="divider-h"></div>

      <div v-if="!run.tier || run.tier === 'PREMIUM'">
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
</template>

<script>
import { formatTimestamp } from '~/utils/date'
import { format } from 'date-fns'
import { mapState } from 'vuex'
import config from '~/config.json'
import LiteTier from './LiteTier.vue'
import LiveTier from './LiveTier.vue'
import PremiumTier from './PremiumTier.vue'
import ClassroomTier from './ClassroomTier.vue'

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
  components: {
    LiteTier,
    LiveTier,
    PremiumTier,
    ClassroomTier
  }
}
</script>

