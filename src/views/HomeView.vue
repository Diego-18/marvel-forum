<template>
	<ion-card
		v-for="post in posts"
		:key="post.data.id"
		color="medium"
		mode="ios"
	>
		<template v-if="post.data.thumbnail.startsWith('https://')">
			<img :src="post.data.thumbnail" alt="image" />
		</template>
		<ion-card-content>
			<ion-label color="light">{{ post.data.title }}</ion-label>
			<ion-button
				color="success"
				@click="viewMore(post.data)"
				expand="full"
				>View More</ion-button
			>
		</ion-card-content>
	</ion-card>
</template>

<script>
import axios from "axios";
import { IonCard, IonLabel, IonCardContent } from "@ionic/vue";
export default {
	components: {
		IonCard,
		IonLabel,
		IonCardContent,
	},
	data() {
		return {
			posts: [],
		};
	},
	async mounted() {
		const response = await axios.get(
			"https://www.reddit.com/r/marvelstudios.json"
		);
		this.posts = response.data.data.children;
		console.log(this.posts);
	},
	methods: {
		viewMore(post) {
			this.$router.push({ name: "detail", params: { post } });
		},
	},
};
</script>

<style>
ion-card {
	margin: 1rem;
}
</style>
