<template>
  <section id="gallery" class="w-full pt-4 overflow-hidden">
    <h2 class="text-center py-6 font-bold text-3xl sm:text-4xl">GALLERY</h2>
      <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
      :slides-per-view="'auto'"
      :centered-slides="true"
      :grab-cursor="true"
      :pagination="{clickable: true}"
      :loop="true"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :effect="'coverflow'"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      >
      <SwiperSlide v-for="item in items" :key="item.id" class="shadow-lg rounded-lg">
        <img :src="`_nuxt/assets/images/` + item.image"  class="object-cover rounded-lg " alt="Item image" />
      </SwiperSlide>
    </Swiper>
    </section>
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

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
  /* height: auto; */
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>


