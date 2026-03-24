// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/sanity'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  googleFonts: {
    families: {
      Outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Open Sans': [300, 400, 500, 600, 700, 800]
    },
    display: 'swap',
    preconnect: true,
    download: true, 
  }
})