<template>
  <div class="container py-4">
    <HeroBanner />

    <div class="mt-4" v-for="match in matches" :key="match.id">
      <MatchCard 
        :match="match"
      />
    </div>

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
import HeroBanner from '~/components/Campaigns/IPL2020/HeroBanner';
import MatchCard from '~/components/Campaigns/IPL2020/MatchCard';
import RulesCard from '~/components/Campaigns/IPL2020/RulesCard';
import WinningsCard from '~/components/Campaigns/IPL2020/WinningsCard';
import Leaderboard from '~/components/Campaigns/IPL2020/Leaderboard'
import { mapState } from 'vuex';

export default {
  components: {
    HeroBanner,
    MatchCard,
    RulesCard,
    WinningsCard,
    Leaderboard
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
