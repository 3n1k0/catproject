<template>
  <vue-load-image>
    <img
      slot="image"
      :src="url"
      style="max-width:20rem"
      img-alt="cat"
      img-top
      tag="article"
    />
    <img slot="preloader" src="./image-loader.gif" />
    <div slot="error">error message</div>
  </vue-load-image>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import VueLoadImage from 'vue-load-image';

export default Vue.extend({

  components: {
    'vue-load-image': VueLoadImage
  },
  
  props: {
    breedId: String,
  },

  data(): {
    url: string;
  } {
    return {
      url: "",
    };
  },

  mounted() {
    const headers = {
      "x-rapidapi-key": process.env.API_KEY,
    };
    const breedIdParam = "breed_id";
    axios
      .get("https://api.thecatapi.com/v1/images/search", {
        headers,
        params: {
          [breedIdParam]: this.breedId,
        },
      })
      .then((response) => {
        this.url = response.data[0].url;
      })
      .catch((error) => console.log(error));
  },
  watch: {
    breedId() {
      const headers = {
         "x-rapidapi-key": process.env.API_KEY,
      };
      const breedIdParam = "breed_id";
      axios
        .get("https://api.thecatapi.com/v1/images/search", {
          headers,
          params: {
            [breedIdParam]: this.breedId,
          },
        })
        .then((response) => {
          this.url = response.data[0].url;
        })
        .catch((error) => console.log(error));
    },
  },
});
</script>

<style lang="scss" scoped></style>
