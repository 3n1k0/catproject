<template>
<div>
    <h1>{{ cat.name }}</h1>

    <p>{{ cat.description }}</p>
    <get-cat-image :breedId="cat.id"></get-cat-image>
    <p><i class="fas fa-plug"></i>Energy level: {{ cat.energy_level }}/5</p>
    <p><i class="fas fa-glasses"></i>Intelligence: {{ cat.intelligence }}/5</p>
    <p><i class="fas fa-heart"></i>Affection level: {{ cat.affection }}/5</p>
    <p><i class="fas fa-dog"></i>Dog friendly: {{ cat.dog_friendly }}/5</p>
    <p><i class="fas fa-vial"></i>Experimental: {{ cat.experimental }}/5</p>
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

    data() {
        return {
            name: "",
            description: ""
        };
    },

    computed: {
        cat() {
            return this.$store.state.cats.find((cat) => {
                return cat.id === this.breedId
            })
        }
    },

    props: ["breedId"],

};
</script>

<style lang="scss" scoped></style>
