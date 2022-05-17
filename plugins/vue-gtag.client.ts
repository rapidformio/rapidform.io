import VueGtag, { trackRouter } from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    useDebugger: process.env.NODE_ENV !== 'production',
    isEnabled: true,
    property: {
      id: 'G-XXH9RD8W01',
      params: {
        linker: {
          domains: ['localhost:3000', 'rapidform.io']
        }
      }
    }
  })

  trackRouter(useRouter())
})
