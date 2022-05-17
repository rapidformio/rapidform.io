import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  module: [
    '@nuxt/postcss8',
  ],
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/fonts.css',
  ],
  head: {
    title: 'Rapidform',
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
  },
})
