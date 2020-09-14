<template>
  <div class="container py-4">
    <HeroBanner />

    <div class="mt-4" v-for="match in matches" :key="match.id">
      <MatchCard 
        :match="match"
      />
    </div>
  </div>
</template>
<script>
import HeroBanner from '~/components/Campaigns/IPL2020/HeroBanner';
import MatchCard from '~/components/Campaigns/IPL2020/MatchCard';

export default {
  components: {
    HeroBanner,
    MatchCard
  },
  data() {
    return {
      matches: []
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
