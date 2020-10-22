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
body {
  overscroll-behavior-y: none;
  background: #eeecda;
  
}
*{


  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Karla', sans-serif;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


  a:hover{
text-decoration: none;
  }


#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #edc988;
}

.bg-info{
  background: #6a2c70!important;
  opacity: 0.9;
}
</style>
