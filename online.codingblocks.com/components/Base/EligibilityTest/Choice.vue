<template>
  <div
    class="border-card py-3 px-4 mb-4 hover-grey pointer row no-gutters align-items-center justify-content-between"
    :class="choiceClass"
    @click="onSelect(choice.id)"
    :key="choice.id"
  >
    <div class="font-md flex-1 pr-4">{{ index + 1 }}. {{ choice.title }}</div>
    <img
      v-if="choiceClass == 'bg-green white'"
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tick_grey.svg"
    />
    <img
      v-if="choiceClass == 'bg-red white'"
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cross_white.svg"
    />
  </div>
</template>
<script>
export default {
  name: 'Response',
  props: {
    choice: Object,
    index: Number,
    submissionResponse: Object,
    onSelect: Function
  },
  filters: {
    charIndex: function(i) {
      return String.fromCharCode(97 + i)
    }
  },
  computed: {
    choiceClass () {
      const choiceId = this.choice.id
      if (!this.submissionResponse)
        return ''
        
      const { answers, incorrectlyAnswered } = this.submissionResponse

      if (answers.includes(choiceId)) {
        return 'bg-green white'
      } else if(incorrectlyAnswered.find(c => c.id == choiceId)) {
        return 'bg-red white'
      } else {
        return ''
      }
    }
  }

}
</script>
