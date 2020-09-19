<template>
  <div
    class="pb-5 px-xl-5 px-4 overflow-auto"
    style="margin-top: -10px; max-height: 650px;"
  >
    <div
      class="row no-gutters align-items-center justify-content-between py-5 border-bottom"
    >
      <div class="flex-1">
        <div
          class="row no-gutters align-items-center justify-content-lg-start justify-content-md-center justify-content-sm-start justify-content-center"
        >
          <img
            :src="winning.meta.team1.logo"
            style="max-width: 110px !important;"
          />
          <div class="font-mds bold mx-3">VS</div>
          <img
            :src="winning.meta.team2.logo"
            style="max-width: 110px !important;"
          />
        </div>
      </div>
      <div class="t-align-r d-lg-block d-md-none d-sm-block d-none">
        <div class="card-md med-grey">
          Thursday, 19 Sept {{ winning.updated_at }}
        </div>
        <div class="my-2 font-mds extra-bold">
          {{ winning.meta.coupon.percentage }}% OFF COUPON
        </div>
        <div
          @click="copyCouponCode"
          class="py-2 px-3 br-5 copy-code font-sm"
          style="width: fit-content; border: 1px dashed #1C40DE; color: #1C40DE;"
        >
          {{ winning.meta.coupon.code }}
        </div>
      </div>
      <div class="col-12 mt-4 d-lg-none d-md-block d-sm-none d-block">
        <div class="row no-gutters justify-content-between align-items-center">
          <div class="flex-1 pr-3">
            <div class="card-md med-grey">Thursday, 19 Sept</div>
            <div class="mt-2 font-mds extra-bold">
              {{ winning.meta.coupon.percentage }}% OFF COUPON
            </div>
          </div>
          <div
            class="py-2 px-3 br-5 copy-code font-sm"
            style="width: fit-content; border: 1px dashed #1C40DE; color: #1C40DE;"
          >
            {{ winning.meta.coupon.code }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    winning: {
      type: Object,
      required: true
    }
  }
}
</script>
