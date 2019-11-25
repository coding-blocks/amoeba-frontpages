<template>
  <div>
     {{ course.title }}

     {{course.description}}

     {{ course.rating }}

     {{course.instructors[0].name}}

     {{course.language}}

     
  </div>
</template>

<script>
export default {
  name: 'IntroductionCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>