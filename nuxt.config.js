const d = require('./static/black_clover_mangas.json')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Read Black Clover Manga Online',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'google-site-verification',
        content: '9cKvHaIcmw5VmtH34TUJxEuhdIpS_zK4hOdf3KLVUzc',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css', '@/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  robots: {
    UserAgent: '*',
    Disallow: '',
  },
  sitemap: {
    hostname: 'https://readblackclover.vercel.app/',
    // lastmod: new Date(),
    lastmod: '2017-06-30',
    cacheTime: 1000 * 60 * 45,
    routes: async () => {
      let response = Object.fromEntries(
        Object.entries(d).sort((a, b) => {
          return (
            b[0].replace('Black Clover, Chapter ', '') -
            a[0].replace('Black Clover, Chapter ', '')
          )
        })
      )
      // console.log(response)
      return Object.entries(response).map((v) =>
        v[0].replace(/ /g, '_').toLowerCase().replace('black_clover,_', '')
      )
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
