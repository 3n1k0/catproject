<template>
  <img  :src="url" style="max-width:20rem" img-alt="cat" img-top tag="article" />
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  props: {
    breedId: String
  },

  data(): {
    url: string;
  } {
    return {
      url: ""
    };
  },


  mounted() {
    const headers = {
      "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
    };
    const breedIdParam = "breed_id";
    axios
      .get("https://api.thecatapi.com/v1/images/search", {
        headers,
        params: {
          [breedIdParam]: this.breedId
        }
      })
      .then(response => {
        this.url = response.data[0].url;
      })
      .catch(error => console.log(error));
  },
  watch: {
    breedId() {
      const headers = {
        "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
      };
      const breedIdParam = "breed_id";
      axios
        .get("https://api.thecatapi.com/v1/images/search", {
          headers,
          params: {
            [breedIdParam]: this.breedId
          }
        })
        .then(response => {
          this.url = response.data[0].url;
        })
        .catch(error => console.log(error));
    }
  }
});
</script>

<style lang="scss" scoped></style>
