<template>
<div>
    <div class="container">
        <h1> {{ cat.name }} </h1>
        <p>{{ cat.description }}</p>
         <get-cat-image style="max-width:40rem" :breedId="cat.id"></get-cat-image>

        <b-button variant="info" v-on:click="reload()">Randomize</b-button>

    </div>
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

<style lang="scss" scoped>

.container {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    padding-top: 120px;
    align-content: center;
    width: 100%;

}

h1 {
    font-family: 'Rubik', sans-serif;

}

button{
    margin: 50px 0px ;
    width: 150px;
}
</style>
