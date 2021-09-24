import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  data() {
    return {};
  },
  state: {
    digimons: [],
    digimonsByName: [],
    digimonsByLevel: []
  },
  mutations: {
    SET_ITEMS(state, digimons) {
      state.digimons = digimons;
    },
    SET_DIGIMON_NAME(state, digimonName) {
      state.digimonsByName = digimonName;
    },
    SET_DIGIMON_LEVEL(state, digimonLevel) {
      state.digimonsByLevel = digimonLevel;
    }
  },
  actions: {
    getDigimonList({ commit }) {
      axios
        .get("https://digimon-api.vercel.app/api/digimon/")
        .then(response => response.data)
        .then(digimons => {
          commit("SET_ITEMS", digimons);
        });
    },
    getDigimonName({ commit }, name) {
      axios
        .get(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
        .then(response => response.data)
        .then(digimonName => {
          commit("SET_DIGIMON_NAME", digimonName);
        })
    },
    getDigimonLevel({ commit }, level) {
      axios
        .get(`https://digimon-api.vercel.app/api/digimon/level/${level}`)
        .then(response => response.data)
        .then(digimonLevel => {
          commit("SET_DIGIMON_LEVEL", digimonLevel);
        });
    }
  },
  modules: {}
});
