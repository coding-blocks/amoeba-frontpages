<template>
  <VAsync :task="fetchProjects">
    <template v-slot:loading>
      Loading....
    </template>
    <template v-slot="{ value }">
      This is the Projects list. We have {{value.length}} Projects
    </template>
  </VAsync>
</template>

<script>
import VAsync from '~/components/Base/VAsync.vue'
import { isArrayOfInts } from '~/utils/validators'
export default {
  name: 'ProjectsList',
  components: {
    VAsync
  },
  props: {
    projectIds: {
      type: Array,
      required: true,
      validate: isArrayOfInts
    }
  },
  mouted () {
    this.fetchProjects.run()
  },
  data () {
    return {
      projects: []
    }
  },
  tasks(t, {timeout}) {
    return {
      fetchProjects: t(function * () {
        const response = yield this.$axios.get('projects', {
          params: {
            filter: {
              id: {
                $in: this.projectIds
              }
            }
          }
        })
        return this.$store.sync(response.data)
      })
    }
  }
}
</script>