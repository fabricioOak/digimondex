<template>
  <v-container>
    <v-card-actions class="justify-center">
      <v-btn class="mx-4" href="/">Home</v-btn>
      <v-btn color="purple darken-4" class="white--text mx-4" href="/name"
        >Search by name</v-btn
      >
    </v-card-actions>
    <v-card-actions class="justify-center">
      <h1 class="text-uppercase text-xl-h1">
        Search your digimons by their level
      </h1>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <v-text-field
        class="shrink pa-8"
        label="Digimon Level"
        placeholder="Type the digimon level"
        v-model="level"
        clearable
        elevation-2
        @keydown.enter="
          searchDigimonLevel(level);
          getRatingLevel();
        "
      ></v-text-field>
      <v-btn
        color="purple darken-4"
        class="white--text"
        @click="searchDigimonLevel(level)"
      >
        Buscar
      </v-btn>
    </v-card-actions>

    <v-row justify-md="center" align-content-md="center">
      <v-col
        v-for="(digi, id) in digimonsByLevel"
        :key="id"
        cols="12"
        md="6"
        lg="3"
        xl="4"
        sm="1"
      >
        <v-card
          color="purple darken-4"
          elevation="6"
          class="white--text mx- my-4"
          width="250"
        >
          <img :src="digi.img" height="250px" />
          <v-card-title>Name: {{ digi.name }}</v-card-title>
          <v-card-subtitle class="white--text"
            >Level: {{ digi.level }}</v-card-subtitle
          >
          <v-card-text>
            <v-rating
              color="white"
              readonly
              size="18"
              dense
              :value="getRatingLevel()"
            ></v-rating>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LevelSearch",

  data() {
    return {
      level: "",
      rating: 0,
    };
  },

  methods: {
    searchDigimonLevel() {
      this.$store.dispatch("getDigimonLevel", this.level);
    },
    getRatingLevel() {
      switch (this.digimonsByLevel[1].level) {
        case "Fresh":
          this.rating = 0;
          break;
        case "In Training":
          this.rating = 1;
          break;
        case "Rookie":
          this.rating = 2;
          break;
        case "Champion":
          this.rating = 3;
          break;
        case "Ultimate":
          this.rating = 4;
          break;
        case "Mega":
          this.rating = 5;
      }
      return this.rating;
    },
  },
  computed: mapState(["digimonsByLevel"]),
};
</script>
