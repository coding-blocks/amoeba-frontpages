<template>
  <!-- <div class="container-fluid c-topnav py-3" id="TheNavbarTop">
    <div class="d-flex justify-content-between align-items-center ">
      <div class="d-flex nav-items">
        <div>Learning Tracks</div>
        <div>Explore Courses</div>
        <div>Hiring Blocks</div>
      </div>
      <button class="button-solid button-orange">Get Started</button>
    </div>
  </div> -->
  <div class="row c-topnav py-3 justify-content-between ml-sidenav no-gutters pl-5">
    <div class="col-6 px-0 d-md-none d-block">
      <div class="d-flex align-items-center ml-3">
        <div class="hamburger-menu mr-3">
          <div class="ham-toggle">
            <div class="hamburger" data-ember-action="" data-ember-action-278="278">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <span class="font-sm">Online<strong> Coding Blocks</strong></span>
      </div>
    </div>
    <div class="col-6 d-md-block d-none">
      <ul>
        <li class="top-nav-option mt-2 d-none d-md-block">
          <a href="https://codingblocks.com/classroom-courses/?__hstc=212190091.4762b1990ae4481817f2203dff049b1f.1575546990712.1576574709021.1576688469727.25&amp;__hssc=212190091.1.1576688469727&amp;__hsfp=4050479647" target="blank">
            <h6>Classroom Courses</h6>
          </a>
        </li>
        <li class="top-nav-option px-3 mt-2 d-none d-md-block">
          <a href="https://hack.codingblocks.com/?__hstc=212190091.4762b1990ae4481817f2203dff049b1f.1575546990712.1576574709021.1576688469727.25&amp;__hssc=212190091.1.1576688469727&amp;__hsfp=4050479647" target="blank">
            <h6>HackerBlocks</h6>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-6 align-items-center">
      <ul class="right-nav pull-right">
        <!-- <li class="top-nav-option hoverable px-3 d-md-block d-none">
          <div class="img-desc align-items-center font-sm pt-1">
            <img class="round s-30x30" src="https://graph.facebook.com/1509942179038029/picture?type=large" alt="Profile Pic">
            <div class="description ml-3">
              Hi, Abhishek Gupta
            </div>
          </div>
          <div class="pop-up border-card p-3 br-5">
            <ul class="t-align-l">
              <li>
                <a href="https://account.codingblocks.com/users/me?__hstc=212190091.4762b1990ae4481817f2203dff049b1f.1575546990712.1576574709021.1576688469727.25&amp;__hssc=212190091.1.1576688469727&amp;__hsfp=4050479647">
                  Profile
                </a>
              </li>
              <div class="divider-h my-3"></div>
              <li>
                <a class="dark-grey">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </li> -->
        <li>
          <nuxt-link to=""> Learning Tracks </nuxt-link> 
        </li>
        <li class="ml-3">
          <nuxt-link to="/courses"> Explore Course </nuxt-link> 
        </li>
        <li class="ml-3">
          <nuxt-link to=""> Hiring Blocks </nuxt-link> 
        </li>
        <li class="ml-3">
          <button class="button-solid button-orange" v-if="session.isAuthenticated">
            Get Started
           
            {{ session.user.firstname }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheNavbarTop',
  computed: mapState(['session'])
}
</script>

<style scoped>
.c-topnav {
  width: 92vw;
  padding: 0 3%;
}
</style>
