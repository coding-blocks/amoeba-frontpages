<template>
  <VAsync :task="fetchSection">
    <template v-slot="{ value: section }">
      <VAccordion>
        <template v-slot:head="{ onToggle, expanded }">
          <div
            class="row mx-0 align-items-center justify-content-between pointer"
            @click="onToggle"
          >
            <div>
              <div class="d-flex align-items-center">
                <h6 class="bold d-inline-block mr-5">
                  {{ section.name }}
                </h6>
                <div
                  class="pill bg-gradient-orange white card-md font-normal"
                  v-if="isFree"
                >
                  Free
                </div>
              </div>
              <div class="card-md font-normal mt-1">
                {{ section.contents.length }} Items | Duration : 60 minutes
              </div>
            </div>
            <div>
              <FaIcon :icon="expanded ? 'angle-up' : 'angle-down'" class="fa-lg" />
            </div>
          </div>
        </template>

        <template v-slot:content>
          <div class="border-top my-4">
            <div
              class="row no-gutters justify-content-between my-3"
              v-for="content in section.contents"
              :key="content.id"
            >
              <a href="#" :class="'col-6 col-md-7 d-flex align-items-center ' + colorClass">
                <FaIcon icon="play-circle" class="s-20x20 font-md mr-3"></FaIcon>
                <span class="font-normal">{{ content.title }}</span>
              </a>
              <div class="col-2 col-md-1 t-align-c">
                <a href="#" 
                  class="card-md font-normal gradient-text-orange d-inline-block"
                  v-if="isFree"
                  >
                  Preview
                </a>
                <a href="#" 
                  class="card-md font-normal d-inline-block"
                  v-else
                  >
                  <i class="fas fa-lock fa-md"></i>
                </a>

                
              </div>
              <div :class="'col-2 col-md-1 card-md font-normal t-align-r ' + colorClass">{{content.duration | formatContentDuration}}</div>
            </div>
          </div>
        </template>
      </VAccordion>
    </template>
  </VAsync>
</template>

<script>
import VAsync from '~/components/Base/VAsync'
import VAccordion from '~/components/Base/VAccordion'

import { formatContentDuration } from '~/utils/course'

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
  computed: {
    section () {
      return this.fetchSection.lastResolved.value
    },
    colorClass() {
      return this.isFree && 'orange'
    },
    isFree () {
      return !this.section.premium
    }
  },
  filters: {
    formatContentDuration
  },
  tasks(t) {
    return {
      fetchSection: t(function*() {
        const response = yield this.$axios.get(
          `sections/${this.sectionId}/?include=contents&exclude=contents.*&sort=content.section_content.order&public=true`
        )
        console.log(response.data)
        return this.$jsonApiStore.sync(response.data)
      })
    }
  }
}
</script>

<style scoped>
.border-top {
  border-top: 1px solid #f3f3f3;
}
</style>