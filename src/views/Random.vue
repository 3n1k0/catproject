<template>
<div>
    <h1>{{ cats }}</h1>

console.log($store.state.cats)
    <b-button>Randomize</b-button>
</div>
</template>

<script>
import {
    useRoute
} from "vue-router";
import axios from "axios";

export default {

    data() {
        return {
            name: "",
            description: "",
            url: ""
        };
    },

    props: ["breedId"]
}
</script>

<style lang="scss" scoped></style>
