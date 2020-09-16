<template>
  <div class="col-md-6 col-lg-4 mb-3">
    <div class="img-card">
      <div class="head pt-4"
        :style="`background-image: url('${course['cover-image']}')`"
      >
        <img class="card-badge" :src="course['badge-url']" v-if="course['badge-url']" loading="lazy">
        <!-- <img class="back-img back-img-course" loading="lazy" :src="course['cover-image']"> -->
        <div class="t-align-r">
          <span class="font-lg" 
          v-for="i in 3"
          :key="i"
          :class="i-1 <= course.difficulty ?  'orange' : 'white'"
        > 
          &#10625;
        </span>
          <!-- <div class="card-sms">Beginner</div> -->
          <div class="course-card__difficulty card-sm"> {{ difficultyText }} </div>
        </div>
        <h5 class="bold twoLine">{{course.title}}</h5>
          <RatingStars class="mt-2" :value="Math.round(+this.course.rating)">
            <span class="card-md font-normal ml-2"> {{this.course.rating}}/5, {{this.course['review-count']}} ratings</span>
          </RatingStars>
        <div
          class="head__course-logo"
          style="padding: 0%; bottom: -30px; width: 70px; height: 70px;"
        >
          <img
            style="border-radius: 50%;"
            :src="course.logo"
            alt="logo"
            loading="lazy"
          />
        </div>
      </div>
      <div class="px-lg-5 px-4 pt-5 pb-3">
        <div class="card-mentor mb-4">
          <div class="card-mentor-image">
            <img
              class="card-mentors"
              :src="instructor.photo"
              :alt="'photo of' + instructor.name"
              v-for="instructor in visibleInstructors"
              :key="instructor.id"
              loading="lazy"
            />
           
          </div>
          <div class="pl-4">
            <div class="card-md font-normal">Instructors</div>
            <div class="bold">{{visibleInstructorNames}}</div>
          </div>
        </div>
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="col-lg-8 col-6">
            <div>Starting from</div>
            <div>
              <span class="bold gradient-text-orange font-sm">{{price > 0 ? `₹${price}` : 'Free' }} </span>
              <span class="card-md bold grey pl-lg-3 pl-1" v-show="showMrp">
                ₹<del>{{mrp}}</del>
              </span>
            </div>
            <div class="card-md mt-1">Batches starting {{startDateString}}</div>
          </div>
          <div class="col-lg-4 col-6">
            <nuxt-link
              :to="`/courses/${course.slug}`"
              class="button-solid button-orange"
            >
              Explore
            </nuxt-link>
          </div>
        </div>
        <div class="divider-h my-4"></div>
        <div class="d-flex justify-content-between">
        <a :href="tryNowLink" class="orange t-align-l d-block card-md font-normal text-hoverable" v-on:click="explore('Free Trial')">Try it for Free!</a>
        <a
          href="" 
          class="orange t-align-r d-block card-md font-normal text-hoverable" 
          @click.prevent.stop="showModal = true"
          v-if="user && course['eligibility-quiz-id']"
          >
            <i class="fas fa-vial"></i> Take eligibility Test
        </a>
        </div>
        <Modal v-show="showModal" @forceClose="showModal=false">
          <div slot="body">
              <Quiz :course="course" />
            <div class="d-md-none t-align-c mt-2" @click="showModal = false">
              <button class="button-dashed button-orange">Go Back</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import RatingStars from '~/components/AboutCourse/RatingStars'
import { formatTimestamp } from '~/utils/date'
import { topRunForCourse, textForDifficulty, freeTrialRunForCourse } from '~/utils/course';
import { mapState } from 'vuex'
import Modal from '~/components/AboutCourse/Modal.vue'
import Quiz from '~/components/Base/EligibilityTest/Quiz.vue'
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object
    },
    showModal: false
  },
  tasks(t) {
    return {
      fetchInstructorQuizTask: t(function *() {
        const { data: payload } = yield this.$axios.get(`/instructor_quiz`, {
          params: {
            filter: {
              instructorId: {
                $in: this.course.instructors.map(instructor => instructor.id)
              },
            }
          }
        })

        return payload
      })
    }
  },
  computed: {
    hasTeachersDayQuiz () {
      if (this.course.instructors.includes(6)) {
        console.log(this.course)
        console.log(this.fetchInstructorQuizTask.lastResolved?.value.data)
      }
      return !!this.fetchInstructorQuizTask.lastResolved?.value.data.length
    },
    visibleInstructors() {
      return this.course.instructors.slice(0, 2)
    },
    visibleInstructorNames () {
      return this.visibleInstructors.map(i => i.name).join(', ')
    },
    topRun () {
      return topRunForCourse(this.course)
    },
    freeTrialRun () {
      return freeTrialRunForCourse(this.course)
    },
    price () {
      return this.freeTrialRun ? this.freeTrialRun.price : 9999
    },
    mrp () {
      return this.freeTrialRun ? this.freeTrialRun.mrp : ''
    },
    difficultyText () {
      return textForDifficulty(this.course.difficulty)
    },
    tryNowLink () {
      return `/app/classroom/course/${this.course.id}/run/${this.freeTrialRun.id}`
    },
    startDateString () {
      return formatTimestamp(this.topRun.start)
    },
    courseId(){
      return `${this.course.id}`
    },
    courseName(){
      return `${this.course.name}`
    },
    showMrp () {
      return !(this.freeTrialRun && (this.freeTrialRun.mrp == this.freeTrialRun.price))
    },
    user() {
        return this.session?.user
    },
    ...mapState(['session'])
  },
  components: {
    RatingStars,
    Modal,
    Quiz
  },
  methods: {
     // log: function(event, title) {
      // this.$gtm.pushEvent({ event: title})
    // },
    explore(title) {
      this.$gtag('event', 'view_item', {
        items: [
          {
            id: this.courseId,
            name: this.courseName,
            list_name: "Course View",
            brand: "CodingBlocks",
            category: title,
            list_position: 1,
            price: '0'
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.back-img {
  top: 0%;
  left: 0%;
}

.head {
  padding-left: 31px;
  padding-right: 31px;
  background-image: url('https://minio.codingblocks.com/amoeba/ccaf84b6-63df-40f8-b4df-f64b8b9ecd9e.svg');
  background-size: 100%;
  background-size: cover;
  background-position: bottom;
}

.head__course-logo {
  border-radius: 50%;
}

.twoLine{
  height: 42px;
}

.text-hoverable:hover {
  text-decoration: underline;
}
</style>
