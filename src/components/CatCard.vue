<template>
  <div class="cat-card">
    <b-col>
      <router-link :to="`/detailpage/${breedId}`">
        <b-card style="max-width:20rem" class="mb-2">
          <img
            :src="image"
            style="max-width:20rem"
            img-alt="cat"
            img-top
            tag="article"
          />
          <b-card-text>
            <h2>{{ title }}</h2>
          </b-card-text>
          <b-button v-on:click="scrollToTop()" variant="outline-info">
            <router-link :to="`/detailpage/${breedId}`">Learn more</router-link>
          </b-button>
          <b-card-footer>
            <p>{{ temperament }}</p>
          </b-card-footer>
        </b-card>
      </router-link>
    </b-col>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },

  props: {
    title: String,
    summary: String,
    breedId: String
  },

  data(): { image: string; temperament: string } {
    return {
      image: "",
      temperament: ""
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
        this.image = response.data[0].url;
        this.temperament = response.data[0].breeds[0].temperament
          .split(",", 3)
          .join(", ");
      })
      .catch(error => console.log(error));
  }
});
</script>

<style lang="scss" scoped>
.cat-card {
  text-decoration: none;
  border-radius: 20px;
  background: transparent;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  padding: 20px;
  margin: 30px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    text-decoration: none;
  }
}

h2 {
  font-family: "Rubik", sans-serif;
  text-decoration: none;
  color: #b83b5e;
  margin-bottom: 30px;
  margin-top: 10px;
  font-size: 25px;
}

.cat-card img {
  width: 100%;
  max-height: 200px;
  height: 200px;
  object-fit: cover;
  object-position: 50% 50%;
}

b-button {
  background: #b83b5e;
}

.btn-outline-info {
  background: #f08a5d;
  margin-bottom: 10px;
  border: none;
  padding: 12px;
  font-weight: 600;
}

.btn-outline-info a {
  color: #eeecda;
  text-decoration: none;
}

.card-footer {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  font-family: "Rubik", sans-serif;
  color: black;
  opacity: 0.5;
  font-size: 13px;
}
</style>
