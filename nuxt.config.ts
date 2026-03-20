// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@nuxtjs/sanity'],
  css: ['~/assets/css/main.css'],
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