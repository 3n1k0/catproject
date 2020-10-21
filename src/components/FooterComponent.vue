<template>
<footer>
    <ul>
        <li v-for="cat in cats" :key="cat.name">
            <router-link :to="`detailpage/${cat.breedId}`">{{cat.name}}</router-link>
        </li>
    </ul>
</footer>
</template>

<script>
export default {

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
    align-content: center;
    color: white;

}
</style>
