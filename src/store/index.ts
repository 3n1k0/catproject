import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: [{}],
    catImages: {}
  },
  mutations: {
    setCats: function(state, cats) {
      state.cats = cats;
    },
    loadImage: function (state, data){
      const { url } = data[0];
      const { id } = data[0].breeds[0];
      state.catImages = { ...state.catImages, ...{[id]: url}};
    },
  },
  actions: {
    loadCats: function({ commit }) {

      axios
        .get("https://api.thecatapi.com/v1/breeds", {
        })
        .then(response => {
          commit("setCats", response.data);
        });
    },

    loadImage: function ({ commit, state }, { breedId }) {
      // Prevent re-loading images which were already loaded.
      if (state.catImages[breedId]) {
        return;
      }

     axios
        .get("https://api.thecatapi.com/v1/images/search", {
          params: {
            "breed_id": breedId
          }
        })
        .then((response) => {
          commit("loadImage", response.data);
  
        })
      }
  },
  modules: {}
});
