export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css', 'swiper/swiper-bundle.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/google-fonts'],
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
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
})
