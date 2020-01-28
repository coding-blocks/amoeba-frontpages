<template>
  <div class="container a-ocb">
    <div class="mt-5">
      <div class="row">
        <div class="col-md-5">
          <div class="gradient-text-orange mb-2 font-lg bold">Uplift your career with us!</div>
          <div class="font-md mb-4">We will help you build skills & land your dream job</div>
          <div class="grey mb-3 pt-3">Let's get to know your preferences first</div>
          <div class="border-card">
            <div class="row no-gutters">
              <div class="col-3 font-mds my-auto">I am a</div>
              <div class="col">
                <div class="row no-gutters align-items-center">
                  <div class="col-6 my-2">
                    <button 
                      class="status-button button-orange font-sm" 
                      :class="selectedStatus == 'student' ? 'button-solid' : 'button-dashed'"
                      @click="setSelectedStatus('student')"  
                    >
                      Student
                    </button>
                  </div>
                  <div class="col-6 my-2">
                    <button 
                      class="status-button button-orange font-sm" 
                      :class="selectedStatus == 'professional' ? 'button-solid' : 'button-dashed'"
                      @click="setSelectedStatus('professional')"  
                    >
                      Professional
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row no-gutters mt-4">
              <div class="col-6 font-sm">I want to become</div>
              <div class="col-6">
                <div class="select-container">
                <select class="rounded-select font-sm pl-3" v-model="selectedProfessionId">
                  <option class="capitalize" v-for="profession in professions" :key="profession.id" :value="profession.id">
                    {{profession.title | capitalize}}
                  </option>
                </select>
                </div>
              </div>
            </div>
            <button class="button-dashed button-orange mt-4" @click="goToTrack">Continue</button>
          </div>
        </div>
        <img class="home-img" src="https://minio.codingblocks.com/amoeba/girl-big-min.gif" srcset />
      </div>
    </div>
  </div>
</template> 


<style scoped>
.home-img {
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: -57px;
  max-height: 500px;
}
</style>

<script>
export default {
  async created () {
    const response = await this.$axios.get('professions')
    this.professions = this.$jsonApiStore.sync(response.data)
    this.selectedProfessionId = this.professions[0]?.id
  },
  data () {
    return {
      professions: [],
      selectedProfessionId: null,
      selectedStatus: 'student'
    }
  },
  methods: {
    setSelectedStatus (newStatus) {
      this.selectedStatus = newStatus
    },
    goToTrack () {
      const a = document.createElement('a')
      a.href = `${window.location.href}app/tracks?status=${this.selectedStatus}&professionId=${this.selectedProfessionId}`
      a.target = '_blank'
      a.click()
    }
  },
  filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      }
  },
}

</script>


<style scoped>
.status-button {
  height: 40px;
}
</style>