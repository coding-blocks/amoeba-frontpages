<template>
    <div class="bg-light-grey">
        <div class="container my-4 py-5">
          <div class="row">
            <div class="col-9 row">
                <div class="mx-3">
                  <img class="s-70x70 round tracks-logo my-auto" :src="track.logo" alt="">
                </div>
                <div class="justify-content-between col">
                  
                  <div class="bold font-md orange my-auto"><FaIcon :icon="'exclamation-triangle'" class="mr-2"/>Try out the {{track.name}} track instead</div>
                  <div class="mt-3">We recomend our all new tracks with newer content and guided learning experience. Explore and choose courses from {{track.name}} Track instead of this course!</div>
                </div>
            </div>
            <div class="col-3 t-align-r">
              <a
              :href="`/app/tracks/${track.id}`"
              class="button-solid button-orange">
                Explore Track
              </a>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "AlternateTrackCard",
    props: {
        track : {
            type: Object, 
            required: true
        }
    }
}

</script>


<style scoped>
  @media (min-width: 1200px) {
    .container {
      max-width: 1440px;
      padding: 0 2%;
    }
  }
  .tracks-logo {
    max-height: 100px;
    max-width: 100px;
    border-radius: 50px;
    border: 1.5px solid #fff;
    position: relative;
  }
</style>