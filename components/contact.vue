<template>
  <section id="comm" class="mx-auto max-w-md overflow-hidden rounded-lg shadow-lg md:max-w-full mb-20 ">
        <div class="flex flex-col-reverse md:grid md:grid-cols-2">
            <form id="contact" @submit.prevent="submitForm" class="p-6">
                <div class="mb-4">
                <label for="name" class="block  font-bold mb-2">Name</label>
                <input v-model="formData.name" type="text" id="name" name="name" class="border rounded w-full py-2 px-3">
                </div>

                <div class="mb-4">
                <label for="email" class="block font-bold mb-2">Email</label>
                <input v-model="formData.email" type="email" id="email" name="email" class="border rounded w-full py-2 px-3">
                </div>

                <div class="mb-4">
                <label for="question" class="block font-bold mb-2">Question</label>
                <textarea v-model="formData.question" id="question" name="question" rows="4" class="border rounded w-full py-2 px-3"></textarea>
                </div>

                <div class="mb-4">
                <label for="subscribe" class="block font-bold mb-2">Subscribe to newsletter</label>
                <input v-model="formData.subscribe" type="checkbox" id="subscribe" name="subscribe" class="mr-2">
                </div>

                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
            </form>

            <!-- contact section -->
            <div class=" md:shrink-0 text-gray-900 p-6 flex flex-col items-start  mt-6">
              <div class="p-4">
                <h2 class="text-2xl font-bold">Socials</h2>
                <div class="grid grid-cols-3 lg:flex gap-4">
                  <div class="col-span-3 pt-2 lg:mr-6 space-y-1">
                    <h1>Email</h1>
                    <p><NuxtLink to="#" class="text-red">globalharvest@email.com</NuxtLink></p>
                  </div>
                  <div class="py-2 space-y-1">
                    <h1>Instagram</h1>
                    <p class="px-2">
                      <NuxtLink href="#">
                        <img src="../assets/images/instagram.png" />
                      </NuxtLink>
                    </p>
                  </div>
                  <div class="py-2 space-y-1">
                    <h1>Facebook</h1>
                    <p class="px-2">
                      <NuxtLink href="#">
                        <img src="../assets/images/facebook.png" />
                      </NuxtLink>
                    </p>
                  </div>
                  <div class="py-2 space-y-1">
                    <h1>twitter</h1>
                    <p class="px-2">
                      <NuxtLink href="#">
                        <img src="../assets/images/twitter.png" />
                      </NuxtLink>
                    </p>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <h2 class="text-2xl font-bold">Phones</h2>
                <div class="flex gap-4">
                  <div class="py-2">
                    <h1>GH-NIGERIA</h1>
                    <p>+23456990455</p>
                  </div>
                  <div class="py-2">
                    <h1>GH-USA</h1>
                    <p>+355669455</p>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        question: '',
        subscribe: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(this.formData);
      // You can send this data to your server or API for processing
    },
  },
};
</script>
