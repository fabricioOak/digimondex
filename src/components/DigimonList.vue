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
    </v-card-actions>
    <div v-if="!this.$store.state.loading">
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
              <v-rating
                readonly
                size="18"
                dense
                :value="getRatingLevel(digi.level)"
              ></v-rating>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row class="mt-8" justify-md="center" align-content-md="center">
        <h1>Loading...</h1>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Rating from "../utils/rating";

export default {
  name: "DigimonList",
  data() {
    return {
      page: 1,
      rating: "",
      digimons: [],
      error: "",
    };
  },
  created() {
    this.getAllDigimons();
  },
  methods: {
    getAllDigimons() {
      this.$store
        .dispatch("getDigimonList")
        .then((response) => {
          this.digimons = response;
          console.log(this.digimons);
        })
        .catch((error) => {
          this.error = error;
        });
    },
    getRatingLevel(data) {
      return Rating.getRatingLevel(data);
    },
  },
};
</script>
