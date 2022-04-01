<template>
	<div>
		<ion-card v-for="post in posts" :key="post.data.id" color="dark">
			<ion-card-header>
				<ion-image :src="post.data.thumbnail" />
				<ion-card-title>{{ post.data.title }}</ion-card-title>
			</ion-card-header>
			<ion-card-content>
				<p>{{ post.data.content }}</p>
			</ion-card-content>
		</ion-card>
	</div>
</template>

<script>
import axios from "axios";
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonImage,
} from "@ionic/vue";
export default {
	components: { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImage },
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
	},
};
</script>

<style></style>
