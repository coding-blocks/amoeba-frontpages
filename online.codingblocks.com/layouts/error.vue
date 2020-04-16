<template>
  <component :is="errorComponent" />
</template>
<script>    
export default {
    props : {
        error : {
            type : Object,
            required: true,
        }
    },
    layout: 'landing-page',
    computed : {
        errorComponent: function(){
            return () => import(`../components/Error/${this.error.statusCode}`)
        }

    }
}
</script>
