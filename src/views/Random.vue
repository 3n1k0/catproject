<template>
  <div>
    <div class="container">
      <h1>{{ cat.name }}</h1>
      <p>{{ cat.description }}</p>
      <h3>
        <router-link
          :to="`/detailpage/${cat.id}`"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fas fa-book-open"></i> Read more about the
          {{ cat.name }}</router-link
        >
      </h3>
      <get-cat-image :breedId="cat.id"></get-cat-image>
      <b-button variant="info" v-on:click="reload()">Randomize</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetCatImage from "@/components/GetCatImage.vue";

export interface Cat {
  name: string;
  id: string;
  dog_friendly: number;
  intelligence: number;
  affection_level: number;
  indoor: boolean;
  energy_level: number;
}

export default Vue.extend({
  components: {
    "get-cat-image": GetCatImage
  },
  computed: {
    cat(): Cat {
      return this.$store.state.cats[
        Math.floor(Math.random() * this.$store.state.cats.length)
      ];
    }
  },
  methods: {
    reload() {
      location.reload();
    }
  }
});
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
  font-family: "Rubik", sans-serif;
}

h3 {
  font-family: "Rubik" sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
  color: #b83b5e;
  padding: 20px;
}

a {
  color: #b83b5e;
}

button {
  margin: 50px 0px;
  width: 150px;
}
</style>
