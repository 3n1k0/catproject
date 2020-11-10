<template>
  <div class="container">
    <h1>{{ cat.name }}</h1>
    <div class="catscription">
      <div class="header">
        <span
          ><i class="fas fa-map-marker"></i><b>Origin:</b> {{ cat.origin }}/{{
            cat.country_code
          }}</span
        >
        <span
          ><i class="fab fa-gratipay"></i> <b>Lifespan:</b>
          {{ cat.life_span }} years</span
        >
      </div>

      <p>
        {{ cat.description }}
        <br />
        <br /><span v-if="cat.alt_names"
          ><b>Other names:</b> {{ cat.alt_names }}</span
        >
      </p>
    </div>

    <div class="detail-image">
      <get-cat-image :breedId="cat.id"></get-cat-image>
    </div>

    <ul>
      <li>⚡ Energy level: {{ cat.energy_level }}/5</li>
      <li>🤓 Intelligence: {{ cat.intelligence }}/5</li>
      <li>🥰 Affection level: {{ cat.affection_level }}/5</li>
      <li>🐶 Dog friendly: {{ cat.dog_friendly }}/5</li>
      <li>🧪 Experimental: {{ cat.experimental }}/5</li>
      <li>👶 Child friendly: {{ cat.child_friendly }}/5</li>
      <li>🏠 Suitable for indoors: {{ indoor }}</li>
      <li>🔌 Adaptibility:{{ cat.adaptability }}</li>
      <li>🧥 Shedding level: {{ cat.shedding_level }}</li>
      <li v-if="cat.pet">❤️ Loves to be petted: {{ cat.pet }}</li>
      <li v-if="cat.social_needs">💬 Social needs:{{ cat.social_needs }}</li>
      <li v-if="cat.stranger_friendly">
        🤷 Stranger friendly:{{ cat.stranger_friendly }}
      </li>
    </ul>

    <h2>Cats just as smart as the {{ cat.name }}:</h2>
    <div class="recommend-container">
      <div class="recommended">
        <cat-card
          v-for="cat in smartCats"
          :key="cat.name"
          :title="cat.name"
          :description="cat.description"
          :breedId="cat.id"
        ></cat-card>
      </div>

      <h2>Cats just as loving as the {{ cat.name }}</h2>

      <div class="recommended">
        <cat-card
          :title="cat.name"
          :description="cat.description"
          :breedId="cat.id"
          v-for="cat in lovingCats"
          :key="cat.name"
        ></cat-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GetCatImage from "@/components/GetCatImage.vue";
import CatCard from "@/components/CatCard.vue";
import Vue from "vue";
import { Cat } from "@/common/types";

export default Vue.extend({

    metaInfo() {
    return {
      title: "Random",
      titleTemplate: "%s - Catcyclopedia",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        {
          vmid: "description",
          name: "description",
          content: `Are you considering getting a new friend? Cat information database with images and descriptions.`
        }
      ]
    };
  },


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
        return cat.id === this.breedId;
      });
    },

    indoor(): string {
      return this.cat.indoor === 0 ? "Yes" : "No";
    },

    pet(): string {
      return this.cat.lap === 0 ? "No" : "Yes";
    },

    smartCats(): Array<Cat> {
      return this.$store.state.cats
        .filter(
          (cat: Cat): boolean =>
            cat.intelligence === this.cat.intelligence &&
            this.cat.name != cat.name
        )
        .slice(0, 3);
    },

    lovingCats(): Array<Cat> {
      return this.$store.state.cats
        .filter(
          (cat: Cat): boolean =>
            cat.affection_level === this.cat.affection_level &&
            this.cat.name != cat.name
        )
        .slice(0, 3);
    }
  },

  props: ["breedId"]
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

.row {
  width: 100vw;
}

h1 {
  font-family: "Rubik", sans-serif;
  padding-bottom: 20px;
}

h2 {
  padding: 50px;
  font-weight: bold;
  letter-spacing: -1px;
  color: #b83b5e;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  line-height: 1.3;
  text-align: center;
  grid-gap: 0.5em;
  width: 90%;
  padding-top: 50px;
}

li {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
}

.wrapper {
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  color: #b83b5e;
}

i {
  font-size: 18px;
  color: #f08a5d;
}

.catscription {
  width: 90%;
  margin: 0 auto;
}

.recommended {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 340px));
  align-items: center;
  justify-content: center;
  width: 100vw;
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
  display: grid;
  justify-content: space-around;
  padding-bottom: 10px;
}

.icons {
  width: 30px;
  height: 30px;
}

::v-deep .cat-image {
  max-width: 500px;
}

@media only screen and (min-width: 1200px) {
  .color_container {
    width: 60%;
    padding: 50px 100px;
  }

  h2 {
    padding-bottom: 20px;
  }

  .header {
    display: flex;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    text-align: center;
    margin: 0 auto;
    grid-gap: 1em;
    width: 50%;
  }
  li {
    font-size: 20px;
  }

  i {
    font-size: 20px;
  }

  .catscription {
    width: 50%;
    padding-bottom: 20px;
  }
}
</style>
