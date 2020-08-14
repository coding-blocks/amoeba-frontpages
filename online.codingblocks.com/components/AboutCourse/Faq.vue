<template>
  <div class="row no-gutters">
    <div class="border-card">
      <h1 class="font-mdxl bold mb-3">
        Frequently Asked Questions
        <div class="divider-h my-4"></div>
      </h1>
      <div class="mb-4" v-if="faqs.data.length > 0 ">
        <div class="row no-gutters align-items-center" v-for="(faq , index) in faqs.data ">
          <div class="mb-3">
            <div class="font-md bold">
              {{ faq.attributes.question }}
            </div>
            <div class="font-sm">
              {{ faq.attributes.answer }}
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="font-md bold"> No Faqs </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from './Modal.vue'

export default {
  name: 'Faq',
  props: {
    faqs: {
      type: Object
    }
  },
  components: {
    Modal
  }
}

</script>
<style>
</style>
