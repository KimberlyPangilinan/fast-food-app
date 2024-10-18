<template>
  <base-layout>
    <div class="flex flex-col font-bold text-3xl">
      <ion-img
        src="assets/images/Logo.png"
        alt="logo"
        class="w-[90px] object-cover"
      ></ion-img>
      <ion-text>Bonjour</ion-text>
      <ion-text class="text-sm" color="medium"
        >Welcome to all new FastFood mobile app. Kindly login your account.
        Thank you!</ion-text
      >
    </div>
    <ion-list>
      <ion-item class="ion-no-padding">
        <ion-input
          label="Email Address"
          label-placement="floating"
          fill="solid"
          placeholder="Enter your email address"
          type="email"
        ></ion-input>
      </ion-item>
      <ion-item class="ion-no-padding">
        <ion-input
          label="Password"
          label-placement="floating"
          fill="outline"
          placeholder="Enter your password"
          type="password"
        ></ion-input>
      </ion-item>
      <ion-button class="ion-margin-bottom ion-no-padding" fill="clear"
        >Forgot Password?</ion-button
      >
    </ion-list>
    <Button color="primary" text="Login" />
    <Button text="Login as Guest" fill="clear" />
  </base-layout>
</template>

<script setup>
import { ref } from "vue";
import {
  IonRow,
  IonCol,
  IonImg,
  IonText,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
} from "@ionic/vue";
import Button from "../components/Button.vue";
const fields = ref({
  email: "admin",
  password: "admin",
});
const errorMessages = ref({
  email: "",
  password: "",
});
const loading = ref(false);
</script>
