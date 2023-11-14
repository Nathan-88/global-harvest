<template>
  <div class="w-full lg:bg-bible ">
      <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperScrollbar, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :pagination="{clickable: true}"
      :loop="true"
      :navigation ="{clickable: true}"
      :space-between="10"
      :effect="'creative'"
      :scrollbar="{ draggable: true }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    class="flex justify-center items-center  lg:w-[50%]">
      <SwiperSlide v-for="item in items" :key="item.id" class="">
        <img :src="`_nuxt/assets/images/` + item.image"  class="w-[100vw] object-cover h-[400px]" alt="Item image" />
      </SwiperSlide>
    </Swiper>
    </div>
</template>

<script setup>

const items = ref([
  { id: 1, image: 'gal.png' },
  { id: 2, image: 'gal2.png' },
  { id: 3, image: 'gal3.png' },
  { id: 4, image: 'about1.webp' },
  { id: 5, image: 'gal5.webp' },
]);
</script>


