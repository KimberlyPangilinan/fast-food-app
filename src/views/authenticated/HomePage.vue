<template>
  <div class="absolute bottom-6 right-6 z-[100]">
    <Button color="primary" text="Order now" to="Products" />
  </div>
  <base-layout>
    <!--  ------------------------ Banner/Greetings Section ------------------------  -->
    <ion-grid>
      <ion-row>
        <ion-col size="auto">
          <ion-img
            src="assets/images/Logo.png"
            alt="logo"
            class="w-[90px] object-cover"
          ></ion-img>
        </ion-col>
        <ion-col size="auto">
          <ion-text>Anneoyong, Chou!</ion-text>
          <h1 class="p-0 font-bold text-2xl">
            What do you want<br />
            to eat?
          </h1>
        </ion-col>
      </ion-row>
    </ion-grid>

    <!--  ------------------------------- Search bar -------------------------------  -->
    <ion-searchbar
      :value="queryProductValue"
      @ionChange="onSearchInput"
      class="custom"
    >
    </ion-searchbar>

    <!--  ------------------------- Special Offers Section -------------------------  -->
    <section class="px-2">
      <div class="flex justify-between items-center">
        <h2 class="p-0 text-[20px] font-bold">Special Offers</h2>
        <Button color="primary" text="View all" fill="clear" />
      </div>
      <ion-list
        :inset="false"
        lines="none"
        class="max-w-[100vw] gap-2 overflow-scroll flex"
      >
        <Card
          v-for="(offer, index) in specialOffers"
          :key="index"
          :item="offer"
          width="300px"
          height="0"
        />
      </ion-list>
    </section>

    <!--  ---------------------------- Category Section ----------------------------  -->
    <section class="px-2">
      <div class="flex justify-between items-center">
        <h2 class="p-0 text-[20px] font-bold">Category</h2>
        <Button color="primary" text="View all" fill="clear" />
      </div>
      <ion-list
        :inset="false"
        lines="none"
        class="max-w-[100vw] gap-2 overflow-x-scroll overflow-y-hidden flex"
      >
        <Card
          v-for="(category, index) in categories"
          :key="index"
          height="30vh"
          :item="category"
        />
      </ion-list>
    </section>

    <!--  --------------------------- What's New Section ---------------------------  -->
    <section class="px-2">
      <div class="flex justify-between items-center">
        <h2 class="p-0 text-[20px] font-bold">What's New</h2>
        <Button color="primary" text="View all" fill="clear" />
      </div>
      <ion-list
        :inset="false"
        lines="none"
        class="max-w-[100vw] gap-2 overflow-x-scroll overflow-y-hidden flex"
      >
        <Card
          v-for="(offer, index) in newOffers"
          :key="index"
          :item="offer"
          height="20vh"
          width="100%"
        />
      </ion-list>
    </section>
    <ProductList :items="popularProducts" title="Most Popular" />
  </base-layout>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import {
  IonGrid,
  IonList,
  IonItem,
  IonImg,
  IonSearchbar,
  IonCol,
  IonRow,
} from "@ionic/vue";

import BaseLayout from "@/components/base/BaseLayout.vue";
import Button from "@/components/Button.vue";
import Card from "@/components/cards/Card.vue";
import ProductList from "@/components/products/ProductList.vue";
import { SPECIAL_OFFERS, CATEGORIES, NEW, PRODUCTS } from "@/helpers/index.js";

const router = useRouter();
const route = useRoute();

const specialOffers = ref();
const categories = ref();
const newOffers = ref();
const popularProducts = ref();

onMounted(() => {
  fetchSpecialOffers();
  fetchCategories();
  fetchNew();
  fetchProducts();
});
// TODO: Add loaders
// sample functions for fetching apis
const fetchSpecialOffers = async () => {
  specialOffers.value = SPECIAL_OFFERS;
};
const fetchCategories = async () => {
  categories.value = CATEGORIES;
};
const fetchNew = async () => {
  newOffers.value = NEW;
};
const fetchProducts = async () => {
  popularProducts.value = [...PRODUCTS].slice(0, 4);
};

const onSearchInput = (event) => {
  const searchQuery = event.target.value.trim();
  if (searchQuery) {
    router.push({
      name: "Products",
      query: {
        search: searchQuery,
      },
    });
  }
};

const queryProductValue = computed({
  get: () => route.query.search ?? "",
  set: (search) => router.replace({ query: { ...route.query, search } }),
});
</script>
