<template>
  <div>
    <div 
      class="border-card border-none white p-4 bg-cricket-pink pointer"
      @click="modalOpened = true"
    >
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center justify-content-center justify-content-md-start">
          <div class="br-50 image-ring s-70x70 mr-3">
            <img v-if="user"
              class="round img"
              :src="user.photo"
              :alt="user.firstname"
            >
          </div>
          <div>
            <div class="bold">Welcome</div>
            <div class="bold font-mds mt-2">{{user.firstname}} {{user.lastname}}</div>
          </div>
        </div>
        <div>
          <div class="bold font-mds">Your Winnings</div>
        </div>
      </div>
    </div>
    <Modal v-if="modalOpened" @close="modalOpened = false">
      <div slot="body">
        <WinningsModal :winnings=winnings />
      </div>
    </Modal>
  </div>  
</template>
<script>
import { mapState } from 'vuex';
import Modal from '~/components/AboutCourse/Modal.vue';
import WinningsModal from './WinningsCard/WinningsModal.vue';

export default {
  components: {
    Modal,
    WinningsModal
  },
  data() {
    return {
      modalOpened: false,
      winnings: null,
    }
  },
  mounted () {
    this.$axios
      .get('/cricket_cup/matches/winnings')
      .then(response => {
        this.winnings = response.data.winnings
      })
  },
  computed: {
    ...mapState(['session']),
    user () {
      return this.session?.user
    }
  }
}
</script>
<style scoped>
  .bg-cricket-pink {
    background: linear-gradient(90deg, #D93764 0%, #F24F60 100%);
  }
  .image-ring {
    border: 2px solid #FFFFFF;
  }
</style>
