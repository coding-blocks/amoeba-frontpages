<template>
  <div class="my-5 mx-3 trackCarouselCard">
    <div class="border-card track-card p-0">
      <div class="row no-gutters p-23 track-card__head align-items-start" :style="`background-image: url('${track.background}')`" >
        <img :src="track.logo" :alt="track.slug" class="s-70x70 track-card__head__logo float-right" loading="lazy">
        <div class="flex-col align-items-start w-100">
          <h4 class="extra-bold font-md mb-1 w-100">{{ track.name }}</h4>
          <span class="semi-bold font-xs">{{ track.courses.length }}Courses</span>
        </div>
      </div>
      <div class="justify-content-end align-items-center p-15">
        <p>
          {{ track.description }}
        </p>
        <a :href="`/app/tracks/${track.slug}`" class="align-items-center"><span class="font-md bold orange mr-2">Begin</span><img src="/img/buttonArrow.svg" alt="chat" class="h-1 pt-1" loading="lazy"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackCarouselCard',
  props: ["track"]
}
</script>

<style scoped>
.track-card__head__logo {
  bottom: -25px;
  right: 1.5rem;
  left: auto;
}
.track-card__head {
  height: 110px;
}
.track-card__head .flex-col {
  justify-content: flex-end;
}
.h-1 {
  height: 1rem;
}
.p-23 {
  padding: 2.3rem;
}
.p-15{
  padding: 1.5rem 2.3rem;
}
</style>
