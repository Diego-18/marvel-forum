<template>
	<div>
		<!-- <ion-card color="dark">
			<ion-card-header>
				<ion-card-title>{{ post.data.title }}</ion-card-title>
			</ion-card-header>

			<ion-card-content>
				<ion-label>{{ post.data.title }}</ion-label>
				<p>{{ post.data.content }}</p>
			</ion-card-content>
		</ion-card> -->
	</div>
</template>

<script>
// import {
// 	IonCard,
// 	IonCardHeader,
// 	IonCardTitle,
// 	IonCardContent,
// 	IonLabel,
// } from "@ionic/vue";
export default {
	props: ["post"],
	components: {
		// IonCard,
		// IonCardHeader,
		// IonLabel,
		// IonCardContent,
		// IonCardTitle,
	},
	data() {
		return {
			image: "",
		};
	},
	mounted() {
		console.log(this.post);
	},
};
</script>

<style></style>
