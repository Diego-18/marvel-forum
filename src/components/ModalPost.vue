<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Marvel Studios</ion-title>
      <ion-label>{{author}}</ion-label>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-label>{{title}}</ion-label>
    <ion-card-content>
      <template v-if="image.startsWith('https://')">
        <img :src="image" alt="image" />
      </template>
      <template v-if="video.startsWith('https://')">
        <video :src="video" controls> Este video no es soportado...</video>
      </template>
        <ion-label>{{description}}</ion-label>
    </ion-card-content>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonCardContent } from '@ionic/vue';

export default({
  name: 'ModalPost',
  props: {
    title: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    video: { type: String, required: true },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonCardContent },
});
</script>