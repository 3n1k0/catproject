<template>
  <vue-load-image>
    <img
      slot="image"
      :src="url"
      style="max-width:20rem"
      img-alt="cat"
      img-top
      tag="article"
    />
    <img slot="preloader" src="./image-loader.gif" />
    <div slot="error">error message</div>
  </vue-load-image>
</template>

<script lang="ts">
import Vue from "vue";
import VueLoadImage from 'vue-load-image';
import { Cat } from '@/types.ts'

export default Vue.extend({

  components: {
    'vue-load-image': VueLoadImage
  },
  
  props: {
    breedId: String,
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
    this.$store.dispatch('loadImage', {
        breedId: this.breedId
    });
  },
  watch: {
    breedId() {
        this.$store.dispatch('loadImage', {
          breedId: this.breedId
        });
    }
  }
});
</script>

<style lang="scss" scoped></style>
