// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:4000',
    }
  },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/sanity', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  sanity: {
    projectId: 'nhw1hulo',
    dataset: 'production',
    visualEditing: {
      token: process.env.NUXT_SANITY_API_TOKEN,
      studioUrl: process.env.NUXT_STUDIO_URL,
      stega: false
    }
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