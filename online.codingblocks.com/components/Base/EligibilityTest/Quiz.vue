<template>
    <div class="col-lg-12 p-3">
        <div
            v-if="!isActive"
            >
            <Start v-on:click="startQuiz()" />
            </div>
        <div
            v-if="questionIndex>=quiz.questions.length"
            v-bind:key="questionIndex"
            >
            <div v-if="score()>=7">
                <Success />
            </div>
            <div
                v-if="score()<7"
                >
                <Failure/>
            </div>
         </div>
        <div
            v-if="questionIndex<quiz.questions.length"
            v-bind:key="questionIndex"
            >
            <div class="br-10 p-4 border">
                <div class="font-sm mb-5 pb-5 border-bottom">
                    Skill Assessment Test: Frontend Developement
                </div>
            <div class="row no-gutters align-items-center justify-content-between mb-2">
                <div class="flex-1 pr-4">
                    <div class="font-md bold">
                        {{quiz.questions[questionIndex].text}}
                    </div>
                </div>
                <div class="s-60x60 border b-pink all-center round">
                    <div class="t-align-c pink">
                        <h2 class="bold">30</h2>
                        <div class="font-sm">SEC</div>
                    </div>
                </div>
            </div>
            <div
                class="border-card py-3 px-4 mb-4 hover-grey pointer row no-gutters align-items-center justify-content-between"
                v-for="(response, index) in quiz.questions[questionIndex].responses"
                :response="response"
                :index="index"
                :class="afterSelectClass(index)"
                v-on:click="selectOption(index)"
                :key="index"
                >
                <div class="font-md flex-1 pr-4">
                    {{ index | charIndex}}. {{ response.text }}
                </div>
                <img
                    v-if="afterSelectClass(index)=='bg-green white'"
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tick_grey.svg">
                <img
                    v-if="afterSelectClass(index)=='bg-red white'"
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cross_white.svg">
            </div>

            <div class="row no-gutters justify-content-between align-items-center mt-5 ">
                <div class="col-sm-8 col-6">
                    <div class="med-grey font-sm">{{total - questionIndex}} Questions Remaining</div>
                    <div class="mt-4">
                        <progress :value="(questionIndex)*10" max="100"></progress>
                    </div>
                </div>
                <button class="button-solid button-orange"
                        :class="(userResponses[questionIndex]==null)?'':'is-active'"
                        :disabled="questionIndex>=quiz.questions.length"
                        v-on:click="next();"
                        >Next Question</button>
            </div>

            </div>



        </div>
    </div>
