<template>
    <ion-button
      class="flex items-center justify-center capitalize"
      :style="props.size == 'small' ? { fontSize: '12px', padding: '0px' } : {}"
      :color="color"
      :fill="fill"
      :disabled="isLoading"
      @click="!!to && navigateTo()"
    >
      <ion-label>{{ text }}</ion-label>
    </ion-button>
  </template>
  
  <script setup>

  import { defineProps, toRefs } from "vue";
  import { useRouter } from "vue-router";
  import {
    IonButton,
    IonLabel,
  } from "@ionic/vue";
  
  const props = defineProps({
    color: {
      type: String,
      default: "primary",
    },
    text: {
      type: String,
      required: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
      default: "solid",
    },
    size: {
      type: String,
      default: "regular",
    },
    to: {
      type: [String, Object],
      required: false,
    },
  });
  
  const router = useRouter();
  const { to } = toRefs(props);
  
  const navigateTo = () => {
    if (!to.value) return;
    router.push({ path: to.value, replace: true });
  }
  
  
  </script>
  
 