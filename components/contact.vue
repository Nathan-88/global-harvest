<template>
  <form id="contact" @submit.prevent="submitForm">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
      <input v-model="formData.name" type="text" id="name" name="name" class="border rounded w-full py-2 px-3">
    </div>

    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
      <input v-model="formData.email" type="email" id="email" name="email" class="border rounded w-full py-2 px-3">
    </div>

    <div class="mb-4">
      <label for="question" class="block text-gray-700 font-bold mb-2">Question</label>
      <textarea v-model="formData.question" id="question" name="question" rows="4" class="border rounded w-full py-2 px-3"></textarea>
    </div>

    <div class="mb-4">
      <label for="subscribe" class="block text-gray-700 font-bold mb-2">Subscribe to newsletter</label>
      <input v-model="formData.subscribe" type="checkbox" id="subscribe" name="subscribe" class="mr-2">
    </div>

    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
  </form>
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
