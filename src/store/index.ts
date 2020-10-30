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

      axios
        .get("https://api.thecatapi.com/v1/breeds", {
        })
        .then(response => {
          commit("setCats", response.data);
        });
    }
  },
  modules: {}
});
