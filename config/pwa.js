import { HOSTNAME } from '../constant'

export default {
  // https://pwa.nuxtjs.org/modules/meta.html
  meta: {
    name: process.env.APP_NAME,
    description: process.env.DESCRIPTION,
    lang: 'id',
    ogHost: `${HOSTNAME}`,
    twitterCard: 'summary_large_image',
    twitterSite: process.env.TWITTER_SITE,
    twitterCreator: process.env.TWITTER_CREATOR
  },

  // https://pwa.nuxtjs.org/modules/manifest.html
  manifest: {
    name: process.env.COMPANY_NAME,
    short_name: process.env.APP_NAME,
    start_url: '/?utm_source=homescreen',
    description: process.env.DESCRIPTION,
    lang: 'id',
    background_color: '#edf2f7',
    theme_color: '#2a4365'
  },

  // https://pwa.nuxtjs.org/modules/workbox.html
  workbox: {
    offlineAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: 'https://ajax.cloudflare.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://d33wubrfki0l68.cloudfront.net/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://cdn.ampproject.org/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://firestore.googleapis.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://www.google.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://www.gstatic.com/.*',
        handler: 'staleWhileRevalidate'
      }
    ]
  }
}
