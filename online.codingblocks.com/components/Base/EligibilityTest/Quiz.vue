<template>
  <div class="col-lg-12 p-3">
    <div v-if="!isActive">
      <Start v-on:click="startQuiz()" />
    </div>
    <!-- <div
      v-if="isActive"
    >
      <div v-if="score() >= 7">
        <Success />
      </div>
      <div v-if="score() < 7">
        <Failure />
      </div>
    </div> -->
    <div v-if="isActive">
      <Question :questionId="currentQuestionId" :switchToNextQuestion="next" />
    </div>
  </div>
</template>
<script>
import Success from '~/components/Base/EligibilityTest/Success.vue'
import Start from '~/components/Base/EligibilityTest/Start.vue'
import Failure from '~/components/Base/EligibilityTest/Failure.vue'
import Question from './Question'
import Vue from 'vue'
export default {
  name: 'Quiz',
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.loadQuizForCourse.run()
  },
  data () {
    return {
      userResponses: Array(10).fill(null),
      total: 10,
      currentQuestionId: null,
      isActive: false,
      quiz: null
    }
  },
  computed: {
    randomQuestions () {
      const self = this
      return (function *() {
        for (let questionId of self.quiz.questions.map(q => q.id)) {
          yield questionId
        }
      })()
    }
  },
  components: {
    Success,
    Failure,
    Start,
    Question
  },
  methods: {
    restart: function() {
      this.questionIndex = 0
      this.userResponses = Array(this.quiz.questions.length).fill(null)
    },
    selectOption: function(index) {
      if (this.userResponses[this.questionIndex] !== null) {
        return
      }
      Vue.set(this.userResponses, this.questionIndex, index)
    },
    next () {
      this.currentQuestionId = this.randomQuestions.next().value
    },
    score: function() {
      var score = 0
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            'undefined' &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1
        }
      }
      return score
    },
    afterSelectClass: function(index) {
      const responses = this.quiz.questions[this.questionIndex].responses
      const userResponses = this.userResponses
      const questionIndex = this.questionIndex
      const correctResponse = responses.filter((r) => r.correct)[0]

      if (
        responses[userResponses[questionIndex]] &&
        !responses[userResponses[questionIndex]].correct &&
        index == userResponses[questionIndex]
      ) {
        return 'bg-red white'
      } else if (
        index == responses.indexOf(correctResponse) &&
        userResponses[questionIndex] !== null
      ) {
        return 'bg-green white'
      } else {
        return ''
      }
    },
    startQuiz: function() {
      this.isActive = true
      this.currentQuestionId = this.randomQuestions.next().value
    }
  },
  filters: {
    charIndex: function(i) {
      return String.fromCharCode(97 + i)
    }
  },

  tasks (t) {
    return {
      loadQuizForCourse:  t(function *() {
        const response = yield this.$axios.get(`/quizzes/${this.course['eligibility-quiz-id']}`)
        this.quiz = this.$jsonApiStore.sync(response.data)
      })
    }
  }
}
</script>
