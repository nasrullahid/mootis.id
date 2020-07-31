import {
  HOSTNAME,
  APP_NAME,
  COMPANY_NAME,
  DESCRIPTION,
  TWITTER_CREATOR,
  TWITTER_SITE
} from '../constant'

export default {
  // https://pwa.nuxtjs.org/modules/meta.html
  meta: {
    name: APP_NAME,
    description: DESCRIPTION,
    lang: 'id',
    ogHost: HOSTNAME,
    twitterCard: 'summary_large_image',
    twitterSite: TWITTER_SITE,
    twitterCreator: TWITTER_CREATOR
  },

  // https://pwa.nuxtjs.org/modules/manifest.html
  manifest: {
    name: COMPANY_NAME,
    short_name: APP_NAME,
    start_url: '/?utm_source=homescreen',
    description: DESCRIPTION,
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
