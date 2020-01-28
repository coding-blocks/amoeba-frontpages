<template>
  <div>
    <span :class="'pos-rating orange ' + posRatingClass" v-for="n in numberOfYellowStars" :key="n">
      <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg" />
    </span>
    <span :class="'neg-rating ' + negRatingClass" v-for="n in numberOfEmptyStars" :key="n">
      <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_unfilled.svg" />
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
    },
    showEmpty: {
      type: Boolean,
      default: true
    },
    posRatingClass: {
      type: String,
      default: ''
    },
    negRatingClass: {
      type: String,
      default: ''
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