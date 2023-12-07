<template>
    <form id="Subscribe" @submit.prevent="OnSubscribe">
        <div class="flex space-x-3 w-full">
            <input v-model="email" type="email" id="email" name="email" class="px-5 w-[100%] rounded-full focus:outline-none" placeholder="Enter your email" required @input="validateEmail" />
            <button class="px-5 py-2 rounded-full bg-brown text-white active:bg-amber-700 focus:outline-none">Subscribe</button>

        </div>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            isValidEmail: true,
        };
    },
    methods: {
        validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
        this.isValidEmail = emailRegex.test(this.email);
        },
        OnSubscribe(){
            if (this.isValidEmail) {
                const subData = {
                email: this.email,
                };

                axios.post('/api/mailchimp', subData)
                .then((response) => {
                    if (response.data.success) {
                        alert('subscription successful!');
                        this.email = '';
                    }else {
                        if (response.data.error === 'User is already subscribed') {
                            alert('You are already subscribed to our newsletter');
                            this.email = '';
                        } else {
                            alert('An error occurred. Please try again later.');
                            this.email = '';
                            console.error('Server-side error:', response.data.error);
                        }
                        }
                    })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
                } else {
        alert('Please enter a valid email address before submitting');
      }
    },
    },
};
</script>