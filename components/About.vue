<template>
  <section class="mx-auto flex flex-col overflow-hidden text-center items-center justify-center my-16 md:my-24">

    <div class="mx-auto mb-16">
      <!-- pic and text -->
      <div class="text-start md:grid md:content-center grid-cols-2 gap-x-12 mx-auto">
        <div class="clips hidden lg:block">
          <img class="rounded-lg object-cover h-[530px] object-center" src="../assets/images/about.webp"/>
        </div>
        <div class="hidden md:block lg:hidden">
          <img class="rounded-lg h-[630px] object-cover object-center" src="../assets/images/about.webp"/>
        </div>
        <div class="text-gray-950 lg:grid content-center">
          <h2 class="text-3xl font-bold pb-4 md:text-3xl">About Global Harvest Network</h2>
          <p class="max-w-full">At Global Harvest Network, we
          exist to empower and uplift believers who have embarked on the courageous
          journey of living out their faith in a foreign country. Global Harvest
          Network is not just an outreach; its rather a family of believers committed to
          walking the faith journey together. . We invite you to become a part of our community, connect with Christians from around the world, and discover the strength that comes from unity in Christ. No matter where you are, your faith can flourish. Let Global Harvest Network be your guide as you live out your Christian calling in a diverse and dynamic world.</p>
          <p class="hidden md:block mt-4">
            Together, We Harvest Faith Across Continents with the commitment to building a strong global homogeneous community of believers who share a common bond in Christ until we all come to the point where we are referred to as homeostasis sect that remain relatively constant despite changes in our external environment…
          </p>
        </div>
      </div>
        
        <!-- button -->
        <NuxtLink to="/about" class="hidden md:mt-12  md:block"><button class="hover:bg-comcolor font-bold p-2 px-4 text-lg transition duration-1000 hover:translate-y-2 hover:scale-110 text-linear rounded-lg focus:outline-none focus-visible:ring">Learn more &#187</button></NuxtLink>
    </div>
    <!--three images -->
    <div class="mx-auto md:flex space-y-6  space-x-6 md:space-y-0">
        <div class="lg:shrink-0 relative">
                <img class="h-auto w-full rounded-lg obect-cover" src="../assets/images/Rectangle 2.png" alt="community picture" />
                <div class="md:hidden p-1 px-3 rounded-md absolute bottom-0 w-full bg-black bg-opacity-20 p-6 text-white ">
                    <NuxtLink to="/about" class="font-bold text-xl">Learn more <span class="ml-1 text-xl text-center ">&#187</span></NuxtLink>
                </div>
        </div>
        <div class="hidden md:inline-block lg:shrink-0">
                <img class="h-auto w-full rounded-lg obect-cover" src="../assets/images/Rectangle 11.png" alt="community picture" />
        </div>
        <div class="hidden lg:inline-block lg:shrink-0">
                <img class="h-auto w-full rounded-lg obect-cover" src="../assets/images/Rectangle3.png" alt="community picture" />
        </div>    
    </div>
    <hr>
  </section>
  
</template>