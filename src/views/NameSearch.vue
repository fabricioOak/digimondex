<template>
  <v-container>
    <v-card-actions class="justify-center">
      <v-btn class="mx-4" href="/">Home</v-btn>
      <v-btn color="pink darken-4" class="white--text mx-4" href="/level"
        >Search by level</v-btn
      >
    </v-card-actions>
    <v-card-actions class="justify-center">
      <h1 class="text-uppercase text-xl-h1">
        Search your digimons by their name
      </h1>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <v-text-field
        class="shrink pa-8"
        label="Digimon Name"
        placeholder="Type the digimon name"
        v-model="name"
        clearable
        @keydown.enter="getDigimonByName(name)"
      ></v-text-field>
      <v-btn
        color="pink darken-4"
        class="white--text"
        @click="getDigimonByName(name)"
        >Search</v-btn
      >
    </v-card-actions>
    <div v-if="!this.$store.state.loading">
      <v-row justify-md="center" align-content-md="center">
        <v-col
          v-for="(digi, id) in digimonsByName"
          :key="id"
          cols="12"
          md="6"
          lg="3"
          xl="4"
          sm="1"
        >
          <v-card
            color="pink darken-4"
            elevation="6"
            class="white--text mx-auto my-4"
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
                :value="getRatingLevel(digi.level)"
              ></v-rating>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row justify-md="center" align-content-md="center">
        <h1>Loading...</h1>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Rating from "../utils/rating";

export default {
  name: "NameSearch",
  data() {
    return {
      rating: "",
      name: "",
      digimonsByName: [],
    };
  },
  created() {
    this.getDigimonByName();
  },
  methods: {
    getDigimonByName() {
      this.$store
        .dispatch("getDigimonName", this.name)
        .then((response) => {
          this.digimonsByName = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRatingLevel(data) {
      return Rating.getRatingLevel(data);
    },
  },
};
</script>
