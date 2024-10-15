// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@privyid/persona", "@privyid/persona-icon", "@nuxtjs/tailwindcss", '@vueuse/nuxt'],
  alias: {
    interactjs: "interactjs",
    "@testing-library/user-event": "@testing-library/user-event",
    "@jill64/universal-sanitizer": "@jill64/universal-sanitizer",
    webfontloader: "webfontloader",
    zxcvbn: "zxcvbn",
    "pdfjs-dist": "pdfjs-dist",
    "pdfjs-dist/web/pdf_viewer": "pdfjs-dist/web/pdf_viewer",
    vuedraggable: "vuedraggable",
  },
  vite: {
    optimizeDeps: { include: ["scroll-into-view"] },
  },
  imports: {
    presets: [
      {
        from: '@privyid/persona/core',
        imports: ['defineTable', 'defineAsyncAdapter']
      }
    ]
  }
});
