<template>
    <div class="col-lg-12">
        <div class="br-10 overflow-hidden border">
            <div class="bg-gradient-dpink px-md-5 px-4 py-5 position-relative"
                 style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                <div class="row no-gutters align-items-center white">
                    <div class="border round border-white all-center s-100x100">
                        <img src="https://minio.codingblocks.com/amoeba/e2c13faa-f538-48d4-8ca1-88728a07c51a.svg">
                    </div>
                    <div class="flex-1 pl-4">
                        <div style="font-size: 2rem;">Skill Assessment Test</div>
                        <div class="mt-1 bold" style="font-size: 2rem;">Frontend Development</div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-md-5 p-4">
                <div class="font-md bold">
                    Are you a beginner or expert? Are you eligible for this course?
                </div>
                <div class="font-md mt-1">Find out by answering 10 MCQ questions!</div>
                <div class="my-5 pt-2 font-mds">WHAT TO KNOW BEFORE YOU BEGIN:</div>
                <div class="row pb-5 border-bottom mb-5">
                    <div class="col-sm-4 mb-sm-0 mb-4">
                        <div class="font-mds bold mb-3 v-align-ma">
                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/clock-small.svg" class="mr-2">
                            <span>Timed</span>
                        </div>
                        <div class="font-sm med-grey">
                            The questions are timed, you will get 30 seconds for one question.
                        </div>
                    </div>
                    <div class="col-sm-4 mb-sm-0 mb-4">
                        <div class="font-mds bold mb-3 v-align-ma">
                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/files-small.svg" class="mr-2">
                            <span>Questions</span>
                        </div>
                        <div class="font-sm med-grey">
                            There will be 10 skill based MCQ questions.
                        </div>
                    </div>
                    <div class="col-sm-4 mb-sm-0 mb-4">
                        <div class="font-mds bold mb-3 v-align-ma">
                            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/repeat-small.svg" class="mr-2">
                            <span>Retake</span>
                        </div>
                        <div class="font-sm med-grey">
                            Not happy with the results? Retake to improve your scores.
                        </div>
                    </div>
                </div>
                <div class="t-align-c">
                    <button class="button-solid button-orange" v-on:click="$emit('click')">Start the assessment</button>
                </div>
            </div>
        </div>
    </div>
</template>
