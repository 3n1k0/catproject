<template>
  <div id="app">
    <div id="nav">
      <top-header> </top-header>
    </div>
    <router-view />
    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from './store'
import TopHeader from "@/components/TopHeader.vue";
import FooterComponent from "@/components/FooterComponent.vue";

@Component({
  components: {
    "top-header": TopHeader,
    "footer-component": FooterComponent
  },
  async mounted() {
    this.$store.dispatch('loadCats');
  }
})
export default class Home extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
