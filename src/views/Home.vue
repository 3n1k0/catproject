<template>
<b-container fluid>
    <form-container>
        <p>Sort by:</p>
        
        <b-form-select v-model="selectedSortingMethod" :options="sortingOptions" id="dropdown-1" text="Sorting" class="m-md-2">
        </b-form-select>
        <p> Categories:</p>
        <b-form-select v-model="selectedCategory" :options="categories" id="dropdown-2" text="Categories" class="m-md-2">
        </b-form-select>
    </form-container>

    <b-row align-v="center" align-h="center">

        <div v-for="cat in cats" :key="cat.name">
            <cat-card :title="cat.name" :description="cat.description" :breedId="cat.id"></cat-card>
        </div>

    </b-row>
</b-container>
</template>

<script lang="ts">
import CatCard from "@/components/CatCard.vue";
import axios from "axios";

interface Cat {
    name: string;
    id: string;
    dog_friendly: number;
    intelligence: number;
    affection_level: number;
    indoor: boolean;
    energy_level: number;
}

export default {
    name: "home",
    components: {
        "cat-card": CatCard
    },

    computed: {

        cats() {

            let catArray = this.$store.state.cats;

            if (this.selectedCategory === 'intelligent') {
                catArray = catArray.filter((cat: Cat) => {
                    return cat.intelligence === 3;
                })

            } else if (this.selectedCategory === 'dog_friendly') {
                catArray = catArray.filter((cat: Cat) => {
                    return cat.dog_friendly === 2;
                })
            } else if (this.selectedCategory === 'affection_level') {
                catArray = catArray.filter((cat: Cat) => {
                    return cat.affection_level === 3;
                })
            } else if (this.selectedCategory === 'indoor') {
                catArray = catArray.filter((cat: Cat) => {
                    return !cat.indoor;
                })
            } else if (this.selectedCategory === 'energy_level') {
                catArray = catArray.filter((cat: Cat) => {
                    return cat.energy_level === 1;
                })
            }

            if (this.selectedSortingMethod === 'Z-A') {
                catArray = catArray.slice().sort((aCat: Cat, bCat: Cat) => {
                    return aCat.name > bCat.name ? -1 : 1;
                });
            }

            return catArray.slice(0, 10);
        }
    },

    data() {
        return {
            sortingOptions: [{
                    value: "A-Z",
                    text: "A-Z"
                },
                {
                    value: "Z-A",
                    text: "Z-A"
                }
            ],
            selectedSortingMethod: "A-Z",
            categories: [{
                    value: "dog_friendly",
                    text: "Most dog friendly"
                },
                {
                    value: "intelligent",
                    text: "Most intelligent"
                },
                {
                    value: "affection_level",
                    text: "Most loving"
                },
                {
                    value: 'indoor',
                    text: "Best for indoors"
                },
                {
                    value: 'energy_level',
                    text: "Most active"
                },
                {
                    value: '',
                    text: "Please select a category"
                },

            ],
            selectedCategory: ''
        }
    }
};
</script>

<style>
.m-md-2 {
    width: 300px;
}

form-container {
    display: grid;
    grid-column: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin-top: 70px;
}
</style>
