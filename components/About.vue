<template>
  <section class="mx-auto mb-10 flex flex-col overflow-hidden text-center items-center justify-center md:my-10">
    <div class="mx-auto mb-16">
        <h2 class="text-xl font-bold px-15 py-10 md:text-5xl">About Global Harvest Network</h2>
        <p class="max-w-sm text-center"></p>
        <!-- button -->
        <NuxtLink to="/about" class="hidden md:block"><button class="hover:bg-yellow-800 text-white font-bold p-2 px-4 text-lg transition duration-1000 hover:translate-y-2 hover:scale-110 bg-brown  rounded-lg focus:outline-none focus-visible:ring">Learn more</button></NuxtLink>
    </div>
    <!--three images -->
    <div class="mx-auto md:flex space-y-6  space-x-6 md:space-y-0">
        <div class="lg:shrink-0 relative">
                <img class="h-auto w-full rounded-lg obect-cover" src="../assets/images/Rectangle 2.png" alt="community picture" />
                <div class="md:hidden opacity:80 p-1 px-3 hover:bg-white border-double border-2 border-brown rounded-md absolute top-[50%] left-[30%] transition duration-1000 hover:translate-y-2 hover:scale-110">
                    <NuxtLink to="/about" class="font-bold text-xl text-brown">Learn more <span class="ml-1 text-xl text-center ">&#187</span></NuxtLink>
                </div>
        </div>
        <div class="hidden md:inline-block lg:shrink-0">
                <img class="h-auto w-full rounded-lg obect-cover" src="../assets/images/Rectangle 11.png" alt="community picture" />
        </div>
        <div class="hidden lg:inline-block lg:shrink-0">
                <img class="h-auto w-full rounded-lg obect-cover" src="../assets/images/Rectangle 3.png" alt="community picture" />
        </div>    
    </div>

    
  </section>
</template>