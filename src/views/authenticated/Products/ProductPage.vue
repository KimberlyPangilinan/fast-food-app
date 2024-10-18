<template>
  <div class="absolute bottom-6 left-[50%] transform -translate-x-[50%] z-[100] w-[94vw]">
    <Button @click="handleAddOrder" color="primary" text="Order now" class="w-full py-3"/>
  </div>
  <base-layout pageDefaultBackLink="/products" :key="$route.fullPath" type="order" title="Meats">
    <div v-if="product">
      <div class="card h-[200px] flex items-center justify-center py-4">
        <img class="w-[108px] object-cover" :src="product.img" />
      </div>
      <div>
        <ion-text class="font-bold mt-4 line-clamp-1 ">{{ product.name }}</ion-text>
        <!-- Product rating -->
        <ul class="flex">
          <li v-for="i in product.rate">
            <ion-icon :icon="star"></ion-icon>
          </li>
        </ul>
        <ion-text>{{ product.description }}</ion-text>
        <div class="flex justify-between py-4">
          <span class="text-2xl font-bold text-red-600">P {{ product.price }}</span>
          <!-- Product Quantity Adjustment -->
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
      <!-- Beverages section -->
      <div>
        <ion-text class="font-bold text-xl mt-2 line-clamp-1 ">Beverages</ion-text>
        <div class="bg-neutral-100 rounded-2xl">
          <ion-select v-model="order.beverage.product" class="py-2 px-4" color="tertiary" label-placement="stacked" label="Choose Beverages">
            <ion-select-option v-for="item in BEVERAGES" :value="item.id">{{ item.name }}</ion-select-option>
          </ion-select>
        </div>
        <div class="flex">
          <div class="py-2 flex overflow-scroll" >
            <Button @click="handleBeverageSize('')" :color="activeFilter == 'Regular' ? 'primary' : 'tertiary'"
              text="Regular" size="small" />
            <Button @click="handleBeverageSize('Large')" :color="activeFilter == 'Large' ? 'primary' : 'tertiary'"
              text="Large" size="small" />
            <Button @click="handleBeverageSize('X-Large')" :color="activeFilter == 'X-Large' ? 'primary' : 'tertiary'"
              text="X-Large" size="small" />
          </div>
        </div>
      </div>
      <!-- TODO: Create a reusable card -->
      <!-- Addons section -->
      <div class="space-y-2 mb-20">
        <ion-text class="font-bold text-xl mt-2 line-clamp-1 ">Add-Ons</ion-text>
        <div v-for="(item, key) in addOnsAndRice" :key="key" class="flex items-center gap-4">
          <div class="ion-padding bg-neutral-100 rounded-2xl flex">
            <img src="/assets/images/Capture 1.png" class="w-[30%]" />
            <div class="p-2 flex flex-col justify-between">
              <ion-text class="leading-4 text-lg font-bold line-clamp-1">
                 {{item.name}}
              </ion-text>
              <ion-text class="capitalize">{{key}}</ion-text>
              <ion-text color="primary" class="font-bold text-xl">P 150</ion-text>
            </div>
            <div class="flex items-center gap-4">
              <ion-button @click="updateQuantity(key, -1)" color="tertiary" size="small">
                <ion-text color="primary">-</ion-text>
              </ion-button>
              <ion-text class="font-bold">{{ item.quantity }}</ion-text>
              <ion-button @click="updateQuantity(key, 1)" color="tertiary" size="small">
                <ion-text color="primary">+</ion-text>
              </ion-button>
            </div>
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
  computed,
  watch
} from 'vue';
import {
  useRoute,
  useRouter
} from 'vue-router';
import {
  PRODUCTS, ADDONS, BEVERAGES
} from '@/helpers/index.js';
import {
  IonText,
  IonIcon,
  IonTitle,
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
const router = useRouter();
const route = useRoute();
const order = ref({
  mainItem: {
    product: {},
    quantity: 1,
    price:0
  },
  beverage: {
    product: null,
    size: 'REGULAR'
  },
  sauce: {
    name: 'Tomato Sauce',
    quantity: 0,
    price: 25
  },
  rice: {
    name: 'Fried Rice',
    quantity: 0,
    price: 30
  },
  img: null,
  totalPrice: 0
});

onMounted(() => {
  fetchProductById(route.fullPath.split("/").splice(-1)[0]);
});

const fetchProductById = (id) => {
  product.value = products.value.filter((product) => product.id == id)[0];
  order.value.mainItem.product = product.value
  order.value.mainItem.price = product.value.price
  order.value.totalPrice = product.value.price
  order.img = product.value.img
};

const handleBeverageSize = (size) => {
  order.value.beverage.size = size
}

const updateQuantity = (itemKey, change) => {
  const item = order.value[itemKey];
  const newQuantity = Math.max(0, item.quantity + change);

  order.value.totalPrice += (newQuantity - item.quantity) * item.price;
  item.quantity = newQuantity;
};

const addOnsAndRice = computed(() => ({
  sauce: order.value.sauce,
  rice: order.value.rice
}));

const handleAddOrder = () => {
  localStorage.setItem("order", JSON.stringify(order.value));
  router.push('/Order');
}

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