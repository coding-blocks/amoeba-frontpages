<template>
    <div class="border-card">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h3>Your Winning Streak</h3>
          <div class="my-2">
            <span v-for="i in 3" class="br-50 s-30x30 mr-2" v-bind:class="{ 'bg-lgrey': i > streak.streakCount}">
              <img v-if="i <= streak.streakCount" src="https://minio.codingblocks.com/public/cricket-ball.svg" alt="">
            </span>
            
          </div>

          <div v-if="streak.streakCount < 3" class="med-grey">
            Predict {{3 - streak.streakCount}} more consecutive match<span v-if="( 3 - streak.streakCount) > 1">es</span> correctly to score a hattrick.
          </div>
        </div>

        <div v-if="streak.streakCount == 3" class="gradient-text-pink bold font-lg">Its a Hattrick!</div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      streak: {streakCount: 0},
    }
  },
  mounted() {
    this.$axios
      .get('/cricket_cup/my-streak')
      .then(response => {
        this.streak = response.data
      })
  }
}
</script>
<style>
.s-30x30{
  display: inline-block;
}
.bg-lgrey {
  background: #3333;
}
</style>