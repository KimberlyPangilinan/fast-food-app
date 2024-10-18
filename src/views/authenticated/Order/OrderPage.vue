<template>
  <div class="absolute bottom-6 right-6 z-[100]">
    <Button color="primary" text="Place Order" to="Products"/>
  </div>
    <base-layout type="" page-default-back-link="/home" title="Order&nbsp;Summary">
        <div class="space-y-2">
            <div class="flex items-center justify-center">
                <div class="w-full ion-padding bg-neutral-100 rounded-2xl flex flex-col">
                    <ion-label class="font-bold mb-2">{{ user.fullName }}</ion-label>
                    <ion-text color="medium">{{ user.phone }}</ion-text>
                    <ion-text color="medium">{{ user.emailAddress }}</ion-text>
                </div>
                <ion-icon color="warning" size="large" :icon="ellipsisVertical"></ion-icon>
            </div>
            <div class="flex items-center justify-center">
                <div class="w-full ion-padding bg-neutral-100 rounded-2xl flex flex-col">
                    <ion-label class="font-bold mb-2">My Home Address</ion-label>
                    <ion-text color="medium">{{ user.address }}</ion-text>
                </div>
                <ion-icon color="warning" size="large" :icon="ellipsisVertical"></ion-icon>
            </div>
            <div class="flex items-center justify-center">
                <div class="w-full ion-padding bg-neutral-100 rounded-2xl flex flex-col">
                    <ion-label class="font-bold mb-2">Work/Office</ion-label>
                    <ion-text color="medium">{{ user.office }}</ion-text>
                </div>
                <ion-icon color="warning" size="large" :icon="ellipsisVertical"></ion-icon>
            </div>
        </div>
        <div class="mt-8">
            <h2 class="font-bold text-xl">Orders</h2>
            <div class="flex items-center justify-center">
                <div class="w-full ion-padding bg-neutral-100 rounded-2xl flex flex-col gap-4">
                    <div v-if="order" class="flex gap-4">
                        <ion-img :src="order.img" class="w-20 h-20 aspect-square" />
                        <div class="flex flex-col">
                            <ion-label class="font-bold mb-2">{{ order.mainItem.product.name }}</ion-label>
                            <ion-text color="medium">{{ order.sauce.quantity }}x {{ order.sauce.name }}</ion-text>
                            <ion-text color="medium">{{ order.rice.quantity }}x {{ order.rice.name }}</ion-text>
                            <ion-text color="medium">0x {{ order.beverage.size }}</ion-text>
                        </div>
                    </div>
                </div>
                <ion-icon color="warning" size="large" :icon="ellipsisVertical"></ion-icon>
            </div>
        </div>
        <div class="mt-8">
            <h2 class="font-bold text-xl">Payment Option</h2>
            <div class="w-full flex flex-col">
                <ion-text class="font-bold">Grand Total</ion-text>
                <ion-text v-if="order">{{ order.totalPrice }}</ion-text>
            </div>
        </div>
        <div class="mt-8 w-full ion-padding bg-neutral-100 rounded-2xl flex flex-col gap-4">
            <div class="w-full flex flex-col">
                <ion-text class="font-bold">Loyalty Points</ion-text>
                <ion-text>Pay  using your earned loyalty points</ion-text>
            </div>
        </div>
        <div class="mt-8 w-full ion-padding bg-neutral-100 rounded-2xl flex flex-col gap-4">
            <div class="w-full flex flex-col">
                <ion-text class="font-bold">PayPal</ion-text>
                <ion-text>A new tab will open to access your account</ion-text>
            </div>
        </div>
        <div class="mt-8 w-full ion-padding bg-neutral-100 rounded-2xl flex flex-col gap-4">
            <div class="w-full flex flex-col">
                <ion-text class="font-bold">Paynamics</ion-text>
                <ion-text>Choose paynamics services available from you</ion-text>
            </div>
        </div>
        <div class="mt-8">
            <div class="w-full flex justify-between">
                <ion-text class="font-bold">Subtotal</ion-text>
                <ion-text v-if="order">{{ order.totalPrice }}</ion-text>
            </div>
            <div class="w-full flex justify-between">
                <ion-text class="font-bold">Delivery Charge</ion-text>
                <ion-text v-if="order">P 59</ion-text>
            </div>
        </div>
        <ion-textarea class="border" label="Change for" placeholder="e.g. 1,000"/>
        <div class="ion-padding mb-4">
            <hr/>
        </div>
    </base-layout>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { IonLabel, IonIcon, IonButton, IonTextarea} from '@ionic/vue';
import { ellipsisVertical } from 'ionicons/icons';
import { USER } from '@/helpers/index.js';
import BaseLayout from '@/components/base/BaseLayout.vue';
import Button from '@/components/Button.vue';

const user = ref(USER)
const order = ref()
const fetchOrders = () => {
    const storedOrder = localStorage.getItem("order");
    if (storedOrder) {
        order.value = JSON.parse(storedOrder);
    }
};

onMounted(() => {
    fetchOrders();
});
</script>