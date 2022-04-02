<template>
	<ion-app>
		<ion-toolbar color="dark">
			<ion-title>Marvel Studios</ion-title>
		</ion-toolbar>

		<ion-toolbar>
			<!-- <nav>
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
			</nav> -->
		</ion-toolbar>

		<ion-content>
			<router-view />
		</ion-content>
	</ion-app>
</template>

<script>
import { IonApp, IonTitle, IonToolbar, IonContent } from "@ionic/vue";
export default {
	components: { IonApp, IonTitle, IonToolbar, IonContent },
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
</style>
