<template>
    <base-layout>
      <ion-row>
        <ion-col size="12">
          <Button
            color="primary"
            text="Login"
          />
        </ion-col>
      </ion-row>
    </base-layout>
  </template>
  
  <script setup>
  import { ref } from "vue";

  import {
    IonRow,
    IonCol,
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
  