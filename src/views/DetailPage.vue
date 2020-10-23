<template>
<b-container class="container">

    <h1>{{ cat.name }}</h1>

    <p>{{ cat.description }}</p>
    <get-cat-image :breedId="cat.id"></get-cat-image>
    <p><i class="fas fa-plug"></i>Energy level: {{ cat.energy_level }}/5</p>
    <p v-if="cat.alt_names"><i class="fas fa-plug"></i>Other names: {{ cat.alt_names }}</p>
    <p><i class="fas fa-glasses"></i>Intelligence: {{ cat.intelligence }}/5</p>
    <p><i class="fas fa-heart"></i>Affection level: {{ cat.affection_level }}/5</p>
    <p><i class="fas fa-dog"></i>Dog friendly: {{ cat.dog_friendly }}/5</p>
    <p><i class="fas fa-vial"></i>Experimental: {{ cat.experimental }}/5</p>
    <p><i class="fas fa-vial"></i>Origin: {{ cat.origin }}/ {{cat.country_code}}</p>
    <p><i class="fas fa-vial"></i>Lifespan: {{ cat.life_span }} years</p>
    <p><i class="fas fa-vial"></i>Child friendly: {{ cat.child_friendly }} years</p>
    <p><i class="fas fa-vial"></i>temperament: {{ cat.temperament }}</p>
    <p><i class="fas fa-vial"></i>Suitable for indoors: {{ indoor }}</p>
    <p><i class="fas fa-vial"></i>Adaptibility: {{ cat.adaptability }}</p>
    <p><i class="fas fa-vial"></i>Shedding level: {{ cat.shedding_level }}</p>
    <p v-if="pet"><i class="fas fa-vial"></i>Loves to be petted: {{ pet }}</p>
    <p v-if="pet"><i class="fas fa-vial"></i>Social needs: {{ cat.social_needs }}</p>
    <p v-if="pet"><i class="fas fa-vial"></i>Stranger friendly: {{ cat.stranger_friendly }}</p>

    <h1>Cats just as smart as the {{cat.name}}:</h1>

    <div class="recommended">
        <b-row align-v="center" align-h="center">
            <div class='recommended-card' v-for="cat in smartCats" :key="cat.name">
                <cat-card :title="cat.name" :description="cat.description" :breedId="cat.id"></cat-card>
            </div>
        </b-row>
    </div>

    <h1>Cats just as loving as the {{cat.name}}</h1>

    <div class="recommended">
        <b-row class="row" align-v="center" align-h="center">
           
            <div div class='recommended-card' v-for="cat in lovingCats" :key="cat.name">
            
                <cat-card :title="cat.name" :description="cat.description" :breedId="cat.id"></cat-card>
            
                
            </div>
        
        </b-row>
    </div>

</b-container>
</template>

grooming: 1,
health_issues: 2,
shedding_level: 2,
vocalisation: 1,
hairless: 0,
natural: 1,
rare: 0,
rex: 0,

<script>
import {
    useRoute
} from "vue-router";
import axios from "axios";
import GetCatImage from '@/components/GetCatImage';
import CatCard from "@/components/CatCard.vue";

export default {
    components: {
        "get-cat-image": GetCatImage,
        "cat-card": CatCard
    },

    data() {
        return {
            name: "",
            description: ""
        };
    },

    computed: {
        cat() {
            return this.$store.state.cats.find((cat) => {
                return cat.id === this.breedId
            })
        },

        indoor() {
            return this.cat.indoor === 0 ? 'Yes' : 'No'
        },

        pet() {
            return this.cat.lap === 0 ? 'No' : 'Yes'
        },

        smartCats() {
            return this.$store.state.cats.filter(cat =>
                cat.intelligence === this.cat.intelligence && this.cat.name != cat.name
            ).slice(0, 3)
        },

        lovingCats() {
            return this.$store.state.cats.filter(cat =>
                cat.affection_level === this.cat.affection_level && this.cat.name != cat.name
            ).slice(0, 3)
        }
    },

    props: ["breedId"],

};
</script>

<style lang="scss" scoped>

.container {
    justify-content: center;
    display: grid;

    padding-top: 100px;
}

.row {
    width: 100vw;
}

</style>
