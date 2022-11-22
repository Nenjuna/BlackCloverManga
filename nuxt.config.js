const d = require('./static/black_clover_mangas.json')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Read Black Clover Manga Online - Free Latest Episodes',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Read Black Clover Manga online - Free Manga reader, Black Clover - New Episodes',
      },
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
  plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],

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
  robots: [
    {
      UserAgent: '*',
      Disallow: '',
    },
    {
      UserAgent: '*',
      Allow: '/sitemap.xml',
    },
  ],
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

      const res = Object.entries(response).map((v) =>
        v[0].replace(/ /g, '_').toLowerCase().replace('black_clover,_', '')
      )

      const objs = res.map((v) => ({
        url: v,
        changefreq: 'daily',
        priority: 1,
        lastmodISO: Date.now(),
      }))

      // console.log(objs)
      return objs
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
