// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiBackUrl: process.env.API_BACK_URL
    }
  }
})
