<template>
  <VAsync :task="fetchSection">
    <template v-slot="{ value: section }">
      <VAccordion>
        <template v-slot:head="{ onToggle, expanded }">
          <div
            class="row no-gutters align-items-center justify-content-between pointer p-30p py-4 hover-grey"
            @click="onToggle"
          >
            <div class="col-11">
              <div>
                <h6 class="bold d-inline-block mr-lg-5 mr-3">
                  {{ section.name }}
                </h6>
                <div
                  class="pill bg-gradient-orange white card-md normal"
                  v-if="isFree"
                >
                  Free
                </div>
              </div>
              <div class="mt-1 dark-grey word-spaced" v-if="section.contents.length">
                {{ section.contents.length }} Items | Duration : {{sectionDuration | formatContentDuration}}
              </div>
              <div class="mt-1 dark-grey word-spaced" v-else>
                Coming Soon!
              </div>
            </div>
            <div class="col-1">
              <img src="https://minio.codingblocks.com/amoeba/accordion-up.svg" class="float-right accordion-icon" :class="!expanded && 'down'">
              <!-- <FaIcon :icon="expanded ? 'angle-up' : 'angle-down'" class="fa-lg" /> -->
            </div>
          </div>
        </template>

        <template v-slot:content>
          <div class="p-30p py-0">
            <div v-if="section.contents.length">
              <div
                class="row no-gutters justify-content-between my-4"
                v-for="content in section.contents"
                :key="content.id"
              >
                <a href="#" class="col-6 col-md-7 d-flex align-items-center">
                  <img :src="getIcon(content)" alt="Icon" class="s-20x20 mr-3" />
                  <VMarkdown :markdown="content.title" />
                </a>
                <div class="col-2 col-md-1 t-align-c">
                  <a href="#" 
                    class="card-md font-normal orange d-inline-block"
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
                <div class="col-2 col-md-1 card-md font-normal t-align-r">{{ contentDuration(content) | formatContentDuration}}</div>
              </div>
            </div>
            <div class="row no-gutters align-items-center py-4" v-else>
              <img src="https://minio.codingblocks.com/amoeba/content-orange.svg" alt="Content">
              <span class="gradient-text-orange ml-3">
                Content will be added soon. Stay tuned!
              </span>
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
import VMarkdown from '~/components/Base/VMarkdown.vue'


import { formatContentDuration } from '~/utils/course'

export default {
  name: 'SectionAccordion',
  components: {
    VAsync,
    VAccordion,
    VMarkdown
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
    isFree () {
      return !this.section.premium
    },
    sectionDuration() {
      return this.section.contents.reduce((acc, content) => acc + this.contentDuration(content), 0)
    },
  },
  methods : {
    contentDuration(content) {
      if (!isNaN(+content.duration) && content.contentable == 'lecture') {
        return content.duration
      }
      
      // default duration for different types
      switch(content.contentable){
        case  'code-challenge': return 1800000
        case 'csv' : return 3600000
        default : return 900000
      }
       
    },
    getIcon(content){
      
      switch(content.contentable){
        case 'document': return 'https://minio.codingblocks.com/amoeba/notes_grey.svg'; break;
        case 'code-challenge': return 'https://minio.codingblocks.com/amoeba/code_grey.svg'; break;
        case 'qna': return 'https://minio.codingblocks.com/amoeba/quiz_grey.svg'; break;
        case 'lecture':
        default: return 'https://minio.codingblocks.com/amoeba/video_grey.svg'; break;
      }
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
.word-spaced {
  word-spacing: 0.2rem;
}
.accordion-icon {
  transition: all 0.3s;
}
.accordion-icon.down{
  transform: rotate(180deg)
}
.p-30p {
  padding: 30px;
}
</style>