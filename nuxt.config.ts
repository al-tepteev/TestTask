import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-03-20',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  
  css: ['~/assets/style/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
