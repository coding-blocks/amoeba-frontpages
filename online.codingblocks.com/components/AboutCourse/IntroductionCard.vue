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
                <button id="wishlist_btn" @click="addToWishlists()">
                  <i
                    class="fa-heart fa-lg"
                    v-bind:class="{ far: unfilled, fas: filled }"
                  ></i>
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
                  style="background: rgba(255, 255, 255, 0.1)"
                >
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
                <div
                  class="br-10 border b-white p-4"
                  style="background: rgba(255, 255, 255, 0.1)"
                >
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

          <!-- <div class="col-6 col-md-3">
            <div class="info-item">
            <div>Course Duration </div>
            <div>6 Months</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { JsonApiDataStore, JsonApiDataStoreModel } from 'jsonapi-datastore'
import config from '~/config.json'
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
  data: function () {
    return {
      pos: -1,
      filled: false,
      unfilled: false,
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
    ...mapState(['session']),
    // heart
  },
  created: function () {
    let flag = false
    const course_list = this.$store.state.user_course_wishlists
      .user_course_wishlist
    for (const i in course_list) {
      if (this.course['id'] == course_list[i].courseId) {
        flag = true
        break
      }
    }
    if (flag == true) {
      this.filled = true
      this.unfilled = false
    } else {
      this.filled = false
      this.unfilled = true
    }
  },
  methods: {
    async addToWishlists() {
      const isAuthenticated = this.$store.state.session.isAuthenticated

      var obj = new JsonApiDataStoreModel('user_course_wishlists')
      obj.setAttribute('courseId', this.course['id'])
      obj.setRelationship(
        'courses',
        new JsonApiDataStoreModel('courses', this.course['id'])
      )
      console.log(obj.serialize())
      obj = obj.serialize()

      const ancor = document.getElementById('wishlist_i')
      const btn = document.getElementById('wishlist_btn')

      if (isAuthenticated) {
        if (this.filled) {
          // delete the course from the user wishlist
          const course_list = this.$store.state.user_course_wishlists
            .user_course_wishlist
          for (const i in course_list) {
            if (this.course['id'] == course_list[i].courseId) {
              this.pos = i
              break
            }
          }
          const wishlist_id = this.$store.state.user_course_wishlists
            .user_course_wishlist[this.pos].id

          this.$axios
            .$delete(`user_course_wishlists/${wishlist_id}`)
            .then((res) => {
              this.$store.commit('user_course_wishlists/delCourse', wishlist_id)
              this.filled = false
              this.unfilled = true
            })
            .catch((err) => {
              console.error(err)
            })
        } else {
          await this.$axios
            .$post('user_course_wishlists', obj)
            .then((res) => {
              this.$store.commit(
                'user_course_wishlists/setUserCourseWishlists',
                [
                  {
                    courseId: res.data.relationships.course.data.id,
                    id: res.data.attributes.id,
                  },
                ]
              )
              console.log(
                this.$store.state.user_course_wishlists.user_course_wishlist
              )
              this.unfilled = false
              this.filled = true
            })
            .catch((err) => {
              console.error(err)
            })
        }
      } else {
        const { url, clientId } = config[process.env.NODE_ENV].oneauth
        const publicUrl = `${window.location.protocol}//${window.location.hostname}/app/`
        const loginUrl = `${url}/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${publicUrl}`

        localStorage.setItem('redirectionPath', window.location.pathname)
        window.location.href = loginUrl
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