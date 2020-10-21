<template>
<div>
    <b-col>
        <b-card style="max-width:20rem" class="mb-2">
            <img :src="image" style="max-width:20rem" img-alt="cat" img-top tag="article" />
            <b-card-text>
                <h2>{{ title }}</h2>
            </b-card-text>
            <b-button variant="info"><router-link :to="`detailpage/${breedId}`">Learn more about this cat</router-link></b-button>
            <b-card-footer>
                <p>{{ temperament }}</p>
            </b-card-footer>
        </b-card>
    </b-col>
</div>
</template>

<script>
import axios from "axios";

export default {
    props: {
        title: String,
        summary: String,
        breedId: String

    },

    data() {
        return {
            image: "",
            temperament: ""
        };
    },

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
                this.image = response.data[0].url; 
                this.temperament = response.data[0].breeds[0].temperament.split(',', 3).join("  ")
           
            

            })
            .catch(error => console.log(error));
    }

}
</script>

<style lang="scss" scoped></style>
