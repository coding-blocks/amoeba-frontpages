<template>
    <div class="container mt-5 mx-5">
        <div class="row mb-4">
            <div class="col-lg-4 col-md-6 col-12">
                <h3>Uplift your career with us</h3>
                <p class="font-sm">Accelerate your future. Learn anytime, anywhere.</p>
            </div>
            
            <div class="input-search d-flex col-lg-7 col-md-6 col-10 bg-light-grey">
                <input class="bg-light-grey" placeholder="What do you want to learn?" type="text">
            </div>
        </div>
        <div class="row a-ocb">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    </div>
</template>


<script>
import CourseCard from '~/components/Base/CourseCard.vue';
export default {
    components: {
        CourseCard
    }
}

</script>

<style scoped>

.input-search {
  height: 50px;
}

input {
    width: 95%;
    height: 100%;
    margin: auto;
}

</style>
