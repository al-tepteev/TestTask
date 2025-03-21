import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  css: ['~/assets/style/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
