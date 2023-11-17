// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "nuxt-swiper"],
  swiper: {
    styleLang: 'css',
  },
  runtimeConfig: {
    public:{
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    }
  }
  // ssr: false,
  // spaLoadingTemplate: 'spa-loading-template.html',


})
