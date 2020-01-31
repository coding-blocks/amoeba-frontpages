<template>
  <div>
    <div class="border-card bg-light-grey">
      <div class="font-md bold mb-5">About Mentors</div>
      <div class="d-flex instructor-row" v-for="instructor in instructors" :key="instructor.id">
        <img class="s-50x50 round" :src="instructor.photo" alt="" srcset="">
        <div class="ml-3">
          <div class="font-mds bold">{{instructor.name}}</div>
          <a class="grey mb-2" :href="'mailto:' + instructor.email">{{instructor.email}}</a>
          <div class="t-align-j">
            <VMarkdown :markdown="instructor.description"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VMarkdown from '~/components/Base/VMarkdown.vue'
export default {
  name: 'MentorsCard',
  props: {
    instructors: {
      type: Array,
      required: true
    }
  },
  components: {
    VMarkdown
  }
}
</script>

<style scoped>
.round {
  overflow: unset;
}
.instructor-row:not(:last-child) {
  margin-bottom: 3rem;
}
</style>