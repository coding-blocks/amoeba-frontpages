<template>
  <div class="horizontal-quiz-card">
    <div class="row no-gutters align-items-center">
      <div class="border-right horizontal-quiz-card__left-pane d-md-block d-none flex-1">
        <div class="font-md bold">MAKE YOUR PREDICTIONS</div>
        <div class="med-grey mt-3 font-mds">{{dateString}}</div>
        <div class="row no-gutters align-items-center" style="margin-top: 75px;">
          <img 
            :src="match.team1.logo"
            class="team-logo"
          >
          <div class="font-xl bold px-xl-5 px-3">VS</div>
          <img 
            :src="match.team2.logo"
            class="team-logo"
          >
        </div>
      </div>
      <div class="col-12 border-bottom pb-5 mb-5 horizontal-quiz-card__left-pane d-md-none d-block t-align-c">
        <div class="font-md bold">MAKE YOUR PREDICTIONS</div>
        <div class="med-grey mt-3 font-mds">{{dateString}}</div>
        <div class="row no-gutters align-items-center justify-content-center mt-5">
          <img 
            :src="match.team1.logo" 
            class="team-logo"
          >
          <div class="font-xl bold px-xl-5 px-3">VS</div>
          <img 
            :src="match.team2.logo"
            class="team-logo"
          >
        </div>
      </div>
      <client-only>
        <div class="horizontal-quiz-card__right-pane flex-1">
          <VAsync :task="fetchCurrentAttemptTask" :emberStyle="true">
            <Result 
              v-if="currentAttempt" 
              :match="match" 
              :attempt="currentAttempt"
            />
            <Quiz 
              v-else-if="quizStarted" 
              :match="match"
              :onAfterSubmit="onAfterSubmit"
            />
            <Timer 
              v-else 
              :match="match" 
              @start="onStart()"
            />
          </VAsync>
        </div>
      </client-only>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import VAsync from '~/components/base/VAsync';
import Timer from '~/components/Campaigns/IPL2020/MatchCard/Timer';
import Quiz from '~/components/Campaigns/IPL2020/MatchCard/Quiz';
import Result from '~/components/Campaigns/IPL2020/MatchCard/Result';

export default {
  props: {
    match: {
      type: Object,
      required: true
    }
  },
  components: {
    Timer,
    Quiz,
    Result,
    VAsync
  },
  data() {
    return {
      quizStarted: false,
      currentAttempt: null
    }
  },
  computed: {
    dateString() {
      return moment(this.match.start).format('dddd, D MMMM HH:MM A')
    }
  },
  methods: {
    onStart() {
      this.quizStarted = true
    },
    onAfterSubmit(attempt) {
      this.currentAttempt = attempt
    }
  },
  tasks(t) {
    return {
      fetchCurrentAttemptTask: t(function *() {
        const response = yield this.$axios.get(`/cricket_cup/matches/${this.match.id}/currentAttempt`)
        const currentAttempt = this.$jsonApiStore.sync(response.data)

        this.currentAttempt = currentAttempt

        return currentAttempt
      })
    }
  }
}
</script>
<style scoped>
  .team-logo {
    max-width: 100px !important;
  }
</style>
