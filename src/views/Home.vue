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
  name: "home",
  components: {
    "cat-card": CatCard,
  },
  computed: {
    cats(): Array<Cat> {
      let catArray: Array<Cat> = this.$store.state.cats;

      if (this.selectedCategory === "intelligent") {
        catArray = catArray.filter((cat: Cat): boolean => {
          return cat.intelligence === 3;
        });
      } else if (this.selectedCategory === "dog_friendly") {
        catArray = catArray.filter((cat: Cat): boolean => {
          return cat.dog_friendly === 2;
        });
      } else if (this.selectedCategory === "affection_level") {
        catArray = catArray.filter((cat: Cat): boolean => {
          return cat.affection_level === 3;
        });
      } else if (this.selectedCategory === "indoor") {
        catArray = catArray.filter((cat: Cat): boolean => {
          return !cat.indoor;
        });
      } else if (this.selectedCategory === "energy_level") {
        catArray = catArray.filter((cat: Cat): boolean => {
          return cat.energy_level === 1;
        });
      }

      if (this.selectedSortingMethod === "Z-A") {
        catArray = catArray.slice().sort((aCat: Cat, bCat: Cat) => {
          return aCat.name > bCat.name ? -1 : 1;
        });
      }

      return catArray.slice(0, 10);
    },
  },

  data(): {
    selectedCategory: string;
    selectedSortingMethod: string;
  } {
    return {
      selectedSortingMethod: "A-Z",
      selectedCategory: "",
    };
  },
});
</script>

<style>
.form-container {
  display: grid;
  grid-column: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-top: 70px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 370px));
  padding: 80px;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
}
</style>
