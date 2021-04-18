<template>
  <div>
    <WinningModalEmpty 
      v-if="winningsCount === 0"
    />
    <div class="position-relative br-10 overflow-hidden" v-else>
      <div
        class="position-sticky tr px-xl-5 px-4 py-4 br-10 bg-gradient-dpink z-pos white"
      >
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="s-80x80 round border border-2 b-white">
            <img
              :src="user.photo"
            />
          </div>
          <div class="flex-1 t-align-c px-4">
            <div class="font-mds">YOUR WINNINGS</div>
            <div class="mt-1 font-md extra-bold">
              {{ winningsCount }} Prizes Won
            </div>
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/wickets.svg"
          />
        </div>
      </div>
      <WinningRow 
        v-for="winning in winnings"
        :winning="winning"
        :key="winning.id"
      />
    </div>
  </div>
</template>
<script>
import WinningModalEmpty from './WinningModalEmpty';
import WinningRow from './WinningRow';
import { mapState } from 'vuex';

export default {
  name: 'Success',
  props: {
    winnings: Object
  },
  components: {
    WinningModalEmpty,
    WinningRow
  },
  methods: {
    copyCouponCode() {}
  },
  computed: {
    ...mapState(['session']),
    winningsCount() {
      return this.winnings.length
    },
    user () {
      return this.session?.user
    }
  }
}
</script>
