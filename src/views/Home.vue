<template>
  <div class="home-container">
    <div class="form-container">
      <label for="Sorting">Sort by:</label>
      <select
        v-model="selectedSortingMethod"
        :options="sortingOptions"
        name="Sorting"
        id="Sorting"
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <label for="Sorting">Categories:</label>
      <select
        v-model="selectedCategory"
        :options="categories"
        name="category"
        id="category"
      >
        <option value="dog_friendly">Least dog friendly</option>
        <option value="intelligent">Not too smart but sweet</option>
        <option value="affection_level">Most independent</option>
        <option value="indoor">Best for indoors</option>
        <option value="energy_level">Laziest cats</option>
        <option value="indoor">Best for indoors</option>
      </select>
    </div>

    <div class="card-container">
      <cat-card
        v-for="cat in cats"
        :key="cat.name"
        :title="cat.name"
        :description="cat.description"
        :breedId="cat.id"
      ></cat-card>
    </div>
  </div>
</template>

<script lang="ts">
import CatCard from "@/components/CatCard.vue";
import Vue from "vue";
import { Cat } from "@/common/types";

export default Vue.extend({
  name: "home",

  components: {
    "cat-card": CatCard,
  },
  computed: {
    cats(): Array<Cat> {
      let catArray: Array<Cat> = this.$store.state.cats;

      switch (this.selectedCategory) {
        case "intelligence":
          catArray = catArray.filter(
            (cat: Cat): boolean => cat.intelligence === 3
          );
          break;

        case "dog_friendly":
          catArray = catArray.filter(
            (cat: Cat): boolean => cat.dog_friendly === 2
          );
          break;

        case "affection_level":
          catArray = catArray.filter(
            (cat: Cat): boolean => cat.affection_level === 3
          );
          break;

        case "indoor":
          catArray = catArray.filter((cat: Cat): boolean => !cat.indoor);
          break;

        case "energy_level":
          catArray = catArray.filter(
            (cat: Cat): boolean => cat.energy_level === 1
          );
          break;
      }


      if (this.selectedSortingMethod === "Z-A") {
        catArray = catArray
          .slice()
          .sort((aCat: Cat, bCat: Cat) => (aCat.name > bCat.name ? -1 : 1));
      }

      return catArray.slice(0, 10);
    },
  },

  data(): {
    selectedCategory: string;
    selectedSortingMethod: string;
    categories: string;
    sortingOptions: string;
  } {
    return {
      selectedSortingMethod: "A-Z",
      selectedCategory: "indoor",
      categories: "",
      sortingOptions: "",
    };
  },
});
</script>

<style>
.form-container {
  display: grid;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  margin-top: 90px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 370px));
  padding: 20px 80px;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
}

select {
  font-size: 16px;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 2.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  outline: none;
  max-width: 250px;
  margin: 10px;
}

select:hover {
  border-color: #888;
}

select:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
</style>
