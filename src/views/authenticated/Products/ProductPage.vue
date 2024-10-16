<template>
  <base-layout :key="$route.fullPath" type="order" title="Meats">
    <div v-if="product">
      <div class="card h-[200px] flex items-center justify-center py-4">
        <img class="w-[108px] object-cover" :src="product.img" />
      </div>
      <div>
        <ion-text class="font-bold mt-4 line-clamp-1 ">{{ product.name }}</ion-text>
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
        <ion-text>{{ product.description }}</ion-text>
        <div class="flex justify-between py-4">
          <span class="text-2xl font-bold text-red-600">P {{ product.price }}</span>
          <div class="flex items-center gap-4">
            <ion-button @click="updateQuantity('mainItem', -1)" color="tertiary" size="small">
      <ion-text color="primary">-</ion-text>
    </ion-button>
    <ion-text class="font-bold">{{ order.mainItem.quantity }}</ion-text>
    <ion-button @click="updateQuantity('mainItem', 1)" color="tertiary" size="small">
      <ion-text color="primary">+</ion-text>
    </ion-button>
          </div>
        </div>
      </div>
      <div>
        <ion-text class="font-bold text-xl mt-2 line-clamp-1 ">Beverages</ion-text>
        <div class="bg-neutral-100 rounded-md">
          <ion-select class="py-2 px-4" color="tertiary" label-placement="stacked" label="Choose Beverages"
            value="apple">
            <ion-select-option value="apple">Coke</ion-select-option>
            <ion-select-option value="banana">Sprite</ion-select-option>
            <ion-select-option value="orange">Pineapple Juice</ion-select-option>
          </ion-select>
        </div>
        <div class="flex">
          <div class="py-2 flex overflow-scroll">
            <Button @click="handleFilter('')" :color="activeFilter=='Regular' ? 'primary': 'tertiary'" text="Regular"
              size="small" />
            <Button @click="handleFilter('Large')" :color="activeFilter=='Large' ? 'primary': 'tertiary'" text="Large"
              size="small" />
            <Button @click="handleFilter('X-Large')" :color="activeFilter=='X-Large' ? 'primary': 'tertiary'"
              text="X-Large" size="small" />

          </div>
        </div>
      </div>

      <div>
        <ion-text class="font-bold text-xl mt-2 line-clamp-1 ">Add-Ons</ion-text>
        <div class="bg-neutral-100 rounded-md">
          <ion-select class="py-2 px-4" color="tertiary" label-placement="stacked" label="Choose Beverages"
            value="apple">
            <ion-select-option value="apple">Coke</ion-select-option>
            <ion-select-option value="banana">Sprite</ion-select-option>
            <ion-select-option value="orange">Pineapple Juice</ion-select-option>
          </ion-select>
        </div>
        <div class="flex">
          <div class="py-2 flex overflow-scroll">
            <Button @click="handleFilter('')" :color="activeFilter=='Regular' ? 'primary': 'tertiary'" text="Regular"
              size="small" />
            <Button @click="handleFilter('Large')" :color="activeFilter=='Large' ? 'primary': 'tertiary'" text="Large"
              size="small" />
            <Button @click="handleFilter('X-Large')" :color="activeFilter=='X-Large' ? 'primary': 'tertiary'"
              text="X-Large" size="small" />

          </div>
        </div>
      </div>
    </div>

  </base-layout>
</template>

<script setup>
  import {
    ref,
    onMounted,
    watch
  } from 'vue';
  import {
    useRoute
  } from 'vue-router';
  import {
    PRODUCTS
  } from '@/helpers/index.js';
  import {
    IonText,
    IonIcon,
    IonButton,
    IonSelect,
    IonSelectOption
  } from '@ionic/vue';
  import {
    star
  } from 'ionicons/icons';
  import Button from '@/components/Button.vue';
  import BaseLayout from '@/components/base/BaseLayout.vue';
  const products = ref(PRODUCTS);
  const product = ref();
  const activeFilter = ref('')
  const route = useRoute();
  const order = ref({
    mainItem: {
      product: {},
      quantity: 0,
      price: 0
    },
    beverage: {
      product: {},
      size: 'REGULAR'
    },
    addOns: {
      tomatoSauce: {
        quantity: 0,
        price: 0
      },
      whiteRice: {
        quantity: 0,
        price: 0
      },
    },
    totalPrice: 0
  });
  const fetchProductById = (id) => {
    product.value = products.value.filter((product) => product.id == id)[0];
    order.value.mainItem.product = product.value
    
  };
  onMounted(() => {
    fetchProductById(route.fullPath.split("/").splice(-1)[0]);
  });
  const handleFilter = (filter) => {
    activeFilter.value = filter
  }
  const updateQuantity = (itemKey, change) => {
    const currentQuantity = order.value[itemKey].quantity;
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 0) {
      order.value[itemKey].quantity = newQuantity;
    }
  
};

</script>
<style scoped>
  .card {
    background-color: var(--ion-color-light);
  }

  ion-icon {
    font-size: 16px !important;
    color: #FFC02E;
  }
</style>