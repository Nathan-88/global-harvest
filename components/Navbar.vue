<template>
  <header class=" relative ">
    <nav class="container bg-white flex items-center justify-between mx-auto p-1 px-2 md:px-10 max-w-full">
      <div class=" text-center">
        <NuxtLink to="/"><img class="mx-auto w-[96px] h-[auto] pt-1" src="../assets/images/global-harvest-preview.png" alt="Global Harvest Network logo" ></NuxtLink>
      </div>
      <ul class="hidden md:flex items-center space-x-8 list-none ">
          <li class="list"><NuxtLink to="/" class="font-semibold text-lg" >Home</NuxtLink></li>
          <li class="list"><NuxtLink to="/about" class="font-semibold text-lg">About</NuxtLink></li>
          <li class="list"><NuxtLink to="/blog/blog" class="font-semibold text-lg">Blog</NuxtLink></li>
          <li class="list"><NuxtLink to="/#comm" class="font-semibold text-lg">communities</NuxtLink></li>
          <li class="list"><NuxtLink to="/#gallery" class="font-semibold text-lg">Gallery</NuxtLink></li>
          <li ><NuxtLink to="/#contact"><button class="hover:bg-yellow-800 text-white font-semibold py-2 px-5 rounded-full text-lg transition duration-300 transform hover:scale-105 active:scale-90 bg-brown">Contact us</button></NuxtLink></li>
      </ul>
      <!-- Hamburger Icon -->
      <button id="menu-btn" @click="toggleMenu" :class="{ open: isMenuOpen }" class="block hamburger md:hidden focus:outline-none">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
      </button>
    </nav>
    <!-- mobile menu -->
    <div class="md:hidden absolute z-10 right-0 drop-shadow-md w-[50vw]">
      <div v-if="isMenuOpen" id="menu" class="flex flex-col items-center py-8 space-y-6 bg-white ">
        <NuxtLink @click="toggleMenu" :class="{ open: isMenuOpen }" class="list" to="/">Home</NuxtLink>
        <NuxtLink @click="toggleMenu" :class="{ open: isMenuOpen }" class="list" to="/about">About</NuxtLink>
        <NuxtLink @click="toggleMenu" :class="{ open: isMenuOpen }" class="list" to="/blog/blog">Blog</NuxtLink>
        <NuxtLink @click="toggleMenu" :class="{ open: isMenuOpen }" class="list" to="/#comm">communities</NuxtLink>
        <NuxtLink @click="toggleMenu" :class="{ open: isMenuOpen }" class="list" to="/#gallery">Gallery</NuxtLink>
        <NuxtLink @click="toggleMenu" :class="{ open: isMenuOpen }" class="list" to="/#contact">Contact</NuxtLink>
      </div>
      <div v-else id="menu" class="hidden"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
