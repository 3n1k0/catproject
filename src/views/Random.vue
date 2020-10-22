<template>
<div>
    <b-container>
        <h1> {{ cat.name }} </h1>
        <p>{{ cat.description }}</p>
         <get-cat-image :breedId="cat.id"></get-cat-image>

        <b-button v-on:click="reload()">Randomize</b-button>

    </b-container>
</div>
</template>

<script>
import {
    useRoute
} from "vue-router";
import axios from "axios";
import GetCatImage from '@/components/GetCatImage'





export default {
    components: {
        "get-cat-image": GetCatImage
    },
    computed: {
        cat() {
            return this.$store.state.cats[Math.floor(Math.random() * this.$store.state.cats.length)]                
        }
    },

    methods: {
        reload() {
            location.reload();
        }
    }
}
</script>

<style lang="scss" scoped></style>
