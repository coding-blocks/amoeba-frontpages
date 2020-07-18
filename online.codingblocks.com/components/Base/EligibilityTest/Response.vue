<template>
        <div
            class="border-card py-3 px-4 mb-4 hover-grey pointer row no-gutters align-items-center justify-content-between"
            v-on:click="$emit('click')"
            >
            <div class="font-md flex-1 pr-4">
                {{ index | charIndex}}. {{ response.text }}
            </div>
        </div>
</template>
<script>
    export default {
        name: 'Response',
        props: {
            response: Object,
            index: Number
        },
        filters: {
            charIndex: function(i) {
                return String.fromCharCode(97 + i);
            }
        }
    }
</script>
