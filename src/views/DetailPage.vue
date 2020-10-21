<template>
<div>
    <h1>{{ cat.name }}</h1>

    <p>{{ cat.description }}</p>
    <img :src="url" style="max-width:20rem" img-alt="cat" img-top tag="article" />
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

export default {

    data() {
        return {
            name: "",
            description: "",
            url: ""
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

    watch: {
        breedId() {
            const headers = {
                "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
            };
            axios
                .get("https://api.thecatapi.com/v1/images/search", {
                    headers,
                    params: {
                        "id": this.breedId
                    }
                })
                .then(response => {
                    const breed = response.data[0].breeds[0];
                    this.url = response.data[0].url;
                })
                .catch(error => console.log(error));
        }
    },

    mounted() {
        const headers = {
            "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
        };
        axios
            .get("https://api.thecatapi.com/v1/images/search", {
                headers,
                params: {
                    "id": this.breedId
                }
            })
            .then(response => {
                const breed = response.data[0].breeds[0];
                this.url = response.data[0].url;
            })
            .catch(error => console.log(error));
    }

};
</script>

<style lang="scss" scoped></style>
