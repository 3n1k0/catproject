<template>
  <div>
    <div class="container">
      <div class="color_container">
        <h1>{{ cat.name }}</h1>
        <p>{{ cat.description }}</p>

        <h3>
          <router-link :to="`/detailpage/${cat.id}`" rel="noopener noreferrer"
            ><i class="fas fa-book-open"></i>
            <u>Read more about the {{ cat.name }}</u></router-link
          >
        </h3>
        <get-cat-image :breedId="cat.id"></get-cat-image>

        <h2>What is this cat like?</h2>
        <p>{{ cat.temperament }}</p>

        <h3>Not a good match?</h3>
        <button @click="updateRandomCat(), scrollToTop()">
          show me another cat <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetCatImage from "@/components/GetCatImage.vue";
import { component } from "vue/types/umd";
import { Cat } from "@/components/types";

export default Vue.extend({
  data() {
    return {
      randomCat: Math.floor(Math.random() * this.$store.state.cats.length),
    };
  },

  components: {
    "get-cat-image": GetCatImage,
  },

  methods: {
    updateRandomCat() {
      this.randomCat = Math.floor(
        Math.random() * this.$store.state.cats.length
      );
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  computed: {
    cat(): Cat {
      return this.$store.state.cats[this.randomCat];
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding-top: 150px;
  align-content: center;
  width: 100%;
}

h1 {
  font-family: "Rubik", sans-serif;
}

h3 {
  font-family: "Rubik" sans-serif;
  font-style: italic;
  font-weight: 600;
  color: #b83b5e;
  padding: 20px;
  font-size: 25px;
}

a {
  color: #b83b5e;
}

::v-deep .cat-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: 50% 20%;
  padding-bottom: 30px;
}

.color_container {
  width: 100%;
  background-color: #a48f4df9;
  padding: 40px;
  height: 100%;
  position: relative;
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
}

button {
  background: #b83b5e;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  padding: 12px;
  font-weight: 600;
  color: #eeecda;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  text-transform: uppercase;
  border: 2px solid #71253aa1;
  outline: none;
  width: 270px;
  height: 70px;
}

button a {
  color: #eeecda;
  text-decoration: none;
}

@media only screen and (min-width: 1200px) {
  .color_container {
    width: 60%;
    padding: 50px 100px;
  }

  h2 {
    padding-bottom: 20px;
  }

  button {
    width: 300px;
    height: 80px;
  }
}
</style>
