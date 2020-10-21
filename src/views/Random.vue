<template>
<div>
    <b-container>
        <h1> {{ randomName }} </h1>

        <b-button>Randomize</b-button>
    </b-container>
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
            randomName: "",
            
        };
    },

    beforeMount() {
        const headers = {
            "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
        };
        axios
            .get("https://api.thecatapi.com/v1/breeds", {
                headers,

            })
            .then(response => {

                 this.randomName = response.data[Math.floor(Math.random() * 67)].name;
             
            })
            .catch(error => console.log(error));
    }

}
</script>

<style lang="scss" scoped></style>
