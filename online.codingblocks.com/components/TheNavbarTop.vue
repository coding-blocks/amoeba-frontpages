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
            <a href="#classroom-courses">
              <h6>Classroom Courses</h6>
            </a>
          </li>
          <li class="top-nav-option px-3 d-none d-md-block">
            <a href="#hacker-blocks">
              <h6>Hacker Blocks</h6>
            </a>
          </li>
        </ul>
      </div>
      <div class="align-items-center">
        <ul class="right-nav d-md-flex d-none">
          <li class="top-nav-option px-3">
            <a href="#" @click="toggleNotification" v-on-clickaway="closeNotification">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/notification.svg" alt="">
            </a>
            <NotificationPopUp v-if="!notificationCollapsed" data-no-clickaway="true" />
          </li>
          <li class="top-nav-option px-3">
            <a href="#" @click="toggleShoppingCart" v-on-clickaway="closeShoppingCart">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cart.svg" alt="">
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
      <div class="hover-orange d-flex justify-content-end mt-3">
        <a href="#">
          <i class="far fa-bell fa-lg pr-4"></i>
        </a>
        <a href="#">
          <i class="fas fa-shopping-cart fa-lg pr-4"></i>
        </a>
      </div>
      <div class="mt-5 px-4 overflow-y-auto no-scrollbar">
        <div class="d-flex justify-content-between">
          <div class="card-md extra-bold orange">Courses</div>
          <a href="#" class="orange"><i class="fas fa-angle-up fa-lg"></i></a>
        </div>
        <div class="my-4 pl-4">
          <div class="hamburger-nav__menu-element active">
            <div class="card-md extra-bold">Classroom Courses</div>
            <div class="card-sm light"><a href="#" class="orange">Explore All</a></div>
          </div>
          <div class="pl-4">
            <div class="mt-4">
              <div class="card-sm light extra-bold">Beginner Courses</div>
              <div class="card-sm light">C++ For Beginners</div>
              <div class="card-sm light">JAVA For Beginners</div>
              <div class="card-sm light">Python App Development</div>
            </div>
            <div class="mt-3">
              <div class="card-sm light extra-bold">Development Courses</div>
              <div class="card-sm light">Android App Dev</div>
              <div class="card-sm light">Python Django</div>
              <div class="card-sm light">Unity Game Development</div>
              <div class="card-sm light">Full Stack Web Dev</div>
            </div>
            <div class="mt-3">
              <div class="card-sm light extra-bold">Advanced Courses</div>
              <div class="card-sm light">Algo++</div>
              <div class="card-sm light">Algo.JAVA</div>
              <div class="card-sm light">Competitive Programming</div>
              <div class="card-sm light">Machine Learning</div>
            </div>
          </div>
        </div>
        <div class="my-4 pl-4">
          <div class="hamburger-nav__menu-element">
            <div class="card-md extra-bold">Online Courses</div>
            <div class="card-sm light"><a href="#" class="orange">Explore All</a></div>
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
      notificationCollapsed: true
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
</style>
