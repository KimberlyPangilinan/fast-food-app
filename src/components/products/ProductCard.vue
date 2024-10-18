<template>
  <div
    class="card !rounded-2xl overflow-hidden"
    @click="navigate(`products/${props.item.id}`)"
  >
    <ion-card-content>
      <div class="h-[100px] flex items-center justify-center py-4">
        <img class="w-[108px] object-cover" :src="props.item.img" />
      </div>
    </ion-card-content>
    <ion-card-header>
      <ion-card-title>
        <span class="text-sm font-bold line-clamp-1">{{
          props.item.name
        }}</span>
      </ion-card-title>
      <ion-text
        ><span class="text-xs">{{ props.item.type }}</span></ion-text
      >
      <div class="flex justify-between">
        <span class="font-bold text-red-600">P {{ props.item.price }}</span>
        <ul class="flex">
          <li>
            <ion-icon :icon="star"></ion-icon>
          </li>
          <li>
            <ion-icon :icon="star"></ion-icon>
          </li>
          <li>
            <ion-icon :icon="star"></ion-icon>
          </li>
          <li>
            <ion-icon :icon="star"></ion-icon>
          </li>
          <li>
            <ion-icon :icon="star"></ion-icon>
          </li>
        </ul>
      </div>
    </ion-card-header>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { star, mail, key, logIn, eye, eyeOff } from "ionicons/icons";
import {
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  item: {
    type: Object,
  },
});

function navigate(link) {
  router.push(link);
}
</script>
<style scoped>
.card {
  background-color: var(--ion-color-light);
}

ion-icon {
  font-size: 10px !important;
  color: #ffc02e;
}
</style>
