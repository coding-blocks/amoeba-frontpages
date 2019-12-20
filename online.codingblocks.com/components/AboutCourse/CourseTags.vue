<template>
  <div>
    <div class="font-mds bold mb-3">Major Topics Covered</div>
    <div>
      <span class="pill m-1" v-for="tag in tags" :key="tag.id">{{tag.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseTags',
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>