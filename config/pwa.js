import { env } from '../constant'

export default {
  // https://pwa.nuxtjs.org/modules/meta.html
  meta: {
    name: env.appName,
    description: env.description,
    lang: 'id',
    ogHost: env.hostname,
    twitterCard: 'summary_large_image',
    twitterSite: env.twitterSite,
    twitterCreator: env.twitterCreator
  },

  // https://pwa.nuxtjs.org/modules/manifest.html
  manifest: {
    name: env.companyName,
    short_name: env.appName,
    start_url: '/?utm_source=homescreen',
    description: env.description,
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
