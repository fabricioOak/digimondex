<template>
  <v-app>
    <v-app-bar height="80" app color="brown darken-4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="mr-2"
          contain
          src="https://imagensemoldes.com.br/wp-content/uploads/2021/04/Ilustracao-Digimon-PNG-1024x495.png"
          transition="scale-transition"
          width="140"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://digimon-api.herokuapp.com/" target="_blank" text>
        <span class="mr-2">Looking for the API?</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>