<template>
  <div>
    <div class="font-md bold">
      Your Predictions
    </div>
    <div class="mt-4">
      <QuizPredictions 
        v-if="quiz"
        :quiz="quiz"
        :submission="submission"
      />
    </div>
  </div>  
</template>
<script>
import QuizPredictions from './Result/QuizPredictions.vue';

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
    QuizPredictions
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
