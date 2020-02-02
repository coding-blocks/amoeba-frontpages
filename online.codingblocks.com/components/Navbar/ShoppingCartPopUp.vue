<template>
  <div class="pop-up dropdown-ul border-card c-notification display-block">
    <VAsync :task="fetchCartTask">
      <template v-slot="{ value: cart }">
        <div v-if="cart">
          <div class="row no-gutters align-items-center mb-4" v-for="item in cart.data.cartItems" :key="item.id">
            <img class="round s-50x50 mr-3" :src="item.image_url" alt="">
            <div class="flex-1">
              <h6>{{item.productName}}</h6>
              <div class="d-flex align-items-end">
                <h4>Rs {{item.final_price}}</h4> 
                <strike class="grey ml-2 card-md">Rs {{item.list_price}}</strike>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="card-md">
              <button @click="clearCart">X Remove Product</button>
            </div>
            <a href="https://dukaan.codingblocks.com">
              <button class="button-solid">Checkout</button>
            </a>
          </div>
        </div>
        <div v-else>
          <div class="dropdown-li row align-items-left pl-3">
            Your Cart is empty
          </div>
        </div>
      </template>
    </VAsync>
  </div>
</template>
<script>
import VAsync from '~/components/Base/VAsync'

export default {
  components: {
    VAsync
  },
  tasks(t) {
    return {
      fetchCartTask: t(function *() {
        return this.$axios.get('runs/cart').catch(err => {
          return null
        })
      })
    }
  },
  methods: {
    clearCart() {
      return this.$axios.get('/runs/clear_cart')
    }
  },
  computed: {
    cart () {
      return this.fetchCartTask.lastResolved.value
    }
  }
}
</script>
