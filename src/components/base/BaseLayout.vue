<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-content class="ion-padding">
      </ion-content>

    </ion-header>
    <ion-content class="ion-padding">
      <div class="flex flex-col mb-4">
        <div class="flex justify-between">
          <img class="rounded-full w-14 h-14" alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          <div class="w-[70%] flex items-center justify-around">
            <ion-img src="assets/images/crown1.png" />
            <ion-text class="text-normal font-bold">0 points</ion-text>
            <ion-icon :icon="chevronForwardOutline" color="primary"></ion-icon>
          </div>
        </div>
        <div class="py-2">
          <h2 class="font-bold text-2xl">Chou Tzuyu</h2>
          <ion-text class="text-neutral-500 text-sm">+63 912 345 6789</ion-text>
        </div>
        <ion-list lines="none">
          <ion-item  v-for="item in MENU.slice(0,5)" @click="navigate(`${item.to}`)" class="ion-no-padding py-1 items-center hover:!bg-red-50">
            <ion-icon :icon="item.icon" color="primary"></ion-icon>
            <ion-text class="ion-padding-start font-bold">{{item.name}}</ion-text>
          </ion-item>
        </ion-list>
        <hr class="my-2 w-full"/>
        <ion-list lines="none">
          <ion-item  v-for="item in MENU.slice(5)" @click="navigate(item.to)" class="ion-no-padding py-1 items-center hover:!bg-red-50">
            <ion-icon :icon="item.icon" color="primary"></ion-icon>
            <ion-text class="ion-padding-start font-bold">{{item.name}}</ion-text>
          </ion-item>
        </ion-list>
      </div>
      <Button text="Log out"/>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <div class="shadow-none p-4 flex justify-between items-center">
      <div class="w-full flex flex-[2] items-center gap-2">
        <ion-buttons slot="start">
          <div v-if="pageDefaultBackLink">
            <ion-back-button
              text=""
              :default-href="pageDefaultBackLink"
            ></ion-back-button>
          </div>
          <ion-menu-toggle v-else>
            <div class="flex flex-col gap-1">
              <div v-for="i in 2" :key="i" class="bg-red-600 w-6 rounded-full h-1"></div>
            </div>
          </ion-menu-toggle>
          <ion-text class="ml-4 text-2xl font-bold ">{{ props.title }}</ion-text>
        </ion-buttons>
      </div>
      <div v-show="props.type == 'default'" class="w-full flex items-center gap-2">
        <ion-img src="assets/images/crown1.png" />
        <ion-text class="text-normal font-bold">0 points</ion-text>
      </div>
      <div v-show="props.type == 'default' || props.type == 'order' " class="w-full flex justify-end">
        <ion-avatar v-show="props.type == 'default'" class="w-8 h-8">
          <img alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-avatar v-show="props.type == 'order'" class="w-8 h-10">
          <img alt="order" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
      </div>
    </div>
    <ion-content class="ion-padding">
      <div class="space-y-2">
        <slot />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import {
    defineProps
  } from "vue";
  import {
    chevronForwardOutline
  } from "ionicons/icons";
  import {
    MENU
  } from '@/helpers/index.js'
  import {
    useRouter
  } from "vue-router";
  import Button from "../Button.vue";
  import {
    IonText,
    IonIcon,
    IonImg,
    IonAvatar,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuToggle,
    IonBackButton,
    IonButton,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem
  } from '@ionic/vue';
  const props = defineProps({
    title: {
      type: String,
    },
    type: {
      type: Boolean,
      required: true,
      default: 'default'
    },
    isOrder: {
      type: Boolean
    },
    pageDefaultBackLink: {
      type: String,
      required: false,
    },
  })
  const router = useRouter();

  function navigate(link) {
    router.push(`/${link}`);
  }
</script>