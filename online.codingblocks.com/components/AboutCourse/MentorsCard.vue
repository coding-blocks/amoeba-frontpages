<template>
  <div>
    <div class="border-card bg-light-grey">
      <div class="font-mds bold mb-5">About Mentors</div>
      <div class="d-flex instructor-row" v-for="instructor in instructors" :key="instructor.id">
        <img class="s-50x50 round" src="https://minio.codingblocks.com/amoeba/8393c1ff-670e-4cd2-934f-fbfad1ea5c19" alt="" srcset="">
        <div class="ml-3">
          <div class="font-mds bold">Arnav Gupta</div>
          <div class="grey mb-2">arnav@cb.lk</div>
          <div class="t-align-j">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ut nihil aspernatur id non provident quod fugit? Corporis possimus cupiditate nam? Beatae, maiores? Quas beatae repudiandae error dolorum ut?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MentorsCard',
  props: {
    instructors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.round {
  overflow: unset;
}
.instructor-row:not(:last-child) {
  margin-bottom: 3rem;
}
</style>