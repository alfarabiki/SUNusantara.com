export default defineNuxtConfig({
  app: {
    head: {
      title: 'Your First Business Partner in The Export of Premium Spices',
      meta: [
        { 
          name: 'description', 
          content: 'Your trusted partner in exporting premium spices. We deliver high-quality export services to meet the demands of the global market.' 
        },
        { 
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' 
        },
      ],
      link: [
        { rel: 'icon', type: '/image/x-icon', href: '/logo.webp' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css', 'swiper/swiper-bundle.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/google-fonts','@nuxt/image'],
  image: {
    alias: {
      assets: '/assets',
    },
    formats: ['webp', 'jpg', 'png'],
    presets: {
      default: {
        modifiers: {
          loading: 'lazy',
        },
      },
    },  
  },
  googleFonts: {
    families: {
      'Macondo Swash Caps': [400],
      'Open+Sans': [100, 300, 400, 500, 700, 900],
      'Libre' : [200],
      'San Fransisco' : [500],
      'Poppins' : [400]
    },
    subsets: ['latin'],
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
})
