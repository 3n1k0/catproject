<template>
<b-container>
    <b-form-select v-model="selectedSortingMethod" :options="sortingOptions" id="dropdown-1" text="Sorting" class="m-md-2">
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
}

export default {
    name: "home",
    components: {
        "cat-card": CatCard
    },

    computed: {
        cats() {
            if (this.selectedSortingMethod === 'A-Z') {
                return this.$store.state.cats.slice(0, 11)
            } else {
                const sortedCats = this.$store.state.cats.slice().sort((aCat: Cat, bCat: Cat) => {
                    return aCat.name > bCat.name ? -1 : 1;
                });

                return sortedCats.slice(0, 11)
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
            selectedSortingMethod: "A-Z"
        }
    }
};
</script>
