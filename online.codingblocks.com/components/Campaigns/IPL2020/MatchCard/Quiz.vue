<template>
  <div>
    <Question 
      v-if="currentQuestionId"
      :questionId="currentQuestionId"
    />
    <div
      class="horizontal-quiz-card__right-pane__navigation row no-gutters align-items-center justify-content-between">
      <button 
        class="font-mds bold cricket-blue"
        :disabled="!prevEnabled"
        @click="prev()"
      >
        ❮ PREV
      </button>
      <button 
        class="font-mds bold cricket-blue"
        :disabled="!nextEnabled"
        @click="next()" 
      >
        NEXT ❯
      </button>
    </div>
  </div>  
</template>
<script>
import Question from './Question.vue'

export default {
  props: {
    match: {
      type: Object,
      required: true
    }
  },
  components: {
    Question
  },
  mounted() {
    this.loadQuizForMatch.run()
  },
  data() {
    return {
      quiz: null,
      currentQuestionIndex: null
    }
  },
  computed: {
    currentQuestionId() {
      return this.quiz?.questions[this.currentQuestionIndex].id
    },
    totalQuestions () {
      return this.quiz?.questions.length
    },
    prevEnabled() {
      return this.currentQuestionIndex > 0
    },
    nextEnabled() {
      return this.currentQuestionIndex < (this.totalQuestions - 1)
    }
  },
  methods: {
    next() {
      if (this.nextEnabled) {
        this.currentQuestionIndex = this.currentQuestionIndex + 1
      }
    },
    prev() {
      if (this.prevEnabled) {
        this.currentQuestionIndex = this.currentQuestionIndex - 1
      }
    }
  },
  tasks(t) {
    return {
      loadQuizForMatch: t(function *() {
        const quizId = this.match['quiz-id']
        if (quizId) {
          const response = yield this.$axios.get(`/quizzes/${quizId}`)
          this.quiz = this.$jsonApiStore.sync(response.data)
          this.currentQuestionIndex = 0
        }
      })
    }
  }
}
</script>
<style scoped>
  .cricket-blue {
    color: #1F4FE0;
  }
  button.cricket-blue:disabled {
    color: #666;
  }
</style>
