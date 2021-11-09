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
        @keydown.enter="getDigimonByLevel(level)"
      ></v-text-field>
      <v-btn
        color="purple darken-4"
        class="white--text"
        @click="getDigimonByLevel(level)"
      >
        Buscar
      </v-btn>
    </v-card-actions>
    <div v-if="!this.$store.state.loading">
      <v-row justify-md="center" align-content-md="center">
        <v-col
          v-for="(digi, id) in digimonsByLevel"
          :key="id"
          cols="12"
          md="4"
          lg="3"
          xl="4"
          sm="4"
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
                :value="getRatingLevel(digi.level)"
              ></v-rating>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Rating from "../utils/rating";

export default {
  name: "LevelSearch",
  data() {
    return {
      rating: "",
      level: "",
      digimonsByLevel: [],
    };
  },
  created() {
    this.getDigimonsByLevel();
  },
  methods: {
    getDigimonByLevel() {
      this.$store
        .dispatch("getDigimonLevel", this.level)
        .then((response) => {
          this.digimonsByLevel = response;
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
