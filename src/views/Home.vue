<template>
  <b-container>
    <b-row align-v="center">
      <div v-for="cat in cats" :key="cat.name">
        <cat-card
          :title="cat.name"
          :description="cat.description"
          :breedId="cat.id"
        ></cat-card>
      </div>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import CatCard from "@/components/CatCard.vue";
import axios from "axios";


const getCats = async function() {
  const headers = {
    "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
  };
  const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
    headers
  });
  return response.data.slice(0, 10);
};



export default {
  name: "home",
  components: {
    "cat-card": CatCard
  },

  data() {
    return {
      cats: []
}
},

  async mounted() {
    this.cats = await getCats();
  }
};
</script>

  