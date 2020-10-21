<template>
<div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <img :src="url" style="max-width:20rem" img-alt="cat" img-top tag="article" />
    <p><i class="fas fa-plug"></i>Energy level: {{ energy }}/5</p>
    <p><i class="fas fa-glasses"></i>Intelligence: {{ intelligence }}/5</p>
    <p><i class="fas fa-heart"></i>Affection level: {{ affection }}/5</p>
    <p><i class="fas fa-dog"></i>Dog friendly: {{ affection }}/5</p>
    <p><i class="fas fa-vial"></i>Experimental: {{ affection }}/5</p>
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

    props: ["breedId"],

    mounted() {
        const headers = {
            "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
        };
        axios
            .get("https://api.thecatapi.com/v1/images/search", {
                headers,
                params: {
                    "breed_id": this.breedId
                }
            })
            .then(response => {
                const breed = response.data[0].breeds[0];
                this.name = breed.name;
                this.description = breed.description;
                this.energy = breed.energy_level;
                this.affection = breed.affection_level;
                this.intelligence = breed.intelligence;
                this.dogfriendly = breed.dog_friendly;
                this.experimental = breed.experimental;
                this.url = response.data[0].url;
            })
            .catch(error => console.log(error));
    }
};
</script>

<style lang="scss" scoped></style>
