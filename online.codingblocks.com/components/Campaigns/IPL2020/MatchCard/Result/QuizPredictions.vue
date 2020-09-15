<template>
  <div>
    <div class="font-md bold mb-4">
      Your Predictions
    </div>
    <div v-for="question in quiz.questions" :key="question.id">
      <Question 
        :questionId="question.id"
        :selectedChoiceId="getSelectedChoice(question.id)"
      />
    </div>    
  </div>
</template>
<script>
import Question from './Question.vue';

export default {
  props: {
    quiz: {
      type: Object,
      required: true
    },
    submission: {
      type: Object,
      required: true
    }
  },
  components: {
    Question
  },
  methods: {
    getSelectedChoice(questionId) {
      const questionSubmission = this.submission.questions.find(_ => _.id === questionId)
      return questionSubmission.markedChoices[0]
    }
  }
}
</script>
