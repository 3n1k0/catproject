<template>
<div class="hello">
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Catcyclopedia</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/">Home</router-link> 
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/random">Random</router-link>
                    </b-nav-item>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</div>
</template>

<script lang="ts">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
