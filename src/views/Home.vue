<template>
  <div>
    <v-container>
      <DigimonList />
    </v-container>
  </div>
</template>

<script>
import DigimonList from "../components/DigimonList";

export default {
  name: "Home",
  data: () => ({}),
  components: {
    DigimonList,
  },
};
</script>
