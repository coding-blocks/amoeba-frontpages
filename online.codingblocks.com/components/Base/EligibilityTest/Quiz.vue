<template>
  <div class="col-lg-12 p-3">
    <div v-if="!isActive && !isCompleted">
      <Start v-on:click="startQuiz()" :course=course />
    </div>
    <div
      v-if="isCompleted"
      >
      <div v-if="result.score >= course['eligibility-quiz-threshold']">
        <Success :course=course  :result=result :quizDescription="quiz.description" />
      </div>
      <div v-if="result.score < course['eligibility-quiz-threshold']">
        <Failure :course=course :result=result :quizDescription="quiz.description" />
      </div>
    </div>
    <div v-if="isActive">
      <Question :questionId="currentQuestionId" :switchToNextQuestion="next" :userResponses="userResponses" :total="totalQuestions" :currentIndex="currentIndex" :quizDescription="quiz.description" />
    </div>
  </div>
</template>
<script>
  import Success from './Success'
  import Start from './Start'
  import Failure from './Failure'
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
        userResponses: Array(),
        currentQuestionId: null,
        isActive: false,
        isCompleted: false,
        quiz: null,
        result: null,
        currentIndex: 0
      }
    },
    computed: {
      randomQuestions () {
        const self = this
        return (function *() {
          for (let [index, questionId] of self.quiz.questions.map(q => q.id).entries()) {
            yield [index, questionId]
          }
        })()
      },
      totalQuestions() {
        return this.quiz.questions.length
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
      async next () {
        const [index, questionId] = this.randomQuestions.next().value || [null, '']
        if (!questionId) {
          // quiz has ended; no questions left
          this.result = await this.calculateScore()
          this.isCompleted = true
          this.isActive = false
        } else {
          this.currentQuestionId = questionId
          this.currentIndex = index
        }
      },
      async calculateScore() {
          const completeResult = (await this.$axios.post('/eligibility_quiz_submissions', {submission: this.userResponses, eligibilityQuizId: this.quiz.id, courseId: this.course.id})).data

          const correctAnswers = (completeResult.questions.filter((q) => q.score !== 0)).length
          const wrongAnswers = (completeResult.questions.filter((q) => q.score === 0)).length

          return {
            score: completeResult.score,
            correctAnswers,
            wrongAnswers
          }
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
        const [index, questionId] = this.randomQuestions.next().value
        this.currentQuestionId = questionId
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
          const quizId = this.course['eligibility-quiz-id']
          if (quizId) {
            const response = yield this.$axios.get(`/quizzes/${quizId}`)
            this.quiz = this.$jsonApiStore.sync(response.data)
          }
        })
      }
    }
  }
</script>
