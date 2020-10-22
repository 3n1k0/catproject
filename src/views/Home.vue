<template>
<b-container>
    <b-form-select v-model="selectedSortingMethod" :options="sortingOptions" id="dropdown-1" text="Sorting" class="m-md-2">
    </b-form-select>

    <b-form-select v-model="selectedCategory" :options="categories" id="dropdown-2" text="Categories" class="m-md-2">

    </b-form-select>

    <b-row align-v="center">
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

            const catArray = this.$store.state.cats;
            console.log(catArray)

            if (this.selectedCategory === 'intelligent') {
                return catArray.filter((cat: Cat) => {
                    return cat.intelligence === 5;
                })

            } else if (this.selectedCategory === 'dog_friendly') {
                return catArray.filter((cat: Cat) => {
                    return cat.dog_friendly === 5;

                })
            } else if (this.selectedCategory === 'affection_level') {
                return catArray.filter((cat: Cat) => {
                    return cat.affection_level === 5;

                })
            } else if (this.selectedCategory === 'indoor') {
                return catArray.filter((cat: Cat) => {
                    return !cat.indoor;

                })

            } else if (this.selectedCategory === 'energy_level') {
                return catArray.filter((cat: Cat) => {
                    return cat.energy_level;

                })
            }

            if (this.selectedSortingMethod === 'A-Z') {
                return catArray.slice(0, 11)
            } else {
                const sortedCats = catArray.slice().sort((aCat: Cat, bCat: Cat) => {
                    return aCat.name > bCat.name ? -1 : 1;
                });

                return sortedCats.slice(0, 11);
            }

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
                    text: "helloooo"
                },

            ],
            selectedCategory: ''
        }
    }
};
</script>
