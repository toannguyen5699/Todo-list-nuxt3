// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  nitro: {
    externals: {
      inline: ["uuid"],
    },
  },
  // modules: ["cookie-universal-nuxt"],
});
