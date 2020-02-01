<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-md-4 mb-md-0 mb-5" v-for="track in tracks" :key="track.slug">
        <a :href="`/app/tracks/${track.slug}`">
          <div class="border-card p-4 h-100">
            <div class="row no-gutters mb-2">
              <div class="pr-4">
                <img :src="track.logo" :alt="track.slug" style="height: 75px;" class="round course-info-card-logo" />
              </div>
              <div class="flex-1 font-mds">
                Become a Certified
                <br />
                <strong>{{ (track.professions.length ? track.professions[0].title : '')}}</strong>
                <div class="font-xs mt-3">{{track.courses.length}} courses</div>
              </div>
            </div>
            <div class="px-4">
              <p>
                {{track.description}}
              </p>
            </div>
            <span class="orange d-block t-align-r card-md">View Track</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted () {
    this.fetchTracks.run()
  },
  data () {
    return {
      tracks: []
    }
  },
  tasks(t) {
    return {
      fetchTracks: t(function * () {
        const response = yield this.$axios.get(`/career_tracks`, {
          params: {
            page: {
              limit: 3
            }
          }
        })

        this.tracks = yield this.$jsonApiStore.sync(response.data)
      })
    }
  }
}
</script>
<style scoped>
  .bg-transparent {
    background: transparent
  }
</style>
