<template>
    <div class="col-lg-12 pt-3 pr-3 pl-3">
        <div class="br-10 p-4 border">
            <div class="font-sm mb-5 pb-5 border-bottom">
                Skill Assessment Test: Frontend Developement
            </div>
            <div class="row no-gutters align-items-center justify-content-between mb-2">
                <div class="flex-1 pr-4">
                    <div class="font-md bold">
                        {{question.text}}
                    </div>
                </div>
                <div class="s-60x60 border b-pink all-center round">
                    <div class="t-align-c pink">
                        <h2 class="bold">30</h2>
                        <div class="font-sm">SEC</div>
                    </div>
                </div>
            </div>
        </div>

        <Response
             v-for="(response, index) in question.responses"
             :response="response"
             :index="index"
             :class="{ 'is-selected': userResponses[questionIndex] == index}"
             v-on:click="$emit('click',index)"
             :key="index"
        >
        </Response>

    </div>
</template>


<script>
import Response from '~/components/Base/EligibilityTest/Response.vue'

    export default {
        name: 'Question',
        props: {
            question: Object,
            userResponses: Array,
            questionIndex: Number
        },
        components: {
            Response
        },
        methods: {
            // selectOption: function(index) {
            //     console.log(index, '**************')
            //     this.userResponses[this.questionIndex] = index
            //     // Vue.set(this.userResponses, this.questionIndex, index);
            //     //console.log(this.userResponses);
            // }
        }
    }
</script>
