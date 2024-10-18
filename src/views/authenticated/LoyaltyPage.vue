<template>
    <base-layout>
      <!--  ------------------------- Special Offers Section -------------------------  -->
      <section class="px-2">
        <div class="flex justify-between items-center">
          <ion-text class="p-0 text-[20px] font-bold">Beginner Tier</ion-text>
          <Button color="primary" text="View all" fill="clear" />
        </div>
        <ion-text>Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.</ion-text>
        <div class="flex items-center justify-center">
            <div class="rounded-full p-8 bg-red-50 w-[200px] h-[200px] flex">
                <div class="rounded-full w-full bg-white flex items-center justify-center">
                    <ion-text class="font-bold text-2xl">0/160</ion-text>
                </div>
            </div>
        </div>
      </section>
      <!--  ------------------------- Categories Section -------------------------  -->
    </base-layout>
  </template>
  
  <script setup>
  import { onMounted, ref, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  
  import {
    IonText,
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
  