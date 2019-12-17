<template>
  <VAsync :task="fetchProjects">
    <template v-slot:loading>
      Loading....
    </template>
    <template v-slot="{ value }">
      <div class="border-card">
        <h5 class="bold">Projects</h5>
        <div class="divider-h my-4"></div>
        
        <div class="border-bottom-list">
          <div
            class="row mx-0 align-items-center justify-content-between pointer"
            v-for="project in value"
            :key="project.id"
            >
            <div>
              <div class="d-flex align-items-center">
                <h6 class="bold d-inline-block mr-5 orange">
                  {{ project.title }}
                </h6>
                
              </div>
              <div class="card-md font-normal mt-1">
                {{project.description}}
              </div>
            </div>
           
          </div>
        </div>
      </div>
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