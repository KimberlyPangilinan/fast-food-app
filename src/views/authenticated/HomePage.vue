<template>
  <base-layout>
    <!--  ------------------------ Banner/Greetings Section ------------------------  -->
    <ion-grid>
      <ion-row>
        <ion-col size="auto">
          <ion-img src="assets/images/Logo.png" alt="logo" class="w-[90px] object-cover"></ion-img>
        </ion-col>
        <ion-col size="auto" class="p-2">
          <ion-text>Anneoyong, Chou!</ion-text>
          <ion-title class="p-0 font-bold text-2xl">What do you want<br /> to eat?</ion-title>
        </ion-col>
      </ion-row>
    </ion-grid>

    <!--  ------------------------------- Search bar -------------------------------  -->
    <ion-searchbar :value="queryProductValue" @ionChange="onSearchInput" class="custom">
    </ion-searchbar>

    <!--  ------------------------- Special Offers Section -------------------------  -->
    <section class="p-2">
      <div class="flex justify-between">
        <ion-title class="p-0 text-[20px] font-bold">Special Offers </ion-title>
        <ion-row>
          <ion-col size="12">
            <Button color="primary" text="View all" fill="clear" />
          </ion-col>
        </ion-row>
      </div>
      <ion-list :inset="false" lines="none" class="max-w-[100vw] gap-2 overflow-scroll flex">
        <Card v-for="(offer, index) in specialOffers" :key="index" :item="offer" width="300px" height="0" />
      </ion-list>
    </section>

    <!--  ---------------------------- Category Section ----------------------------  -->
    <section class="p-2">
      <div class="flex justify-between">
        <ion-title class="p-0 text-[20px] font-bold">Category </ion-title>
        <ion-row>
          <ion-col size="12">
            <Button color="primary" text="View all" fill="clear" />
          </ion-col>
        </ion-row>
      </div>
      <ion-list :inset="false" lines="none" class="max-w-[100vw]  gap-2 overflow-x-scroll overflow-y-hidden flex">
        <Card v-for="(category, index) in categories" :key="index" height="30vh" :item="category" />
      </ion-list>
    </section>

    <!--  --------------------------- What's New Section ---------------------------  -->
    <section class="p-2">
      <div class="flex justify-between">
        <ion-title class="p-0 text-[20px] font-bold">What's New </ion-title>
        <ion-row>
          <ion-col size="12">
            <Button color="primary" text="View all" fill="clear" />
          </ion-col>
        </ion-row>
      </div>
      <ion-list :inset="false" lines="none" class="max-w-[100vw] gap-2 overflow-x-scroll overflow-y-hidden flex">
        <Card v-for="(offer, index) in newOffers" :key="index" :item="offer" height="20vh" width="100%" />
      </ion-list>
    </section>
  </base-layout>
</template>

<script setup>
  import { onMounted, ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router'
  
  import {
    IonGrid,
    IonList,
    IonItem,
    IonImg,
    IonSearchbar,
    IonCol,
    IonRow,
  } from '@ionic/vue';
  
  import BaseLayout from '@/components/base/BaseLayout.vue'
  import Button from "@/components/Button.vue";
  import Card from "@/components/cards/Card.vue";
  
  import {
    SPECIAL_OFFERS,
    CATEGORIES,
    NEW
  } from '@/helpers/index.js';
    
  const router = useRouter()
  const route = useRoute()
  
  const specialOffers = ref()
  const categories = ref()
  const newOffers = ref()
  
  onMounted(() => {
    fetchSpecialOffers();
    fetchCategories();
    fetchNew();
  })

  const fetchSpecialOffers = async () => {
    specialOffers.value = SPECIAL_OFFERS
  }
  const fetchCategories = async () => {
    categories.value = CATEGORIES
  }
  const fetchNew = async () => {
    newOffers.value = NEW
  }

  const onSearchInput = (event) => {
    const searchQuery = event.target.value.trim();
    if (searchQuery) {
      router.push({
        name: 'Products',
        query: {
          search: searchQuery
        }
      });
    }
  };
  
  const queryProductValue = computed({
    get: () => route.query.search ?? '',
    set: (search) => router.replace({ query: { ...route.query, search } })
  });

</script>