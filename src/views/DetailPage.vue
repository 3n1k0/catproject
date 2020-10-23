<template>
<b-container class="container">

    <b-row>
        <b-col>
            <h1>{{ cat.name }}</h1>
            <div class="catscription">
                <div class="header"><span><i class="fas fa-map-marker"></i><b>Origin:</b> {{ cat.origin }}/{{cat.country_code}}</span> <span><i class="fab fa-gratipay"></i> <b>Lifespan:</b> {{ cat.life_span }} years</span></div>

                <p>{{ cat.description }}
                    <br>
                    <br><span v-if="cat.alt_names"><b>Other names:</b> {{cat.alt_names}}</span>
                </p>
            </div>
            <get-cat-image :breedId="cat.id" style="max-width:40rem"></get-cat-image>

            <ul class="qualities">

                <div class="wrapper">
                    <li><i class="fas fa-plug"></i> Energy level: {{cat.energy_level}}/5</li>
                    <li><i class="fas fa-glasses"></i>Intelligence: {{cat.intelligence}}/5</li>
                    <li><i class="fas fa-heart"></i>Affection level: {{ cat.affection_level }}/5</li>
                    <li><i class="fas fa-dog"></i>Dog friendly: {{ cat.dog_friendly }}/5</li>
                    <li><i class="fas fa-vial"></i>Experimental: {{ cat.experimental }}/5</li>
                    <li><i class="fas fa-baby"></i>Child friendly: {{ cat.child_friendly }}/5</li>
                </div>

                <div class="wrapper">
                    <li><i class="fas fa-house-user"></i>Suitable for indoors: {{ indoor }}</li>
                    <li><i class="fas fa-smile-beam"></i>Adaptibility: {{ cat.adaptability }}</li>
                    <li><i class="fas fa-cat"></i>Shedding level: {{ cat.shedding_level }}</li>
                    <li v-if="pet"><i class="fas fa-heart"></i>Loves to be petted: {{ pet }}</li>
                    <li v-if="pet"><i class="fas fa-comments"></i>Social needs: {{ cat.social_needs }}</li>
                    <li v-if="pet"><i class="fas fa-male"></i>Stranger friendly: {{ cat.stranger_friendly }}</li>
                </div>
            </ul>

        </b-col>
    </b-row>
    <h2>Cats just as smart as the {{cat.name}}:</h2>

    <div class="recommend-container">
        <div class="recommended">
            <b-row align-v="center" align-h="center">
                <div class='recommended-card' v-for="cat in smartCats" :key="cat.name">
                    <cat-card :title="cat.name" :description="cat.description" :breedId="cat.id"></cat-card>
                </div>
            </b-row>
        </div>

        <h2>Cats just as loving as the {{cat.name}}</h2>

        <div class="recommended">
            <b-row class="row" align-v="center" align-h="center">

                <div div class='recommended-card' v-for="cat in lovingCats" :key="cat.name">

                    <cat-card :title="cat.name" :description="cat.description" :breedId="cat.id"></cat-card>

                </div>
            </b-row>
        </div>
    </div>

</b-container>
</template>

<script lang="ts">
import {
    useRoute
} from "vue-router";
import axios from "axios";
import {
    Component,
    Vue
} from "vue-property-decorator";
import GetCatImage from '@/components/GetCatImage.vue';
import CatCard from "@/components/CatCard.vue";

export interface Cat {
    name: string;
    id: string;
    dog_friendly: number;
    intelligence: number;
    affection_level: number;
    indoor: number;
    lap: number;
    energy_level: number;
}

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
        cat(): Cat {
            return this.$store.state.cats.find((cat: Cat): boolean => {
                return cat.id === this.breedId
            })
        },

        indoor(): string {
            return this.cat.indoor === 0 ? 'Yes' : 'No'
        },

        pet(): string {
            return this.cat.lap === 0 ? 'No' : 'Yes'
        },

        smartCats(): Array<Cat> {
            return this.$store.state.cats.filter((cat: Cat): boolean =>
                cat.intelligence === this.cat.intelligence && this.cat.name != cat.name
            ).slice(0, 3)
        },

        lovingCats(): Array<Cat> {
            return this.$store.state.cats.filter((cat: Cat): boolean =>
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
    padding-top: 120px;

}

.row {
    width: 100vw;
}

h1 {
    font-family: 'Rubik', sans-serif;

}

h2 {
    padding: 50px;
    font-weight: bold;
    letter-spacing: -1px;
    color: #b83b5e
}

.qualities {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 100px 0px;

}

li {
    font-family: 'Rubik', sans-serif;
    font-size: 30px;
    display: flex;
    justify-items: space-between;

}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #b83b5e;

}

i {
    margin-right: 50px;
    color: #f08a5d;
    font-size: 35px;
}

.catscription {
    width: 40rem;
    margin: 0 auto;
    padding: 20px 0px;
}

.recommend-container {
    padding-bottom: 100px;
}

.header i {
    color: rgba(28, 23, 23, 0.639);
    font-size: 20px;
    margin-right: 0;
}

.header {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
}

.icons {
    width: 30px;
    height: 30px;
}
</style>
