const config = require('./config.json')[process.env.NODE_ENV]

console.log(config)
export default {
  mode: 'universal',
  server: {
    port: config.port
},
  /*
   ** Headers of the page
   */
  head: {
    title: 'Coding Blocks Online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.'
      }
    ],
    link: [{
      rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico',
      rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png',
      rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png',
      rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png',
      rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png',
      rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png',
      rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png',
      rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png',
      rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png',
      rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png',
      rel: 'icon', type: 'image/png', sizes: '192x192', hre: '/favicons/android-icon-192x192.png',
      rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png',
      rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png',
      rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png',
      rel: 'manifest', href: '/favicons/manifest.json',
    },
      { rel: 'stylesheet', type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' }
    ],
    script: [
      { src: 'https://hack.codingblocks.com/index.js' },
      { src: 'https://unpkg.com/@coding-blocks/web-components@0.0.9/dist/index.js' },
      { src: 'https://code.jivosite.com/widget.js', 'data-jv-id': 'ASYGLZQ6UC' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#f2734c',
    failedColor: 'red',
    height: '3px'
  },
  /*
   ** Global CSS
   */
  css: [
    { src: '@coding-blocks/motley/dist/online-cb/app.min.css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/jsonapi-datastore.js',
    '~/plugins/vuency.js',
    '~/plugins/axios.js',
    '~/plugins/jsonld.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    
    '@nuxtjs/gtm',

  ],
  gtm: { id: config.gtm, dev: process.env.NODE_ENV == 'development' },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'UA-83327907-12',
    debug: process.env.NODE_ENV == 'development' , // enable to track in dev mode
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: config.axios,
  /*
  ** Middlewares
  **
  */
  router: {
    middleware: ['setup_cbutm', 'auth', 'redirectLoggedInHome']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    babel: {
      plugins: [
        ["@babel/plugin-proposal-optional-chaining"]
      ]
    }
  }
}
