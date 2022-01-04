<template>
  <div>
    <v-btn
      @click="$emit('event-click')"
      :to="{ name: to }"
      :color="color"
      class="mx-4"
      :class="textColor"
      >{{ text }}</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    to: {
      type: String,
      required: false,
    },
    textColor: {
      type: String,
      default: "white--text",
    },
  },
};
</script>