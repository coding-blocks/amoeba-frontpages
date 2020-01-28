<template>
  <div class="container">
    <div class="mt-5">
      <div class="row">
        <div class="col-md-5">
          <div class="gradient-text-orange mb-2 font-lg bold">Uplift your career with us!</div>
          <div class="font-md mb-5">We will help you build skills &amp; land your dream job</div>
          <div class="grey mb-3">Let's get to know your preferences first</div>
          <div class="border-card p-xl-5 p-4">
            <div class="row no-gutters align-items-center">
              <div class="font-mds normal mr-4">I am a</div>
              <div class="col-lg-9 col-md-12 col-9 mt-lg-0 mt-2">
                <button
                  class="status-button button-orange font-sm mr-3"
                  :class="selectedStatus == 'student' ? 'button-solid' : 'button-dashed'"
                  @click="setSelectedStatus('student')"
                >Student</button>
                <button
                  class="status-button button-orange font-sm"
                  :class="selectedStatus == 'professional' ? 'button-solid' : 'button-dashed'"
                  @click="setSelectedStatus('professional')"
                >Professional</button>
              </div>
            </div>
            <div class="row no-gutters mt-4 align-items-center">
              <div class="font-mds mr-4">I want to become a</div>
              <div class="flex-1 mt-xl-0 mt-2">
                <div class="select-container">
                  <select class="rounded-select font-sm pl-3" v-model="selectedProfessionId">
                    <option
                      class="capitalize"
                      v-for="profession in professions"
                      :key="profession.id"
                      :value="profession.id"
                    >{{profession.title | capitalize}}</option>
                  </select>
                </div>
              </div>
            </div>
            <button class="button-dashed button-orange mt-4 v-align-ma" @click="goToTrack">
              Continue
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/arrow_right_orange.svg"
                alt
                class="ml-1"
              />
            </button>
          </div>
        </div>
        <div class="offset-0 offset-md-1 col-md-6 d-none d-md-block my-auto">
          <img src="../../../images/girl.svg" alt srcset />
        </div>
      </div>
    </div>
  </div>
</template> 



<script>
export default {
  async created() {
    const response = await this.$axios.get('professions')
    this.professions = this.$jsonApiStore.sync(response.data)
    this.selectedProfessionId = this.professions[0]?.id
  },
  data() {
    return {
      professions: [],
      selectedProfessionId: null,
      selectedStatus: 'student'
    }
  },
  methods: {
    setSelectedStatus(newStatus) {
      this.selectedStatus = newStatus
    },
    goToTrack() {
      const a = document.createElement('a')
      a.href = `${window.location.href}app/tracks?status=${this.selectedStatus}&professionId=${this.selectedProfessionId}`
      a.target = '_blank'
      a.click()
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    }
  }
}
</script>


<style scoped>
.status-button {
  height: 40px;
}
</style>