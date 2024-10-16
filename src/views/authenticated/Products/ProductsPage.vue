<template>
    <base-layout type="order" title="Our Foods">
        <div class="space-y-0 mt-[-10px]">
        <!-- Search bar -->
        <ion-searchbar :debounce="1000" @ionInput="handleInput" class="custom" />
        <div class="mx-4 flex overflow-scroll">
            <Button
            @click="handleFilter('')"
            :color="activeFilter=='' ? 'primary': 'tertiary'" 
            text="All"
            size="small"/>
            <Button
            @click="handleFilter('Breakfast')"
            :color="activeFilter=='Breakfast' ? 'primary': 'tertiary'" 
            text="Breakfast"
            size="small"/>
            <Button
            @click="handleFilter('Chicken')"
            :color="activeFilter=='Chicken' ? 'primary': 'tertiary'" 
            text="Chicken"
            size="small"/>
            <Button
            @click="handleFilter('Seafood')"
            :color="activeFilter=='Seafood' ? 'primary': 'tertiary'" 
            text="Seafood"
            size="small"/>
        </div>
        <!-- Product list -->
        <ProductList :items="products" />
        </div>
    </base-layout>
</template>

<script setup>
    import { ref,onMounted } from 'vue';
    import { IonSearchbar } from '@ionic/vue';
    
    import BaseLayout from '@/components/base/BaseLayout.vue';
    import ProductList from "@/components/products/ProductList.vue";
    import { PRODUCTS } from '@/helpers/index.js';
    import Button from '@/components/Button.vue';
    
    const products = ref([]);
    const activeFilter = ref('')
    
    onMounted(() => {
        fetchProducts();
    });
    
    const fetchProducts = async () => {
        products.value = PRODUCTS;
    };
    
    const handleInput = (event) => {
        const query = event.target.value.toLowerCase();
        if (query) {
            products.value = products.value.filter((product) =>
                product.name.toLowerCase().includes(query)
            );
        } else {
            products.value = products.value;
        }
    };
    
    const handleFilter = (filter) => {
        activeFilter.value = filter
    }
</script>