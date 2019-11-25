<template>
  <div>
    <h3>Course Content</h3>
    <hr>

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