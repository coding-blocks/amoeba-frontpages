<style>
.cOPjdp {
    font-size: 3.6rem;
    line-height: 4.8rem;
    color: rgb(54, 54, 54);
    font-weight: 500;
}

.PGpcb {
    font-size: 3.6rem;
    line-height: 4.8rem;
    font-weight: 300;
    text-align: center;
    color: rgb(105, 105, 105);
}
progress {
  background-color: rgb(220, 220, 220) !important;
}
progress::-webkit-progress-bar {
  background-color: rgb(220, 220, 220) !important;
}
.styles__Container-sc-10z716i-1 {
  text-align: center;
}
</style>

<template>
<div class="sc-1mo3ldo-0 styles__StretchedPageContainer-sc-1up66fr-0 iHCEtL fzrHvo"><div class="styles__Container-sc-10z716i-1 kcJmlr"><div class="styles__CountdownContainer-sc-10z716i-2 cikGRs"><p class="sc-1hez2tp-0 styles__Title-sc-10z716i-3 PGpcb"><span class="styles__BoldTitle-sc-10z716i-4 cOPjdp">₹{{reliefAmount}}{{amountDenomination}}</span> of ₹10Lc raised</p></div><progress :value="fundsProgress" max="100" class="d-inline-block w-90 progress-orange"></progress></div></div>
</template>

<script>
export default {
  props: {
    amount: Number
  },
  data() {
    return {
      reliefAmount: 0,
      fundsProgress: 0,
      amountDenomination: ''
    }
  },

  mounted() {
    this.setReliefAmount.run()
  },

  tasks(t) {
    return {
      setReliefAmount: t(function*() {
        const amount = this.amount
        this.reliefAmount = yield Math.round(amount / 100)
        // this.reliefAmount = 90000000 / 100
        if(amount >= 10000000) {
          this.reliefAmount = (amount / 10000000).toFixed(1)
          this.amountDenomination = 'Lc'
        }
        this.fundsProgress = amount / 100000000 * 100
      })
    }
  }
}
</script>
