<template>
  <div>
    <div class="position-relative br-10 overflow-hidden white">
      <div class="position-sticky tr px-xl-5 px-4 py-4 br-10 bg-white z-pos"
        style="color: #1C40DE; border: solid 1px #1C40DE;">
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="flex-1 row no-gutters align-items-center">
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/wickets-blue.svg" class="mr-4">
            <div class="font-md bold flex-1">WINNERS</div>
          </div>
          <div class="bold font-mds">
            {{totalPredictions}} Predictions
          </div>
        </div>
      </div>
      <div class="py-5 px-xl-5 px-4 overflow-auto transparent-scroll"
        style="background: linear-gradient(90deg, #1C40DE 0%, #2167E3 100%); margin-top: -10px; max-height: 650px;">
        <VAsync :task="fetchLeaderboardTask">
          <template v-slot="{ value: attempts }">
            <LeaderboardRow 
              v-for="attempt in attempts"
              :key="attempt.id"
              :attempt="attempt"
            />
          </template>
        </VAsync>
      </div>
    </div>
  </div>  
</template>
<script>
import LeaderboardRow from './Leaderboard/LeaderboardRow.vue';
import VAsync from '~/components/Base/VAsync.vue';

export default {
  components: {
    LeaderboardRow,
    VAsync
  },
  mounted() {
    this.fetchStatsTask.run()
  },
  data() {
    return {
      totalPredictions: 0
    }
  },
  tasks(t) {
    return {
      fetchStatsTask: t(function *() {
        const response = yield this.$axios.get('/cricket_cup/stats')
        this.totalPredictions = response.data.totalPredictions

        return response.data
      }),
      fetchLeaderboardTask: t(function *() {
        const response = yield this.$axios.get('/cricket_cup/leaderboard')
        const attempts = this.$jsonApiStore.sync(response.data)

        return attempts
      })
    }
  }
}
</script>
