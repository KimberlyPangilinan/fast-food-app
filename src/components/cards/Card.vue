<template>
  <div
    class="relative flex flex-col justify-end p-2 border rounded-2xl min-h-[16vh] bg-cover"
    :style="`background-image: url('${props.item.img}');height: ${props.height}; min-width: ${props.width};`"
  >
    <ion-text class="text-lg text-white">{{ props.item.name }}</ion-text>
    <ion-text class="text-xs text-white" v-show="props.item.total"
      >{{ props.item.total }} recipes</ion-text
    >
  </div>
</template>
<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  height: {
    type: String,
    required: true,
    default: "none",
  },
  width: {
    type: String,
    required: true,
    default: "56%",
  },
});
</script>
