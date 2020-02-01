<template>
  <div>
    <div class="border-card">
      <p class="grey" v-if="alreadySubmitted"> 
        Thanks for getting in touch! <br> We'll get back to you shortly!
      </p>
      <div v-else>
        <div>
          <img class="s-25x25 v-align-m mr-3" src="https://minio.codingblocks.com/amoeba/doubt-lead-icon.svg" alt="flag">
          <span class="gradient-text-orange font-md bold">Have any Doubts?</span>
        </div>

        <div class="divider-h my-3"></div>

        <div>Just fill in your details and our edu. counsellor will get back to you!</div>
        
        <div class="my-3">
          <input class="col-12 input-text form-field--control my-2" type="text" name="name" placeholder="Name" v-model="name">
          <input class="col-12 input-text form-field--control my-2" type="text" name="contact" placeholder="Contact Number" v-model="mobile">
        </div>
        <div class="t-align-c">
          <button class="button-solid button-orange light" @click="sendLeadInfoTask.run()" :disabled="sendLeadInfoTask.isActive" >Send Details</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    courseTitle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      name: null,
      mobile: null,
      alreadySubmitted: false
    }
  },
  tasks (t) {
    return {
      sendLeadInfoTask: t(function * () {
        const response = yield this.$axios.post('/hubspot/lead', {
            data: {
            name: this.name,
            mobile: this.mobile,
            course: this.courseTitle,
          },
          meta: {
            pageUri: window.location.href,
            pageName: "Web: Course - " + this.courseTitle 
          }
        })
        this.alreadySubmitted = true
      })
    }
  }
}
</script>