<template>
  <div class="border-card p-5">
    <h5 class="bold">Course Content</h5>
    <div class="divider-h my-4"></div>
    
    <SectionAccordion v-for="sectionId in sectionIds" :key="sectionId" :section-id="sectionId" />
  </div>
</template>

<script>
import VAccordion from '~/components/Base/VAccordion'
import SectionAccordion from '~/components/AboutCourse/CourseContentCard/SectionAccordion.vue'
export default {
  name: 'CourseContentCard',
  components: {
    VAccordion,
    SectionAccordion
  },
  props: {
    sectionIds: {
      type: Array,
      default: () => [],
      validator: (values) => values.every(val => !isNaN(+val))
    }
  }
}
</script>