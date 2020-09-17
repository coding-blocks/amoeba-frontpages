<template>
  <VAsync :task="loadQuestionTask" :emberStyle="true" class="mt-4">
    <div class="font-mds med-grey">{{question.description}}</div>
    <div class="font-md bold cricket-blue mt-3">
      {{selectedChoice && selectedChoice.description}}
    </div>
  </VAsync>  
</template>
<script>
import VAsync from '~/components/Base/VAsync';

export default {
  props: {
    questionId: {
      type: String,
      required: true
    },
    selectedChoiceId: {
      type: String,
      required: true
    }
  },
  components: {
    VAsync
  },
  computed: {
    selectedChoice() {
      return this.question.choices?.find(choice => choice.id === this.selectedChoiceId)
    }
  },
  data() {
    return {
      question: {}
    }
  },
  tasks(t) {
    return {
      loadQuestionTask: t(function *() {
        const response = yield this.$axios.get(`questions/${this.questionId}`, {
          params: {
            include: 'choices'
          }
        })
        const question = this.$jsonApiStore.sync(response.data)
        this.question = question

        return question
      })
    }
  }
}
</script>
<style scoped>
  .cricket-blue {
    color: #1F4FE0
  }
</style>
