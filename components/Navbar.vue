<template>
    <nav class="container mx-auto px-2 md:px-10 bg-white flex items-center justify-between  max-w-full p-1 shadow-sm fixed top-0 left-0 z-50 ">
        <div class=" text-center pb-1">
        <NuxtLink to="/"><img class="mx-auto" src="../assets/images/icon.png" alt="Global Harvest Network logo" ></NuxtLink>
        <p class="text-xs md:text-sm font-bold">Global Harvest Network</p>
        </div>
        <ul class="hidden md:flex items-center space-x-8 text-md">
            <li class="list"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="list"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="list"><a href="#comm">communities</a></li>
            <li class="list"><a href="#gallery">Gallery</a></li>
            <li ><button class="hover:bg-yellow-800 text-white font-semibold py-2 px-5 rounded-full text-lg transition duration-300 transform hover:scale-105 bg-browncolor">contact us</button></li>
        </ul>
    </nav>
</template>

