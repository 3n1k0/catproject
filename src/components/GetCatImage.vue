<template>
  <vue-load-image>
    <img
      class="cat-image"
      slot="image"
      :src="url"
      alt="cat image"
      img-top
      tag="article"
    />
    <img slot="preloader" src="assets/image-loader.gif" />
    <div slot="error">ERROR: Please refresh the page</div>
  </vue-load-image>
</template>

<script lang="ts">
import Vue from "vue";
import VueLoadImage from "vue-load-image";

export default Vue.extend({
  components: {
    "vue-load-image": VueLoadImage
  },

  props: {
    breedId: String
  },

  computed: {
    url() {
      return this.$store.state.catImages[this.breedId];
    }
  },

  mounted() {
    if (!this.breedId) {
      return;
    }
    this.$store.dispatch("loadImage", {
      breedId: this.breedId
    });
  },
  watch: {
    breedId() {
      this.$store.dispatch("loadImage", {
        breedId: this.breedId
      });
    }
  }
});
</script>

<style lang="scss" scoped></style>
