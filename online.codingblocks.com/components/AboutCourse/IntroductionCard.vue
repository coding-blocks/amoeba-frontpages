<template>
  <div>
    <div class="position-relative">
      <div class="border-card white">
        <img class="back-img" :src="course['cover-image']" alt="" />

        <div
          class="row justify-content-between align-items-center position-relative no-gutters"
        >
          <div class="col-lg-10 col-sm-9 col-8">
            <div>
              <span class="bold font-xl">{{ course.title }}</span>
              <span class="ml-4">
                <button id="wishlist_btn" @click="toggleWishlist()">
                  <i class="fa-heart fa-lg" v-bind:class="[isCourseWishlisted ? filledHeartClass : unfilledHeartClass]"></i>
                </button>
                <a href="#" class="white">
                  <i class="fas fa-lg fa-share-alt ml-2"></i>
                </a>
              </span>
            </div>
            <div class="font-normal mt-2 font-sm">
              {{ course.subtitle }}
            </div>
          </div>
          <div>
            <img
              class="s-70x70 round course-info-card-logo"
              :src="course.logo"
              :alt="course.title"
            />
          </div>
        </div>

        <RatingStars
          class="my-4 d-flex align-items-center position-relative"
          :value="+course.rating"
          pos-rating-class="mr-2"
          neg-rating-class="mr-2"
        >
          <span class="ml-3">
            <b>{{ this.course.rating }}/5.0,</b>
            {{ this.course['review-count'] }} ratings
          </span>
        </RatingStars>

        <div class="row course-info-row">
          <div class="col-md-6 mb-3 mb-md-0">
            <div class="card-mentor-image w-20">
              <img
                class="card-mentors"
                :src="instructor.photo"
                :alt="'photo of' + instructor.name"
                v-for="instructor in visibleInstructors"
                :key="instructor.id"
              />
            </div>
            <div class="info-item" style="padding-left: 5rem">
              <div>Instructors</div>
              <div>{{ visibleInstructorNames }}</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="info-item">
              <div>Course Language</div>
              <div>{{ course.language || 'English and Hindi' }}</div>
            </div>
          </div>

          /* only for nagarro bootcamp -- trial */
          <div v-if="course['id'] == 87">
            <div class="divider-h my-5 bg-white" style="opacity: 0.2"></div>
            <div class="row align-items-center justify-content-center">
              <div class="col-sm-4 col-8 mb-sm-0 mb-4">
                <div
                  class="br-10 border b-white p-4"
                  style="background: rgba(255, 255, 255, 0.1)"
                >
                  <div class="row no-gutters align-items-center">
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/no-rupees.svg"
                    />
                    <div class="flex-1 white pl-3">
                      <div class="card-sm bold">
                        ‘Zero Effective Fee’ program
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-8 mb-sm-0 mb-4">
                <div
                  class="br-10 border b-white p-4"
                  style="background: rgba(255, 255, 255, 0.1)">
                  <div class="row no-gutters align-items-center">
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/best-mentors.svg"
                    />
                    <div class="flex-1 white pl-3">
                      <div class="card-sm bold">Best in class Mentors</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 col-8">
                <div class="br-10 border b-white p-4" style="background: rgba(255, 255, 255, 0.1)">
                  <div class="row no-gutters align-items-center">
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/get-hired.svg"
                    />
                    <div class="flex-1 white pl-3">
                      <div class="card-sm bold">
                        Priority Placement in Nagarro
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {JsonApiDataStoreModel } from 'jsonapi-datastore'
import RatingStars from './RatingStars.vue'
export default {
  modules: ['@nuxtjs/axios'],
  name: 'IntroductionCard',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      filledHeartClass: 'fas',
      unfilledHeartClass: 'far',
      userCourseWishlist:null
    }
  },
  components: {
    RatingStars,
  },
  computed: {
    visibleInstructors() {
      return this.course.instructors.slice(0, 2)
    },
    visibleInstructorNames() {
      return this.visibleInstructors.map((i) => i.name).join(', ')
    },
    isCourseWishlisted(){
      return !!this.userCourseWishlist;
    },
    ...mapState(['session']),
  },
  async created(){
     const res = await this.$axios.$get(`/courses/${this.course['id']}/relationships/user_course_wishlist`);
     this.userCourseWishlist = this.$jsonApiStore.sync(res);
  },
   
  
  methods: {
    async toggleWishlist() {
      const isAuthenticated = this.$store.state.session.isAuthenticated
      
      if (isAuthenticated) {
        if (this.userCourseWishlist!=null) {
          this.$axios.$delete(`user_course_wishlists/${this.userCourseWishlist.id}`).then((res) => {
              this.userCourseWishlist=null;
            })
            .catch((err) => {
              console.error(err)
            })
        } else {
            var userCourseWishlistModel = new JsonApiDataStoreModel('user_course_wishlists')
            userCourseWishlistModel.setRelationship('course', new JsonApiDataStoreModel('courses',this.course['id']));
            userCourseWishlistModel = userCourseWishlistModel.serialize();
            await this.$axios.$post('user_course_wishlists', userCourseWishlistModel)
            .then((res) => {
              this.userCourseWishlist = this.$jsonApiStore.sync(res);
            })
            .catch((err) => {
              console.error(err)
            })
        }
      }
    },
  },
}
</script>

<style scoped>
.card-mentor-image {
  width: 10%;
  max-width: 60px;
}
.course-info-row .info-item > div:first-child {
  font-size: 0.9rem;
  font-weight: lighter;
  margin-bottom: 0.2rem;
}
.course-info-row .info-item {
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 1.5rem;
}
.back-img {
  top: 0;
  left: 0;
}
.position-relative {
  position: relative;
}
</style>