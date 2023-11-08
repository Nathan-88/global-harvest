<template>
    <header class="container relative ">
        <nav class="container bg-white flex items-center justify-between mx-auto p-1 shadow-sm px-2 md:px-10 max-w-full fixed top-0 left-0 z-50 ">
            <div class=" text-center">
              <NuxtLink to="/"><img class="mx-auto w-[96px] h-[auto] pt-1" src="../assets/images/global-harvest-preview.png" alt="Global Harvest Network logo" ></NuxtLink>
            </div>
            <ul class="hidden md:flex items-center space-x-8 text-md list-none">
                <li class="list"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="list"><NuxtLink to="/about">About</NuxtLink></li>
                <li class="list"><NuxtLink to="/#comm">Blog</NuxtLink></li>
                <li class="list"><NuxtLink to="/#comm">communities</NuxtLink></li>
                <li class="list"><NuxtLink to="/#gallery">Gallery</NuxtLink></li>
                <li ><NuxtLink to="#contact"><button class="hover:bg-yellow-800 text-white font-semibold py-2 px-5 rounded-full text-lg transition duration-300 transform hover:scale-105 bg-brown">contact us</button></NuxtLink></li>
            </ul>
            <!-- Hamburger Icon -->
            <button id="menu-btn" @click="toggleMenu" :class="{ open: isMenuOpen }" class="block hamburger md:hidden focus:outline-none">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>
        </nav>
        <!-- mobile menu -->
      <div class="md:hidden pt-4">
        <div v-if="isMenuOpen" id="menu" class="flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right- drop-shadow-md">
          <NuxtLink class="list" to="/">Home</NuxtLink>
          <NuxtLink class="list" to="/about">About</NuxtLink>
          <NuxtLink class="list" to="/blog">Blog</NuxtLink>
          <NuxtLink class="list" to="/#comm">communities</NuxtLink>
          <NuxtLink class="list" to="/#Gallery">Gallery</NuxtLink>
          <NuxtLink class="list" to="/#contact">Contact</NuxtLink>
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







