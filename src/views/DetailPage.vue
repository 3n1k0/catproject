<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <img
      :src="url"
      style="max-width:20rem"
      img-alt="cat"
      img-top
      tag="article"
    />

  </div>
</template>

<script>
import { useRoute } from "vue-router";

import axios from "axios";

export default {
  data() {
    return {
      name: "",
      description: "",
       url: ""
    };
  },

  props: ["breedId"],

  mounted() {
    const headers = {
      "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
    };
    axios
      .get("https://api.thecatapi.com/v1/images/search", {
        headers,
        params: {
          "breed_id": this.breedId
        }
      })
      .then(response => {
        const breed = response.data[0].breeds[0];
        this.name = breed.name;
        this.description = breed.description;
     
      })
      .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped></style>
