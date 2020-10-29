<template>
  <div>
    <div class="container">
      <h1 >{{ cat.name }}</h1>
      <p>{{ cat.description }}</p>
      <h3>
        <router-link
          :to="`/detailpage/${cat.id}`"
          rel="noopener noreferrer"
          ><i class="fas fa-book-open"></i> Read more about the
          {{ cat.name }}</router-link
        >
      </h3>
      <get-cat-image :breedId=cat.id></get-cat-image>
      <button variant="info"  @click="updateRandomCat()" >Randomize</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetCatImage from "@/components/GetCatImage.vue";
import { component } from 'vue/types/umd';
import { Cat } from '@/components/types'

export default Vue.extend({
  
  data(){
    return {
      randomCat: Math.floor(Math.random() * this.$store.state.cats.length)
    }
  },

  components: {
    "get-cat-image": GetCatImage

  },

  methods: {
    updateRandomCat(){
      this.randomCat = Math.floor(Math.random() * this.$store.state.cats.length);
    }
  },

  computed: {
    cat(): Cat {
      return this.$store.state.cats[
        this.randomCat
      ]; 
    }
  },
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

</style>
