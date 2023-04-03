<template>
	<v-card
		color="purple darken-4"
		elevation="6"
		class="white--text mx-auto my-4"
		width="250"
	>
		<img :src="digimon.img" height="250px" />
		<v-card-title>Name: {{ digimon.name }}</v-card-title>
		<v-card-subtitle class="white--text"
			>Level: {{ digimon.level }}</v-card-subtitle
		>
		<v-card-text>
			<v-rating
				color="white"
				readonly
				size="18"
				dense
				:value="getRatingLevel(digimon.level)"
			></v-rating>
		</v-card-text>
	</v-card>
</template>

<script>
import Rating from "../utils/rating";

export default {
	props: {
		digimon: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getRatingLevel(data) {
			return Rating.getRatingLevel(data);
		},
	},
};
</script>
