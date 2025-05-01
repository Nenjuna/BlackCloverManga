const d = require('./static/black_clover_mangas.json')

import { defineNuxtConfig } from '@nuxt/bridge'

export default {
  target: 'static',
  bridge: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s',
    bodyAttrs: { class: 'antialiased text-slate-400 bg-slate-900' },
    title: 'Read Black Clover Manga Online - Free Latest Episodes',
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1212734777585446',
        async: true,
        crossorigin: 'anonymous',
      },
    ],
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
      {
        name: 'keywords',
        content: `Black Clover Manga Free, Black Clover Manga Reddit, Black Clover Manga Release Date, Black Clover Manga Latest Chapter, Black Clover Manga, Black Clover, Free Manga Reader | ReadBlackClover.vercel.app`,
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
    '@nuxtjs/robots',
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
  ],
  gtm: {
    id: 'G-X9382KE4PV',
  },
  robots: {
    UserAgent: '*',
    Disallow: '/user',
  },
  sitemap: {
    hostname: 'https://readblackclover.vercel.app/',
    // lastmod: new Date(),
    lastmod: new Date(),
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
  routeRules: {
       '/': {
         redirect: {
           to: 'https://mangafoxy.com/black-clover',
           statusCode: 301
         }
       }
     }
}
