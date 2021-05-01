<template>
  <div>
    <PredictionResult 
      v-if="isSubmitted"
      :attempt="attempt"
    />    
    <QuizPredictions 
      v-else-if="quiz"
      :quiz="quiz"
      :submission="submission"
    />
  </div>  
</template>
<script>
import QuizPredictions from './Result/QuizPredictions.vue';
import PredictionResult from './Result/PredictionResult.vue';

export default {
  props: {
    match: {
      type: Object,
      required: true
    },
    attempt: {
      type: Object,
      required: true
    }
  },
  components: {
    QuizPredictions,
    PredictionResult
  },
  mounted() {
    this.fetchQuizTask.run()
  },
  data() {
    return {
      quiz: null
    }
  },
  computed: {
    submission() {
      return this.attempt['tbm-submission'].submission
    },
    isSubmitted() {
      return this.attempt?.meta && this.attempt?.meta['is-submitted']
    }
  },
  tasks(t) {
    return {
      fetchQuizTask: t(function *() {
        const quizId = this.match['quiz-id']
        if (quizId) {
          const response = yield this.$axios.get(`quizzes/${quizId}`)
          const quiz = this.$jsonApiStore.sync(response.data)
          this.quiz = quiz
        }
      })
    }
  }
}
</script>
