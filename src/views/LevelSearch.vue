<template>
  <v-container>
    <v-card-actions class="justify-center">
      <BaseButton text="Home" to="Home" textColor="black--text" />
      <BaseButton text="Search by name" color="pink darken-4" to="NameSearch" />
    </v-card-actions>
    <v-card-actions class="justify-center">
      <h1 class="text-uppercase text-xl-h1">
        Search your digimons by their level
      </h1>
    </v-card-actions>
    <v-card-actions class="justify-center">
      <v-select
        :items="levels"
        class="shrink pa-8"
        label="Digimon Level"
        placeholder="Type the digimon level"
        v-model="level"
        clearable
        elevation-2
      ></v-select>
      <BaseButton
        color="pink darken-4"
        @event-click="getDigimonByLevel()"
        text="Search"
      />
    </v-card-actions>
    <div v-if="!this.$store.state.loading">
      <v-row justify="center" align-content="center">
        <v-col
          v-for="(digi, id) in digimonsByLevel"
          :key="id"
          md="4"
          lg="3"
          xl="4"
          sm="4"
        >
          <BaseCard :digimon="digi"/>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Rating from "../utils/rating";

export default {
  components: {
    BaseCard: () => import("../components/BaseCard.vue"),
  },
  name: "LevelSearch",
  data() {
    return {
      rating: "",
      level: "",
      levels: [
        "Fresh",
        "In Training",
        "Rookie",
        "Champion",
        "Ultimate",
        "Mega",
      ],
      digimonsByLevel: [],
    };
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
