<template>
  <div>
    <span class="pos-rating orange" v-for="n in numberOfYellowStars" :key="n">
            <FaIcon icon="star" class="fa-lg" />
    </span>
    <span class="neg-rating" v-for="n in numberOfEmptyStars" :key="n">
        <FaIcon icon="star" class="fa-lg" />
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RatingStars',
  props: {
    value: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      default: 5
    }
  },
  computed: {
    numberOfYellowStars () {
      // console.log(this.value)
      return Math.floor(this.value)
    },
    numberOfEmptyStars () {
      console.log(this.total)
      return this.total - this.numberOfYellowStars
    }
  }
}
</script>