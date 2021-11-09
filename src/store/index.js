import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  data() {
    return {};
  },
  state: {
    loading: false,
  },

  mutations: {
    set_loading(state, isLoading) {
      state.loading = isLoading;
    },
  },

  actions: {
    getDigimonList({ commit }) {
      return new Promise((resolve, reject) => {
        commit("set_loading", true);
        axios
          .get("https://digimon-api.vercel.app/api/digimon/")
          .then(response => {
            commit("set_loading", false);
            resolve(response.data);
          })
          .catch(error => {
            commit("set_loading", false);
            reject(error);
          });
      });
    },
    getDigimonName({ commit }, name) {
      return new Promise((resolve, reject) => {
        commit("set_loading", true);
        axios
          .get(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
          .then(response => {
            commit("set_loading", false);
            resolve(response.data);
          })
          .catch(error => {
            commit("set_loading", false);
            reject(error);
          });
      });
    },
    getDigimonLevel({ commit }, level) {
      return new Promise((resolve, reject) => {
        commit("set_loading", true);
        axios
          .get(`https://digimon-api.vercel.app/api/digimon/level/${level}`)
          .then(response => {
            commit("set_loading", false);
            resolve(response.data);
          })
          .catch(error => {
            commit("set_loading", false);
            reject(error);
          });
      });
    },
  }
});
