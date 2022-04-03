<template>
	<ion-card
		v-for="post in posts"
		:key="post.data.id"
		color="medium"
		mode="ios"
	>
		<template v-if="post.data.thumbnail.startsWith('https://')">
			<img :src="post.data.thumbnail" alt="image" />
			<ion-card-content>
				<ion-label color="light">{{ post.data.title }}</ion-label>

				<ion-button
			id="trigger-button"
					color="success"
					expand="full"
			@click="openModal(post.data)"
					>View More</ion-button
				>
			</ion-card-content>
		</template>
	</ion-card>
</template>

<script>
import axios from "axios";
import { IonCard, IonLabel, IonCardContent, modalController } from "@ionic/vue";
import ModalPost from '../components/ModalPost.vue';
export default {
	components: {
		IonCard,
		IonLabel,
		IonCardContent
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
		async openModal(post) {
			console.log(post);
			let image = "";
			let video = "";
			if ( post.preview ) {
				image = post.preview.images[0].source.url.replace("&amp;", "&");
			}
			if (post.secure_media != null) {
				video = post.secure_media.reddit_video.scrubber_media_url;
			}

			const modal = await modalController.create({
				component: ModalPost,
				componentProps: {
					title: post.title,
					author: post.author,
					image: image,
					description: post.selftext,
					video: video
				}
			});
			return modal.present();
		}
	}
}
</script>

<style>
ion-card {
	margin: 1rem;
}
</style>
