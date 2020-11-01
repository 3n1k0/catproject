<template>
  <footer>
    <p>Sitemap</p>
    <ul>
      <li>
        <router-link to="/"><u>Home</u></router-link>
      </li>
      <li v-for="cat in cats" :key="cat.name">
        <router-link :to="`/detailpage/${cat.id}`">{{ cat.name }}</router-link>
      </li>
      <li>
        <router-link to="/random"><u>Random</u></router-link>
      </li>
    </ul>
    <p>Designed and coded with ❤︎ by Enikő.</p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    breedId: String
  },

  computed: {
    cats() {
      return this.$store.state.cats.slice(0, 11);
    }
  }
});
</script>

<style lang="scss" scoped>
footer {
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  align-content: space-around;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
}

footer p {
  color: #eeecda;
  opacity: 0.2;
  font-size: 15px;
  font-family: "Rubik", sans-serif;
  margin-bottom: 0;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
}

ul {
  display: grid;
}

li a {
  color: #eeecda;
}
</style>
