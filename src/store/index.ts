import Vue from "vue";
import Vuex from "vuex";
import thecatapi from "../services/thecatapi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: [{}],
    catImages: [{}]
  },
  mutations: {
    setCats: function(state, cats) {
      state.cats = cats;
    },
    loadImage: function(state, data) {
      const { url } = data[0];
      const { id } = data[0].breeds[0];
      state.catImages = { ...state.catImages, ...{ [id]: url } };
    }
  },
  actions: {
    loadCats: function({ commit }) {
      thecatapi.get("/breeds").then(response => {
        commit("setCats", response.data);
      });
    },

    loadImage: function({ commit, state }, { breedId }) {
      // Prevent re-loading images which were already loaded.
      if (state.catImages[breedId]) {
        return;
      }

      const breedIdParamName = "breed_id";

      thecatapi
        .get("/images/search", {
          params: {
            [breedIdParamName]: breedId
          }
        })
        .then(response => {
          commit("loadImage", response.data);
        });
    }
  },
  modules: {}
});
