import { Configuration } from '@nuxt/types';
import ApiProxyMiddleware from './server/proxy/api-proxy';
import DownloadProxyMiddleware from './server/proxy/download-proxy';
import { AppConfigs } from './server/configs/app.config';
import CustomRouter from './router/routing';
import { i18nConfig } from './i18n';

const config: Configuration = {
  mode: 'universal',

  server: {
    port: AppConfigs.UI_PORT, 
    host: AppConfigs.UI_HOST
  },

    /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titleChunk: string) => {
        return titleChunk ? `${titleChunk} - Boilerplate` : 'Boilerplate';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f39800', duration: 10000 },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'animate.css/animate.min.css',
    '~/assets/css/common.css',
  ],

  router: CustomRouter,

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n/i18n',
    '~/plugins/global',
    '~/plugins/axios/axios',
    '~/plugins/filters/index',
    { src: 'plugins/v-owl-carousel/v-owl-carousel.ts', ssr: false },
    { src: 'plugins/wow/wow.ts', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', i18nConfig],
    // reference: https://github.com/vaso2/nuxt-fontawesome
    ['nuxt-fontawesome', {
        component: 'fa', 
        imports: [
          //import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
        ]
    }],
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://' + AppConfigs.UI_HOST + ':' + AppConfigs.UI_PORT,
    browserBaseURL: (AppConfigs.AXIOS_BROWSER_HTTPS ? 'https://' : 'http://') +
                    AppConfigs.AXIOS_BROWSER_HOST + ':' + AppConfigs.AXIOS_BROWSER_PORT
  },

  serverMiddleware: [
    DownloadProxyMiddleware,
    ApiProxyMiddleware
  ],

  /*
  ** Build configuration
  */
  build: {
    additionalExtensions: ['ts', 'tsx'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}

export default config
