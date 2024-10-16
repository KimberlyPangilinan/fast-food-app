<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-content class="ion-padding">
    </ion-content>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header class="shadow-none px-4 py-2 flex justify-between items-center">
      <ion-toolbar class="w-full">
        <ion-buttons slot="start">
          <ion-menu-toggle class="flex flex-col gap-1">
              <div v-for="i in 2" :key="i" class="bg-red-600 w-6 rounded-full h-1"></div>
          </ion-menu-toggle>
        </ion-buttons>
      </ion-toolbar>
       <div class="w-full flex items-center gap-2">
          <ion-img src="assets/images/crown1.png"/>
          <ion-text class="text-normal font-bold">0 points</ion-text>
      </div>
      <div class="w-full flex justify-end">
        <ion-avatar class="w-8 h-8">
          <img alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
      </div>
    </ion-header>
    <ion-content class="ion-padding"><slot/> </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonImg,IonAvatar,IonButtons, IonContent, IonHeader, IonMenu,IonMenuToggle,IonButton, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenu,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>