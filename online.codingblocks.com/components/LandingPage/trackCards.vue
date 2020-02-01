<template>
  <div class="container">
    <div class="row justify-content-between c-card-carousel">
      <a class="col-md-3 mx-3 mb-md-0 mb-5" v-for="track in tracks" :key="track.slug" :href="`/app/tracks/${track.slug}`">
        <div class="border-card p-4 h-100 white bg-transparent">
          <div class="row no-gutters mb-2">
            <div class="pr-4">
              <img :src="track.logo" :alt="track.slug" style="height: 75px;" class="round course-info-card-logo" />
            </div>
            <div class="flex-1 font-mds">
              <strong class="gradient-text-orange">{{ (track.professions.length ? track.professions[0].title : '')}}</strong>
              <div class="font-xs mt-3">{{track.courses.length}} courses</div>
            </div>
          </div>
          <div class="px-4">
            <p>
              {{track.description}}
            </p>
          </div>
          <a :href="`/app/tracks/${track.slug}`" class="button-solid button-orange float-right">Begin →</a>
        </div>
      </a>
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
              limit: 6
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
