<template>
  <div>
    <Question 
      v-if="currentQuestionId"
      :questionId="currentQuestionId"
      :onAnswer="choiceId => answerQuestion(currentQuestionId, choiceId)"
      :selectedChoiceId="quizSubmissionMap[currentQuestionId]"
    >
      <template v-slot:navigation="{ value: isLoading }">
        <div
          class="horizontal-quiz-card__right-pane__navigation row no-gutters align-items-center justify-content-between">
          <button 
            class="font-mds bold cricket-blue"
            :disabled="isLoading || !prevEnabled"
            @click="prev()"
          >
            ❮ PREV
          </button>
          <button
            v-if="submitEnabled"
            class="button-solid button-blue white"
            :disabled="isLoading || submitQuizTask.isActive"
            @click="submitQuizTask.run()"
          >
            Submit
          </button>
          <button 
            v-else
            class="font-mds bold cricket-blue"
            :disabled="isLoading || !nextEnabled"
            @click="next()" 
          >
            NEXT ❯
          </button>
        </div>
      </template>
    </Question>
    <div class="t-align-c red" v-if="error">
      {{error}}
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
    },
    onAfterSubmit: {
      type: Function
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
      currentQuestionIndex: null,
      quizSubmissionMap: {},
      error: null
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
    },
    submitEnabled() {
      return this.currentQuestionIndex === (this.totalQuestions - 1)
    }
  },
  methods: {
    answerQuestion(questionId, choiceId) {
      this.quizSubmissionMap = {
        ...this.quizSubmissionMap,
        [questionId]: choiceId
      }
    },
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
      }),
      submitQuizTask: t(function *() {
        if (Object.keys(this.quizSubmissionMap).length !== 3) {
          this.error = 'Attempt all the questions'
          return;
        }

        this.error = null
        const submission = {
          questions: Object.keys(this.quizSubmissionMap).map(questionId => ({
            id: questionId,
            markedChoices: [this.quizSubmissionMap[questionId]]
          }))
        }

        const response = yield this.$axios.post(`/cricket_cup/matches/${this.match.id}/submit`, {
          submission
        })
        const attempt = this.$jsonApiStore.sync(response.data)
        
        if (this.onAfterSubmit) {
          this.onAfterSubmit(attempt)
        }

        return attempt
      })
    }
  }
}
</script>
<style scoped>
  .button-blue {
    background: linear-gradient(90deg, #1C40DE 0%, #2167E3 100%);
  }
  .cricket-blue {
    color: #1F4FE0;
  }
  button.cricket-blue:disabled {
    color: #666;
  }
</style>
