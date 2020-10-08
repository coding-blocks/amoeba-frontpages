<template>
  <div class="container mb-5 pb-3">
    <div class="d-flex mb-5 align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="d-inline-block mr-3" src="https://minio.codingblocks.com/img/tinder-fire.svg" alt="">
        <div>
          <h4 class="bold">Popular Courses</h4>
          <div class="grey font-sm mt-1">Lookout for industry popular technologies right now</div>
        </div>
      </div>
      <!-- <div class="d-none d-md-block">
        <nuxt-link to="/courses" class="button-orange button-solid">View all</nuxt-link>
      </div> -->
    </div>
    <div class="row">
      <CourseCardMini :course="course" v-for="course in courses" :key="course.id" />
    </div>

    <div class="d-block t-align-c mt-5">
      <nuxt-link to="/courses" class="button-orange button-solid">Browse all Courses</nuxt-link>
    </div>
  </div>
</template>

<script>
import CourseCardMini from '../Base/CourseCardMini'
export default {
  components: {
    CourseCardMini
  },
  props: {
    courses: {
      type: Array,
      required: false
    }
  }
}
</script>