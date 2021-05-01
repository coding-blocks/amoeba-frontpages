<template>
  <div class="container py-4">
    <HeroBanner />

    <div class="mt-4" v-for="match in matches" :key="match.id">
      <MatchCard 
        :match="match"
      />
    </div>

    <img class="br-10 my-5" src="https://minio.codingblocks.com/public/ipl-banner-goodies.jpg" alt="">

    <WinningStreak v-if="user" />

    <div class="row mt-4">
      <div class="col-md-6">
        <WinningsCard v-if="user" class="mb-4"/>
        <RulesCard />
      </div>
      <div class="col-md-6">
        <Leaderboard />
      </div>
    </div>
  </div>
</template>
<script>
import sidebarLayoutMixin from '~/mixins/sidebarForLoggedInUser';
import HeroBanner from '~/components/Campaigns/IPL2020/HeroBanner';
import MatchCard from '~/components/Campaigns/IPL2020/MatchCard';
import RulesCard from '~/components/Campaigns/IPL2020/RulesCard';
import WinningsCard from '~/components/Campaigns/IPL2020/WinningsCard';
import Leaderboard from '~/components/Campaigns/IPL2020/Leaderboard';
import WinningStreak from '~/components/Campaigns/IPL2020/WinningStreak';
import { mapState } from 'vuex';

export default {
  mixins: [sidebarLayoutMixin],
  components: {
    HeroBanner,
    MatchCard,
    RulesCard,
    WinningsCard,
    Leaderboard,
    WinningStreak
  },
  data() {
    return {
      matches: []
    }
  },
  computed: {
      ...mapState(['session']),
      user () {
          return this.session?.user
      }
  },
  async asyncData({ $axios, app: { $jsonApiStore } }) {
    const res = await $axios.get('cricket_cup/matches');
    const matches = $jsonApiStore.sync(res.data)

    return {
      matches
    }
  }
}
</script>
