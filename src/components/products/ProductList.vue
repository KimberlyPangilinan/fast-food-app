<template>
    <section class="p-2">
        <h2 v-show="props.title" class="text-[20px] font-bold py-3">{{ props.title }} </h2>
        <div class="flex flex-wrap p-2 gap-2 justify-between ">
            <ProductCard 
                v-for="(item,index) in items"  
                :key="index"
                :item="item"
                class="flex-1 min-w-[48%]" />
        </div>
    </section>
</template>
<script setup>
    import { defineProps } from "vue";
    import {
        IonTitle,
        IonRow,
        IonCol
    } from '@ionic/vue';
    import ProductCard from './ProductCard.vue'
    
    const props = defineProps({
        items: {
            type: Object,
            required: true
        },
        title: {
            type: String,
        }
    })
</script>