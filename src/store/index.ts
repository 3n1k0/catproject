import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: [{}]
  },
  mutations: {
    setCats: function(state, cats) {
      state.cats = cats;
    }
  },
  actions: {
    loadCats: function({ commit }) {
      const headers = {
        "x-rapidapi-key": "de7f86c3-250d-4d13-957d-fd7cac1258d9"
      };

      axios
        .get("https://api.thecatapi.com/v1/breeds", {
          headers
        })
        .then(response => {
          commit("setCats", response.data);
        });
    }
  },
  modules: {}
});
