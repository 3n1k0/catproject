<template>
<img :src="url" style="max-width:20rem" img-alt="cat" img-top tag="article" />
</template>

<script>
import {
    useRoute
} from "vue-router";
import axios from "axios";

export default {
    props: {
        breedId: String
    },

    data() {
        return {
            url: ''
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
    },
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
    }

}
</script>

<style lang="scss" scoped>

</style>
