<template>
   <div>
    <promotion-banner />
    <div class="row no-gutters justify-content-between px-md-5 px-4 py-4">
      <div class="col-12">
        
      </div>
      <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6 col-9">
        <div class="row no-gutters align-items-center">
          <div class="d-lg-none">
            <div class="hamburger-menu mr-3">
              <div class="ham-toggle">
                <div class="hamburger" @click="hamburgerOpen = !hamburgerOpen">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link to="/" class="col-lg-12 col-10">
            <img src="https://minio.codingblocks.com/amoeba/OnlineLogo2020_LIGHT_logofull.png" width="80%" alt="Logo">
          </nuxt-link>
        </div>
      </div>
      <div class="col-lg-9 col-4">
        <div class="row mx-0 align-items-center h-100 justify-content-end d-md-flex d-none">
          <div class="d-lg-inline-flex d-none align-items-center hover-orange">
            
            <a href="/app/tracks" class="px-3">
              <h6 class="normal">Learning Tracks</h6>
            </a>
            <nuxt-link to="/courses" active-class="active" class="px-3">
              <h6 class="normal">Explore Courses</h6>
            </nuxt-link>
            <a href="/app/jobs" class="px-3">
              <h6 class="normal">Hiring Blocks</h6>
            </a>
           
          </div>
          <a class="button-solid button-orange ml-4" href="/app/login">Login</a>
        </div>
      </div>
    </div>

    <!-- Hamburger-nav --}} -->
    <div class="hamburger-nav b-right overflow-y-auto no-scrollbar" :class="!hamburgerOpen && 'hamburger-nav--hidden'">
      <div class="d-flex py-3 justify-content-between align-items-center hamburger-nav__top-bar" @click="hamburgerOpen = !hamburgerOpen">
        <img src="https://minio.codingblocks.com/amoeba/OnlineLogo2020_LIGHT_logofull.png" alt="OCB" class="hamburger-nav__ham-logo ml-4">
        <img src="https://minio.codingblocks.com/amoeba/wrong-close.png" alt="#" class="mr-4 hamburger-nav__cross pointer" >
      </div>
      <div class="divider-h"></div>
      <div class="d-flex align-items-center my-4 pl-4" v-if="session.isAuthenticated">
        <div>
          <div class="img-ring s-80x80">
            <img class="round img"
              :src="user.photo"
              :alt="user.firstname">
          </div>
        </div>
        <div class="pl-4">
          <div class="extra-bold gradient-text">{{user.firstname}} {{user.lastname}}</div>
          <div class="bold card-sm"><a href="https://account.codingblocks.com/users/me" target="_blank" class="orange">View Profile</a></div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4" v-else>
        <a href="/app/" class="button-solid button-orange px-5">
          Login
        </a>
      </div>

      
      <div class="mt-5 px-4 overflow-y-auto no-scrollbar">
        <div class="d-flex justify-content-between">
          <div class="card-md extra-bold orange">Courses</div>
          <a href="#" class="orange"><i class="fas fa-angle-up fa-lg"></i></a>
        </div>
        
        <div class="my-4 pl-4">
          <div class="hamburger-nav__menu-element" :class="{active: mobileSelectedTab === 'online'}" @click="mobileSelectedTab = 'online'">
            <div class="card-md extra-bold">Online Courses</div>
            <div class="card-sm light"><a href="#" class="orange">Explore All</a></div>
          </div>
          <div class="pl-4" v-if="mobileSelectedTab === 'online'">
            <div class="mt-4">
              <div class="light extra-bold">Beginner Courses</div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/c-plus-plus-online-course-for-beginners">
                  C++ Master Course | Launchpad
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/complete-java-course-online">
                  Java Master Course | Crux
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/python-for-beginners-developers">
                  Python For Developers
                </a>
              </div>
            </div>
            <div class="mt-3">
              <div class="light extra-bold">Advanced Courses</div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/python-django">
                  Web Dev with Python-Django
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/coding-interview-preparation-online">
                  Interview Prep Bootcamp
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/data-structures-and-algorithms-online-course-java-algo">
                  Algo.Java Online
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/android-app-training-online">
                  Android App Development Online
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/telegram-chatbot-python-online">
                  Build Chatbots in Python
                </a>
              </div>
            </div>
            <div class="mt-3">
              <div class="light extra-bold">Expert Courses</div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/competitive-programming-course-online">
                  Competitive Programming Online
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/coding-interview-preparation-course-online-c-plus-plus">
                  Interview Preparation - C++
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/machine-learning-course-online">
                  Machine Learning Master Course
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/coding-interview-preparation-course-online-java">
                  Interview Preparation - Java
                </a>
              </div>
              <div class="light">
                <a href="https://online.codingblocks.com/courses/data-science-online-course-python">
                  Data Science
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-md light my-4">
          <a href="https://codingblocks.com/resources">
            Resources
          </a>
        </div>
        <div class="card-md light my-4">
          <a href="https://codingblocks.com/campus-ambassador-program.html" target="blank">
            Campus Ambassadors
          </a></div>
        <div class="card-md light my-4">
          <a href="https://codingblocks.com/about" target="blank">
            About Us
          </a>
        </div>
        <div class="card-md light my-4">
          <a href="https://codingblocks.com/centres" target="blank">
            Contact Us
          </a>
        </div>
      </div>
    </div>
     <button
        class="scroll-top status-button button-orange font-sm mr-3 button-solid"
        @click="scrollToTop">
        Scroll To Top
      </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheNavbarTop',
  data () {
    return {
      hamburgerOpen: false,
      mobileSelectedTab: 'online'
    }
  },
  methods: {
     scrollToTop () {
      const el = this.$el.getElementsByClassName('no-gutters')[0]

      if (el) {
        el.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }
  },
  computed: {
    ...mapState(['session']),
    user () {
      return this.session?.user
    }
  },
  
} 
</script>
<style scoped>
.c-topnav {
  width: 92vw;
  padding: 0 3%;
}
.bg-light-red {
  background: rgba(255,0,0,0.1)
}
.scroll-top {
  position: fixed;
  right: 35rem;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  z-index: 100;
}
</style>
