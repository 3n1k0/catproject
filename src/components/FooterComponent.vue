<template>
<footer>
    
    <ul>
        <li v-for="cat in cats" :key="cat.name">
            <router-link :to="`/detailpage/${cat.id}`">{{cat.name}}</router-link>
        </li>
    </ul>
    <p>Designed and coded with ❤︎ by Enikő.</p>
</footer>
</template>

<script>
import axios from "axios";

export default {
    props: {
        breedId: String

    },

    computed: {
        cats() {
            return this.$store.state.cats.slice(0, 11)
        }
    },
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
footer {
    height: 250px;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    align-content: space-around;
  

}

footer p {

     color: #eeecda;
     opacity: 0.2;
     position: relative;
     bottom: 5px;
       font-size: 18px;
       font-family: 'Rubik', sans-serif;
}

ul {
    display: flex; 
    flex-flow: column wrap;
    height: 100px;
    
}

li a {
    color: #eeecda;
}
</style>

