<template>
  <!-- action="https://formspree.io/f/mvojnayn"
  method="POST" -->
  <section id="comm" class="mx-auto max-w-md overflow-hidden rounded-lg pt-12 lg:mt-6 md:max-w-full mb-20">
        <div class="flex flex-col-reverse md:flex-row lg:grid lg:grid-cols-2">
            <div class="px-6 w-full md:pr-0 lg:pr-6">
              <form id="contact" @submit.prevent="onSubmit" class="sm:p-6 lg:shadow-md rounded-lg">
                  <h2 class="py-4 text-center md:text-start text-2xl font-bold">CONTACT US</h2>
                  <!-- forms names -->
                  <div class="mb-4">
                  <label for="name" class="block font-bold mb-2">Name</label>
                  <input v-model="name" type="text" id="name" name="name"  required class="border rounded w-full py-2 px-3">
                  </div>

                  <div class="mb-4">
                  <label for="email" class="block font-bold mb-2">Email</label>
                  <input v-model="email" type="email" id="email" name="email" required class="border rounded w-full py-2 px-3">
                  </div>

                  <div class="mb-4">
                  <label for="question" class="block font-bold mb-2">Question</label>
                  <textarea v-model="question" id="question" name="question" rows="4" required class="border rounded w-full py-2 px-3"></textarea>
                  </div>

                  <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 active:scale-90">Submit</button>
              </form>
            </div>

            <!-- contact section -->
            <div class=" md:shrink-0 text-gray-900 p-2 ">
              <h2 class="text-center md:text-start text-2xl px-4 sm:px-0 py-4 pt-8 font-bold">OUR REGIONS</h2>
              <img src="../assets/images/map_nw.jpg" class="md:w-[500px] lg:w-full lg:h-[400px] md:h-[350px]" />

            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      question: '',
    };
  },
  methods: {
      onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        question: this.question,
      };

      axios.post('/api/send-mail', formData)
      .then(() => {
        console.log('Email sent sucessfully');
        alert('Your message has been sent successfully!');
        this.name ='';
        this.email = '';
        this.question = '';
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending your message. Please try again later.');
      });
    },
  },
};
</script>