<template>
  <VAsync :task="fetchSection">
    <template v-slot="{ value: section }">
      <VAccordion>
        <template v-slot:head="{ onToggle }">
          <div @click="onToggle"> 
            {{section.name}}
          </div>
        </template>

        <template v-slot:content>
          <div v-for="content in section.contents" :key="content.id">
            {{content.title}}
          </div>
        </template>
      </VAccordion>
    </template>
  </VAsync>
</template>

<script>
import VAsync from '~/components/Base/VAsync'
import VAccordion from '~/components/Base/VAccordion'

export default {
  name: 'SectionAccordion',
  components: {
    VAsync,
    VAccordion
  },
  props: {
    sectionId: {
      type: Number,
      required: true
    }
  },
  tasks (t) {
    return {
      fetchSection: t(function*() {
        const response = yield this.$axios.get(
          `sections/${this.sectionId}/?include=contents&exclude=contents.*&sort=content.section_content.order&public=true`
        )
        console.log(response.data)
        return this.$store.sync(response.data)
      })
    }
  }
}
</script>