<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Customer Reviews
            <div class="col-lg-7">
              <div class="row no-gutters align-items-center">
                <div class="col-sm-12">
                  <div class="font-sm float">{{ ratingStats.count }} Ratings</div>
                  <div class="float mx-2">
                    <RatingStars pos-rating-class="mr-3" neg-rating-class="d-none" :value="ratingStats.rating" />
                  </div>
                  <div class="bold float">
                    {{ ratingStats.rating }} / 5.0
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              x
            </button>
          </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="row no-gutters align-items-center mb-3" v-for="review in reviews" :key="review.id">
              <img class="s-40x40 br-25 bg-grey mr-2" :src="review.user.photo" />
              <div class="col-8">
                <div class="card-md bold capital">
                  {{ review.user.firstname }} {{ review.user.lastname }}
                </div>
                <div class="text-ellipses card-md">{{ review.heading }}</div>
              </div>
            </div>
          </slot>
        </section>

      </div>
    </div>
  </transition>
</template>
<script>
import RatingStars from './RatingStars.vue'

export default {
  name: 'modal',
  props: {
    ratingStats: {
      type: Object,
      required: true
    },
    reviews: {
      type: Object,
      required: true
    }
  },
  components: {
    RatingStars
  },
  data() {
    return {
      offset: 0,
      limit: 9,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}

</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.float{
  float: right;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 60%;
  top: 20%;
  left: 20%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: black;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 20px;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
  float: right;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

</style>
