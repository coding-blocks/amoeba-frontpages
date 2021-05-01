<template>
  <div class="container">
    <div class="mt-5">
      <div class="row">
        <div class="col-md-5" style="z-index: 1">
          <div class="gradient-text-orange mb-2 font-lg bold">
            Uplift your career with us!
          </div>
          <div class="font-md mb-5">
            We will help you build skills &amp; land your dream job
          </div>
          <div class="grey mb-3">Let's get to know your preferences first</div>
          <div class="border-card p-xl-5 p-4">
            <div class="row no-gutters align-items-center">
              <div class="font-mds normal mr-4">I am a</div>
              <div class="col-lg-9 col-md-12 col-9 mt-lg-0 mt-2">
                <button
                  :class="
                    selectedStatus === 'student'
                      ? 'button-solid'
                      : 'button-dashed'
                  "
                  @click="setSelectedStatus('student')"
                  class="status-button button-orange font-sm mr-3"
                >
                  Student
                </button>
                <button
                  :class="
                    selectedStatus === 'professional'
                      ? 'button-solid'
                      : 'button-dashed'
                  "
                  @click="setSelectedStatus('professional')"
                  class="status-button button-orange font-sm"
                >
                  Professional
                </button>
              </div>
            </div>
            <div class="row no-gutters mt-4 align-items-center">
              <div class="font-mds mr-4">I want to become a</div>
              <div class="flex-1 mt-xl-0 mt-2">
                <div class="select-container">
                  <select
                    v-model="selectedProfessionId"
                    class="rounded-select font-sm pl-3"
                  >
                    <option
                      v-for="profession in professions"
                      :key="profession.id"
                      :value="profession.id"
                      class="capitalize"
                      >{{ profession.title | capitalize }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <button
                @click="goToTrack"
                class="button-dashed button-orange mt-4 v-align-ma"
              >
                Continue
              </button>
              <span class="ml-2 spaced">
                or
                <nuxt-link class="orange underline font-sm" to="/courses">
                  browse all courses
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/arrow_right_orange.svg"
                    alt
                    loading="lazy"
                  />
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>

        <div class="ml-5">
          <img src="/img/upliftCareerBoy.svg" />
          <img src="/img/upliftCareerGirl.svg" />
        </div>

        <!--        <video class="home-img d-phone-none" autoplay loop muted playsinline>-->
        <!--          <source  src="https://minio.codingblocks.com/amoeba/online-girl-big.webm" type="video/webm" />-->
        <!--          <source  src="https://minio.codingblocks.com/amoeba/online-girl-big.mp4" type="video/mp4" />-->
        <!--          &lt;!&ndash; <img src="https://minio.codingblocks.com/amoeba/girl-big-min.gif" srcset loading="lazy" /> &ndash;&gt;-->
        <!--        </video>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-img {
  position: absolute;
  right: 0;
  bottom: -58px;
  max-height: 515px;
}
</style>

<script>
export default {
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    }
  },
  data() {
    return {
      professions: [],
      selectedProfessionId: null,
      selectedStatus: 'student'
    }
  },
  async created() {
    const response = await this.$axios.get('professions')
    this.professions = this.$jsonApiStore.sync(response.data)
    this.selectedProfessionId = this.professions[0]?.id
  },
  methods: {
    setSelectedStatus(newStatus) {
      this.selectedStatus = newStatus
    },
    goToTrack() {
      const a = document.createElement('a')
      a.href = `${window.location.href}app/tracks?status=${this.selectedStatus}&professionId=${this.selectedProfessionId}`
      a.click()
    }
  }
}
</script>

<style scoped>
.status-button {
  height: 40px;
}

.spaced {
  letter-spacing: 0.4px;
}

.underline {
  text-decoration: underline;
}
</style>
