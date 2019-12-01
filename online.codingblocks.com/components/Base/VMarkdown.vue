<template>
  <div v-html="html">
  </div>
</template>


<script>
import marked from 'marked';

export default {
  name: 'VMarkdown',
  props: ['markdown'],
  computed: {
    html () {
      return marked(this.markdown)
    }
  }
}
</script>