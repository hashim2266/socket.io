// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@vercel/speed-insights/nuxt'],
  devtools: {
    enabled: true
  },
  nitro: {
    experimental: {
      websocket: true
    },
  }
})
