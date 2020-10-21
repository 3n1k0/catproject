<template>
<b-container>
    <b-form-select v-model="selectedSortingMethod" :options="sortingOptions" v-on:change="onSortingChanged" id="dropdown-1" text="Sorting" class="m-md-2">
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

const getCats = async function () {
    const headers = {
        "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
    };
    const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
        headers
    });
    return response.data.slice(0, 10);
};

export default {
    name: "home",
    components: {
        "cat-card": CatCard
    },

    data() {
        return {
            cats: [],

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
    },
    methods: {
        async onSortingChanged() {
            if (this.selectedSortingMethod === "A-Z") {
                this.cats = await getCats(true);
            } else {
                const cats = await getCats(false);

                const sortedCats = cats.sort((aCat: Cat, bCat: Cat) => {
                    return aCat.name > bCat.name ? -1 : 1;
                });

                this.cats = sortedCats;
            }
        },
    },
    async mounted() {
        this.cats = await getCats();
    }
};
</script>
