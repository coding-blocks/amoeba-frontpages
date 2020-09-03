<template>
  <div class="p-5">
    <VAsync :task="fetchInstructorAndQuiz">
      <template v-slot="{ value }">
        <Header :instructor="value.instructor" />
      </template>
    </VAsync>
  </div>
</template>
<script>
import VAsync from '~/components/Base/VAsync.vue'
import Header from './QuizModal/Header'

export default {
  components: {
    VAsync,
    Header
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
    this.fetchInstructorAndQuiz.run()
  }, 
  tasks(t) {
    return {
      fetchInstructorAndQuiz: t(function *() {
        try {
          const instructorId = this.instructorQuiz['instructor-id']
          const quizId = this.instructorQuiz['quiz-id']

          const instructorRes = yield this.$axios.request(`instructors/${instructorId}`)
          const instructor = this.$jsonApiStore.sync(instructorRes.data)

          const quizRes = yield this.$axios.get(`/quizzes/${quizId}`)
          const quiz = this.$jsonApiStore.sync(quizRes.data)

          return {
            instructor,
            quiz
          }
        } catch (err) {
          console.log(err)
        }
      })
    }
  }
}
</script>
