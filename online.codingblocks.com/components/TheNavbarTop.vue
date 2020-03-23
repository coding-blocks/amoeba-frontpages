<template>
  <div>
    <div class="row c-topnav py-4 justify-content-between align-items-center">
      <div class="col-6 px-0">
        <div class="d-md-none d-block d-flex align-items-center ml-3">
          <div class="hamburger-menu mr-3" @click="toggleHamburger">
            <div class="ham-toggle">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <img src="https://minio.codingblocks.com/motley/online-logo-text.png" alt="" class="d-inline-block w-75">
        </div>
      </div>
      <div class="col-6 offset-1 d-md-block d-none">
        <ul>
          <li class="top-nav-option px-3 d-none d-md-block">
            <a href="https://codingblocks.com/classroom-courses/">
              <h6>Classroom Courses</h6>
            </a>
          </li>
          <li class="top-nav-option px-3 d-none d-md-block">
            <a href="https://hack.codingblocks.com/">
              <h6>HackerBlocks</h6>
            </a>
          </li>
        </ul>
      </div>
      <div class="align-items-center">
        <ul class="right-nav d-md-flex d-none">
          <li class="top-nav-option px-3">
            <a href="#" @click="toggleNotification" v-on-clickaway="closeNotification">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/notification.svg" />
            </a>
            <NotificationPopUp v-if="!notificationCollapsed" data-no-clickaway="true" />
          </li>
          <li class="top-nav-option px-3">
            <a href="#" @click="toggleShoppingCart" v-on-clickaway="closeShoppingCart">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cart.svg" />
            </a>
            <ShoppingCartPopUp v-if="!shoppingCartCollapsed" data-no-clickaway="true" />
          </li>
          <li class="top-nav-option hoverable px-3">
            <div class="img-desc align-items-center font-sm" v-if="session.isAuthenticated">
              <img class="round s-30x30" :src="user.photo" :alt="user.firstname">
              <div class="description ml-4 font-sm bold">
                Hi, {{user.firstname}} {{user.lastname}}
              </div>
            </div>
            <div class="pop-up border-card p-3 br-5">
              <ul class="t-align-l">
                <li>
                  <a href="https://account.codingblocks.com/users/me" target="_blank">
                    Profile
                  </a>
                </li>
                <div class="divider-h my-3"></div>
                <li>
                  <a class="dark-grey" :href="logoutUrl">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Hamburger -->
    <div class="hamburger-nav b-right overflow-y-auto no-scrollbar" :class="hamburgerCollapsed && 'hamburger-nav--hidden'">
      <div class="d-flex py-3 justify-content-between align-items-center hamburger-nav__top-bar">
        <img src="https://minio.codingblocks.com/motley/online-logo-text.png" alt="Online CodingBlocks" class="hamburger-nav__ham-logo ml-4">
        <img src="https://minio.codingblocks.com/motley/wrong_g.png" alt="Close" class="mr-4 hamburger-nav__cross pointer" @click="toggleHamburger">
      </div>
      <div class="divider-h"></div>
      <div class="d-flex justify-content-center mt-4">
        <nuxt-link to="/logout" class="button-solid button-orange px-5" v-if="user">
          Logout
        </nuxt-link>
      </div>
      <div class="mt-5 px-4 overflow-y-auto no-scrollbar">
        <div class="d-flex justify-content-between">
          <div class="card-md extra-bold orange">Courses</div>
          <a href="#" class="orange"><i class="fas fa-angle-up fa-lg"></i></a>
        </div>
        <div class="my-4 pl-4">
          <div class="hamburger-nav__menu-element" :class="{active: mobileSelectedTab === 'classroom'}" @click="mobileSelectedTab = 'classroom'">
            <div class="card-md extra-bold">Classroom Courses</div>
            <div class="card-sm light"><a href="#" class="orange">Explore All</a></div>
          </div>
          <div class="pl-4" v-if="mobileSelectedTab === 'classroom'">
            <div class="mt-4">
              <div class="light extra-bold">Beginner Courses</div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/c-plus-plus-for-beginners.html">
                  C++ For Beginners
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/java-for-beginners.html">
                  Java For Beginners
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/python-app-dev.html">
                  Python App Development
                </a>
              </div>
            </div>
            <div class="mt-3">
              <div class="light extra-bold">Development Courses</div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/android-app-development-using-kotlin-and-java.html">
                  Android App Dev
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/web-development-nodejs.html">
                  Full Stack Web Dev
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/web-development-django.html">
                  Python Django
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/unity-game-development.html">
                  Unity Game Development
                </a>
              </div>
            </div>
            <div class="mt-3">
              <div class="light extra-bold">Advanced Courses</div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/android-app-development-using-kotlin-and-java.html">
                  Algo++
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/web-development-nodejs.html">
                  Algo.JAVA
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/web-development-django.html">
                  Competitive Programming
                </a>
              </div>
              <div class="light">
                <a href="https://codingblocks.com/classroom-courses/unity-game-development.html">
                  Machine Learning
                </a>
              </div>
            </div>
          </div>
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
            </div>
          </div>
        </div>
        <div class="card-md light mt-5 mb-4">Products</div>
        <div class="card-md light my-4">Resources</div>
        <div class="card-md light my-4">Campus Ambassadors</div>
        <div class="card-md light my-4">About Us</div>
        <div class="card-md light my-4">Contact Us</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShoppingCartPopUp from '~/components/Navbar/ShoppingCartPopUp'
import NotificationPopUp from '~/components/Navbar/NotificationPopUp'
import { directive as onClickaway } from 'vue-clickaway';
import config from '~/config.json';

export default {
  name: 'TheNavbarTop',
  directives: {
    onClickaway
  },
  data () {
    return {
      hamburgerCollapsed: true,
      shoppingCartCollapsed: true,
      notificationCollapsed: true,
      mobileSelectedTab: 'classroom'
    }
  },
  components: {
    ShoppingCartPopUp,
    NotificationPopUp
  },
  methods: {
    isClickFromPopup(e) {
      return e.srcElement.attributes['data-no-clickaway']
    },
    closeNotification (e) {
      if (!this.isClickFromPopup(e)) {
        this.notificationCollapsed = true
      }
    },
    toggleNotification () {
      this.notificationCollapsed = !this.notificationCollapsed
    },
    closeShoppingCart (e) {
      if (!this.isClickFromPopup(e)) {
        this.shoppingCartCollapsed = true
      }
    },
    toggleShoppingCart () {
      this.shoppingCartCollapsed = !this.shoppingCartCollapsed
    },
    toggleHamburger () {
      this.hamburgerCollapsed = !this.hamburgerCollapsed
    }
  },
  computed: {
    ...mapState(['session']),
    user () {
      return this.session?.user
    },
    logoutUrl() {
      return `https://account.codingblocks.com/logout?redirect=${config[process.env.NODE_ENV].publicUrl}/logout`
    }
  }
}
</script>

<style scoped>
  .pop-up {
    position: absolute;
    width: 375px;
  }
  .bg-light-red {
  background: rgba(255,0,0,0.1)
}
</style>
