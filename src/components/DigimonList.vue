<template>
  <v-container>
    <v-card-actions class="justify-center">
      <h1 class="text-uppercase text-xl-h1">Here is a full list of digimons</h1>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <v-btn color="pink darken-4" class="white--text mx-4" href="/level"
        >Search by level</v-btn
      >
      <v-btn color="purple darken-4" class="white--text mx-4" href="/name"
        >Search by name</v-btn
      >
      <v-btn
        color="purple darken-4"
        class="white--text mx-4"
        @click="getRatingLevel()"
        >See level</v-btn
      >
    </v-card-actions>
    <v-row justify-md="center" align-content-md="center">
      <v-col
        v-for="(digi, id) in digimons"
        :key="id"
        cols="12"
        md="4"
        lg="3"
        xl="4"
        sm="6"
      >
        <v-card
          color="grey lighten-3"
          elevation="6"
          class="mx-auto my-4"
          width="250"
        >
          <v-img width="250" height="250" :src="digi.img"></v-img>
          <v-card-title>Name: {{ digi.name }}</v-card-title>
          <v-card-subtitle>Level: {{ digi.level }}</v-card-subtitle>
          <v-card-text>
            <v-rating readonly size="18" dense :value="rating"></v-rating>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      rating: 0,
      index: 0,
      eArr: this.digimons.level,
    };
  },
  name: "DigimonList",
  mounted() {
    this.$store.dispatch("getDigimonList");
  },
  methods: {
    getRatingLevel() {
      switch (this.eArr.level) {
        case "Fresh":
          this.rating = 0;
          break;
        case "In Training":
          this.rating = 2;
          break;
        case "Rookie":
          this.rating = 3;
          break;
        case "Champion":
          this.rating = 4;
          break;
        case "Ultimate":
          this.rating = 5;
          break;
        case "Mega":
          this.rating = 6;
      }
      return this.rating;
    },
  },
  computed: mapState(["digimons"]),
};
</script>
