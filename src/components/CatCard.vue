<template>
  <div class="cat-card">
    <router-link :to="`/detailpage/${breedId}`">
      <div class="card">
        <div class="img-container">
          <get-cat-image class="cat-card-image" :breedId="breedId" />
        </div>
        <div class="card-text">
          <h2>{{ title }}</h2>
        </div>
        <button>
          <router-link :to="`/detailpage/${breedId}`">Learn more</router-link>
        </button>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetCatImage from "@/components/GetCatImage";

export default Vue.extend({
  components: {
    "get-cat-image": GetCatImage
  },

  props: {
    title: String,
    breedId: String
  },

  data(): { image: string; temperament: string } {
    return {
      image: "",
      temperament: ""
    };
  }
});
</script>

<style lang="scss" scoped>
.cat-card {
  text-decoration: none;
  border-radius: 20px;
  background: transparent;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin: 30px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    text-decoration: none;
  }
}

h2 {
  font-family: "Rubik", sans-serif;
  text-decoration: none;
  color: #b83b5e;
  margin-bottom: 30px;
  margin-top: 10px;
  font-size: 20px;
}

button {
  background: #f08a5d;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  padding: 12px;
  font-weight: 600;
  color: #eeecda;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  letter-spacing: -1px;
}

button a {
  color: #eeecda;
  text-decoration: none;
}

.footer {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  font-family: Rubik, sans-serif;
  color: #000;
  opacity: 0.5;
  font-size: 13px;
  margin-top: 20px;
}

.card-footer {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  font-family: "Rubik", sans-serif;
  color: black;
  opacity: 0.5;
  font-size: 13px;
}

::v-deep .cat-image {
  width: 100%;
  height: 100%;
  min-height: 180px;
  max-height: 180px;
  object-fit: cover;
  object-position: 50% 20%;
}
</style>
