<template>
  <div class="p-5">
    <VAsync :task="fetchInstructorAndQuiz" :emberStyle="true">
      <div v-if="quizAttempt">
        <Result 
          :quizAttempt="quizAttempt"
          :course="course"
        />
      </div>
      <div v-else-if="!isActive">
        <Start 
          :startQuiz="startQuiz"
          :instructor="instructor" 
        />
      </div>
      <div v-if="isActive">
        <Question 
          :questionId="currentQuestionId" 
          :switchToNextQuestion="next" 
          :userResponses="userResponses" 
          :total="totalQuestions" 
          :currentIndex="currentIndex" 
          :quizDescription="quiz.description" 
        />
      </div>
    </VAsync>
  </div>
</template>
<script>
import VAsync from '~/components/Base/VAsync.vue'
import Question from '~/components/Base/EligibilityTest/Question.vue'
import Start from './QuizModal/Start'
import Result from './QuizModal/Result'

export default {
  components: {
    VAsync,
    Start,
    Result,
    Question
  },
  data() {
    return {
      instructor: null,
      quiz: null,

      isActive: false,
      isCompleted: false,

      quizAttempt: null,
      userResponses: Array(),
      currentQuestionId: null,
      currentIndex: null,
    }
  },
  computed: {
    randomQuestions () {
      const self = this
      return (function *() {
        for (let [index, questionId] of self.quiz.questions.map(q => q.id).entries()) {
          if (index > 3) {
            return null;
          }
          yield [index, questionId]
        }
      })()
    },
    totalQuestions() {
      // return this.quiz.questions.length
      return 4
    },
  },
  props: {
    course: {
      type: Object,
      required: true
    },
    instructorQuiz: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.fetchCurrentAttempt.run()
    this.fetchInstructorAndQuiz.run()
  }, 
  tasks(t) {
    return {
      fetchCurrentAttempt: t(function *() {
        const currentAttempt = yield this.$axios.get(`teachers_day_quiz/${this.course.id}/currentAttempt`)
        this.quizAttempt = this.$jsonApiStore.sync(currentAttempt.data)
      }),
      fetchInstructorAndQuiz: t(function *() {
        try {
          const instructorId = this.instructorQuiz['instructor-id']
          const quizId = this.instructorQuiz['quiz-id']

          const instructorRes = yield this.$axios.request(`instructors/${instructorId}`)
          this.instructor = this.$jsonApiStore.sync(instructorRes.data)

          const quizRes = yield this.$axios.get(`/quizzes/${quizId}`)
          this.quiz = this.$jsonApiStore.sync(quizRes.data)
        } catch (err) {
          console.log(err)
        }
      })
    }
  },
  methods: {
    async calculateScore() {
      const payload = {
        quizId: this.quiz.id,
        courseId: this.course.id,
        campaignId: 1,
        submission: this.userResponses
      }
      const res = await this.$axios.post(`teachers_day_quiz/submit`, payload)
      this.quizAttempt = this.$jsonApiStore.sync(res.data)
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
    startQuiz() {
      this.isActive = true
      const [index, questionId] = this.randomQuestions.next().value
      this.currentQuestionId = questionId
      this.currentIndex = index
    }
  }
}
</script>
