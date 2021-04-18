<template>
  <div>
    <VAsync :task="fetchQuestionTask" :emberStyle="true">
      <template v-slot="{ value: question }">
        <div v-if="!fetchQuestionTask.isActive">
          Loading...
        </div>
        <div v-else>
          <div class="font-mds med-grey mb-5">
            <VMarkdown :markdown="question.description"/>
          </div>
          <div class="row horizontal-quiz-card__options-row">
            <div class="col-6" v-for="choice in question.choices" :key="choice.id">
              <label class="input-radio gradient-checked-input d-block">
                <input 
                  type="radio" 
                  name="group-1" 
                  :checked="choice.id === selectedChoiceId"
                  @click="selectChoice(choice.id)"
                >
                <span class="font-md bold">
                  {{choice.description}}
                </span>
              </label>
            </div>
          </div>
        </div>
      </template>
    </VAsync>

    <slot name="navigation" :value="fetchQuestionTask.isActive"></slot>
  </div>
</template>
<script>
import VMarkdown from '~/components/Base/VMarkdown';
import VAsync from '~/components/Base/VAsync';

export default {
  props: {
    questionId: {
      type: String,
      required: true
    },
    onAnswer: {
      type: Function,
      required: true
    },
    selectedChoiceId: {
      type: String,
      required: true
    }
  },
  components: {
    VMarkdown,
    VAsync
  },
  data() {
    return {
      question: null
    }
  },
  tasks(t) {
    return {
      fetchQuestionTask: t(function * () {
        const response = yield this.$axios.get(`/questions/${this.questionId}`, {
          params: {
            include: 'choices'
          }
        })

        this.question = this.$jsonApiStore.sync(response.data)
        return this.question
      }).runWith('questionId'),
    }
  },
  methods: {
    selectChoice(id) {
      this.onAnswer(id)
    }
  }
}
</script>
