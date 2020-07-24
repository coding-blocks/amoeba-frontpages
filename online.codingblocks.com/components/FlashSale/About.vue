<template>
  <div class="d-flex flex-wrap bg-lightgrey px-4 py-5 justify-content-between br-10">
    <div class="col-md-6">
      <h2 class="pb-4 bold">ABOUT SALE</h2>
      <div>
        <p>
          <strong>Placement Season </strong> is on its way and we want you to be entirely prepared for it. 
        </p>
        
        <p class="bold">
          Here’s the treasure box for y’all to ace your dream interview with a bang. 
        </p>

        <p>
          Get placed with the right approach/ get placed with expertise.
        </p>
      </div>
    </div>
    <div class="col-md-5">
      <h2 class="pb-4 bold">
        {{hasStarted ? 'HURRY UP!' : 'SALE STARTS IN'}}
      </h2>

      <client-only>
        <VueCountdown :time="time" v-if="hasStarted">
          <template slot-scope="props">
            <div class="d-flex align-items-center mb-5">
              <div class="time-panel t-align-c py-3">
                <div class="value"> {{props.days}} </div>
                <div class="font-xl">Days</div>
              </div>
              <div class="font-xl px-3"> : </div>
              <div class="time-panel t-align-c py-3">
                <div class="value"> {{props.hours}}</div>
                <div class="font-xl">Hours</div>
              </div>
              <div class="font-xl px-3"> : </div>
              <div class="time-panel t-align-c py-3">
                <div class="value"> {{ props.minutes }} </div>
                <div class="font-xl">Mins</div>
              </div>
            </div>
          </template>
        </VueCountdown>

        <VueCountdown :time="time" v-if="!hasStarted">
          <template slot-scope="props">
            <div class="d-flex align-items-center mb-5">
              <div class="time-panel t-align-c py-3">
                <div class="value"> {{props.hours}} </div>
                <div class="font-xl">Hours</div>
              </div>
              <div class="font-xl px-3"> : </div>
              <div class="time-panel t-align-c py-3">
                <div class="value"> {{props.minutes}}</div>
                <div class="font-xl">Mins</div>
              </div>
              <div class="font-xl px-3"> : </div>
              <div class="time-panel t-align-c py-3">
                <div class="value"> {{ props.seconds }} </div>
                <div class="font-xl">Secs</div>
              </div>
            </div>
          </template>
        </VueCountdown>



      </client-only>

      <h2 class="py-4 bold">COUPON CODE</h2>

      <div class="coupon-code">
        GETPLACED
      </div>
    </div>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  components: {
    VueCountdown
  },
  data () {
    return {
      saleStarts: 1595601000,
      saleEnds: 1595788199,
      now: Date.now()/1000
    }
  },
  computed: {
    time () {
      const countdownTo = this.hasStarted ? this.saleEnds : this.saleStarts
      return (countdownTo - (this.now/1000))*1000 
    },
    hasStarted () {
      return this.now > this.saleStarts
    }
  }
}
</script>


<style scoped>
.bg-lightgrey {
  background-color: #f2f2f2;
}

h2  {
  font-size: 30px;
  font-weight: normal;
}
p {
  font-size: 26px;
  text-align: justify;
}
.time-panel {
  background-color: #333;
  color: white;
  width: 7.7rem;
  height: 7.7rem;
  border-radius: 10px;
}
.time-panel .value {
  font-size: 3.14rem;
}

.coupon-code {
  border: 1px solid black;
  font-size: 2.71rem;
  font-weight: bold;
  padding: 1.6rem;
  display: inline-block;
  position: relative;
  border-radius: 10px;
}

.coupon-code:after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 5%;
  border: 1px dashed black;
  width: 96%;
  height: 90%;
  left: 2%;
  border-radius: 10px;

}
</style>