<template>
  <swiper :slides-per-view="3" :space-between="10" :navigation="true" :pagination="{ el: '.swiper-pagination' }" class="w-full h-[300px]">
    <swiper-slide v-for="item in items" :key="item.id">
      <img :src="`_nuxt/assets/images/` + item.image" alt="Item image">
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    id: 1,
    image: 'gal.png',
  },
  {
    id: 2,
    image: 'gal.png',
  },
  {
    id: 3,
    image: 'gal3.png',
  },
]);
</script>