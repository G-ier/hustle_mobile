import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - hustle',
    title: 'hustle',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://www.paypal.com/sdk/js?client-id=ARPCksi8G1iUcJY2fJeJkzPvKF0EmJiCVa4GzfbfJPKvucvg7ezxhXa88tMkK-GzmgYaCyCaw8O6p0kX&currency=USD",
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/main.css',
    './assets/main.scss'
  ],

  loading: {
    color: '#e0d500'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/countdown.js',
    '~/plugins/vue-agile',
    { src: '~/plugins/vue-stripe.client.js'},
    { src: '~/plugins/paypal.js', ssr: false },
    { src: '@/plugins/nuxt-swiper-plugin.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/auth',
    'js-cookie',
    'nuxt-buefy',
    ['nuxt-mail', {
      message: {
        to: 'ergi1000@gmail.com',
      },
      smtp: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'stinasarah121@gmail.com',
          pass: '11@235813'
        },
      },
    }]
  ],
  env: {
    STRIPE_PK: process.env.STRIPE_PK,
  },
  /* devDependencies */
  devDependencies: [
    '@nuxtjs/robots',
  ],

  // Middleware
  router: {
    middleware: ['authenticated']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    // Simple proxy
    "/api/": {
      target: "http://127.0.0.1:3333/",
      pathRewrite: { "^/api/": "" }
    }
  },

  // Robots
  robots: {
    UserAgent: '*',
    Disallow: '/account/me',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#bf081d",
          accent: colors.grey.darken3,
          secondary: '#363f4e',
          lightgray: "#d1d1d1",
          lightcyan: "#45d0e6",
          stripe1: "#635bff",
          stripe2: "#7a73ff",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      },
      options: {
        customProperties: true,
      },
    }
  },


  /* Optimized images */
  optimizedImages: {
    optimizeImages: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
    loaders:  {
      vue: {
         prettify: false
      }
    }
  }
}
