<template>
    <!-- grid md:grid-cols-4 space-x-4 p-6 space-y-4 bg-black text-white -->
    <div class="bg-black flex flex-col-reverse max-[760px]:items-center justify-between px-4 py-1 md:py-8 mx-auto space-y-8 md:flex-row md:space-y-0">
        <!-- logo and social links container -->
        <div class="flex flex-col items-center justify-between max-[480px]:my-6 space-y-6 md:space-y-0 md:items-start">
            <!-- copy rights only on phone screen -->
            <!-- logo -->
            <div class="pb-1">
                <NuxtLink to="/"><img class="md:mx-auto h-32" src="../assets/images/global-harvest-preview.png" alt="Global Harvest Network logo" ></NuxtLink>
                <p class="text-xs text-white md:text-sm font-bold">Global Harvest & Network</p>
            </div>
            <!-- Social Links Container -->
            <div class="flex md:justify-center md:mx-auto space-x-6 pb-2 md:pt-4">
                <!-- Link 1 -->
                <NuxtLink href="https://m.facebook.com/p/Global-Harvest-Network-61553665675623" target="_blank" class=" active:scale-90">
                    <img src="../assets/images/facebook.png" />
                </NuxtLink>
                <!-- Link 2 -->
                <NuxtLink href="#" class="active:scale-90">
                    <img src="../assets/images/x.png" />
                </NuxtLink>
                <!-- Link 3 -->
                <NuxtLink href="https://www.instagram.com/globalharvestnetwork?igshid=bHh1djM3MDNxMzRt" target="_blank" class=" active:scale-90">
                    <img src="../assets/images/instagram.png" />
                </NuxtLink>
            </div>
            <div class="mx-auto text-center text-white md:hidden">
                Copyright &copy; 2023, All Rights Reserved
            </div>
        </div>
        <!-- List containers -->
        <div class=" text-white md:pt-4 md:hidden lg:block">
            <ul class="list-none w-fit flex flex-col justify-around items-center space-y-4">
            <li class="list"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="list"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="list"><NuxtLink to="/blog/blog">Blog</NuxtLink></li>
            <li class="list"><NuxtLink to="/#comm">Communities</NuxtLink></li>
            <li class="list"><NuxtLink to="/#gallery">Gallery</NuxtLink></li>
            </ul>
        </div>
        <!-- contacts -->
        <div class=" text-white flex flex-col justify-around space-y-2">
            <p>GHN-NIGERIA: Null</p>
            <p>GHN-USA: Null</p>
            <p>GHN-UK: Null</p>
            <p>GHN-CANADA: Null</p>
        </div>
        <!-- input container -->
        <div class="flex md:flex-col justify-between">
            <subscribe />
            <div class="hidden text-white md:block">
                Copyright &copy; 2023, All Rights Reserved
            </div>
        </div>
    </div>
</template>