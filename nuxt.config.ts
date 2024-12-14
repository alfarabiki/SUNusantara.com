export default defineNuxtConfig({
  app: {
    head: {
      title: 'Your First Business Partner in The Export of Premium Spices',
      meta: [
        { 
          name: 'description', 
          content: 'Sumber Daya Unggul Nusantara - Your trusted partner in exporting premium spices like Cocofiber, Cocopeat, Black Pepper, and Turmeric, adhering to international standards.' 
        },
        { 
          name: 'keywords', 
          content: 'Cocofiber, Cocopeat, Black Pepper, Turmeric, Premium Spices Export, Agriculture Commodities, International Trade, Indonesian Products, Sumber Daya Unggul Nusantara, SDU Nusantara, PT.Sumber Daya Unggul Nusantara' 
        },
        { 
          name: 'author', 
          content: 'Sumber Daya Unggul Nusantara' 
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
