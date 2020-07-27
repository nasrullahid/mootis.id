import { isDev } from './utils'
import { head, modules, /*feed, sitemap,*/ pwa, build, hooks } from './config'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  /**
   * Modern mode on production
   */
  modern: !isDev,

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head,

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'var(--text-normal)',
    failedColor: '#EF5753'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/animated.css', 'swiper/swiper-bundle.css'],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // Doc: https://github.com/surmon-china/vue-awesome-swiper#readme
    { src: '@/plugins/components.ssr', ssr: false },
    '@/plugins/vue-lazyload',
    '@/plugins/components.client',
    '@/plugins/components'
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */

  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],

  /**
   * Tailwind CSS configuration
   */
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    purgeCSSInDev: true
  },

  /**
   * Stylelint configuration
   */
  stylelint: {
    fix: true
  },

  /*
   ** Nuxt.js modules
   */
  modules,

  /**
   * Feed configuration
   */
  // feed,

  /**
   * Sitemap configuration
   */
  // sitemap,

  /**
   * PWA configuration
   */
  pwa,

  /*
   ** Build configuration
   */
  build,

  /**
   * Listener to Nuxt event to generate amp version of all pages
   */
  hooks
}