</template>
<script>
    import Response from '~/components/Base/EligibilityTest/Response.vue'
    import Success from '~/components/Base/EligibilityTest/Success.vue'
    import Start from '~/components/Base/EligibilityTest/Start.vue'
    import Failure from '~/components/Base/EligibilityTest/Failure.vue'
    import Vue from 'vue'
    export default {
        name: 'Quiz',
        data: function() {

            return {

                userResponses: Array(10).fill(null),
                total: 10,
                questionIndex: 0,
                isActive: false,
                quiz: {
                    user: "Dave",
                    questions: [
                        {
                            text: "What is the full form of HTTP?",
                            responses: [
                                { text: "Hyper text transfer package" },
                                { text: "Hyper text transfer protocol", correct: true },
                                { text: "Hyphenation text test program" },
                                { text: "None of the above" }
                            ]
                        },
                        {
                            text: "HTML document start and end with which tag pairs?",
                            responses: [
                                { text: "HTML", correct: true },
                                { text: "WEB" },
                                { text: "HEAD" },
                                { text: "BODY" }
                            ]
                        },
                        {
                            text: "Which tag is used to create body text in HTML?",
                            responses: [
                                { text: "HEAD" },
                                { text: "BODY", correct: true },
                                { text: "TITLE" },
                                { text: "TEXT" }
                            ]
                        },
                        {
                            text: "Outlook Express is _________",
                            responses: [
                                { text: "E-Mail Client", correct: true },
                                { text: "Browser" },
                                {
                                    text: "Search Engine"
                                },
                                { text: "None of the above" }
                            ]
                        },
                        {
                            text: "What is a search engine?",
                            responses: [
                                { text: "A hardware component " },
                                {
                                    text: "A machinery engine that search data"
                                },
                                { text: "A web site that searches anything", correct: true },
                                { text: "A program that searches engines" }
                            ]
                        },
                        {
                            text:
                            "What does the .com domain represents?",
                            responses: [
                                { text: "Network" },
                                { text: "Education" },
                                { text: "Commercial", correct: true },
                                { text: "None of the above" }
                            ]
                        },
                        {
                            text: "In Satellite based communication, VSAT stands for? ",
                            responses: [
                                { text: " Very Small Aperture Terminal", correct: true },
                                { text: "Varying Size Aperture Terminal " },
                                {
                                    text: "Very Small Analog Terminal"
                                },
                                { text: "None of the above" }
                            ]
                        },
                        {
                            text: "What is the full form of TCP/IP? ",
                            responses: [
                                { text: "Telephone call protocol / international protocol" },
                                { text: "Transmission control protocol / internet protocol", correct: true },
                                { text: "Transport control protocol / internet protocol " },
                                { text: "None of the above" }
                            ]
                        },
                        {
                            text:
                            "What is the full form of HTML?",
                            responses: [
                                {
                                    text: "Hyper text marking language"
                                },
                                { text: "Hyphenation text markup language " },
                                { text: "Hyper text markup language", correct: true },
                                { text: "Hyphenation test marking language" }
                            ]
                        },
                        {
                            text: "\"Yahoo\", \"Infoseek\" and \"Lycos\" are _________?",
                            responses: [
                                { text: "Browsers " },
                                { text: "Search Engines", correct: true },
                                { text: "News Group" },
                                { text: "None of the above" }
                            ]
                        }
                    ]
                },

            }
        },
        components: {
            Response,
            Success,
            Failure,
            Start
        },
        methods: {
            restart: function(){
                this.questionIndex=0;
                this.userResponses=Array(this.quiz.questions.length).fill(null);
            },
            selectOption: function(index) {
                if (this.userResponses[this.questionIndex] !== null) {
                    return
                }
                Vue.set(this.userResponses, this.questionIndex, index);
            },
            next: function() {
                if (this.questionIndex < this.quiz.questions.length)
                    this.questionIndex++;
                if (this.questionIndex >= this.quiz.questions.length) {
                    const score = this.score()
                    console.log(score, '********')
                    this.questionIndex++
                    console.log(this.questionIndex, 'question idn')
                    console.log(this.quiz.questions.length, '&&&')
                    return score
                }
            },
            score: function() {
                var score = 0;
                for (let i = 0; i < this.userResponses.length; i++) {
                    if (
                        typeof this.quiz.questions[i].responses[
                            this.userResponses[i]
                        ] !== "undefined" &&
                        this.quiz.questions[i].responses[this.userResponses[i]].correct
                    ) {
                        score = score + 1;
                    }
                }
                return score;
            },
            afterSelectClass: function(index) {

                const responses = this.quiz.questions[this.questionIndex].responses
                const userResponses = this.userResponses
                const questionIndex = this.questionIndex
                const correctResponse = responses.filter((r) => r.correct)[0]

                if (responses[userResponses[questionIndex]] &&
                    !responses[userResponses[questionIndex]].correct
                    && index == userResponses[questionIndex]) {
                    return 'bg-red white'
                } else if (index == responses.indexOf(correctResponse) && userResponses[questionIndex] !== null) {
                    return 'bg-green white'
                }
                else {
                    return ''
                }
            },
            startQuiz: function() {
                this.isActive  = true
            }
        },
        filters: {
            charIndex: function(i) {
                return String.fromCharCode(97 + i);
            }
        }
    }
</script>
