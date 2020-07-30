import { env } from '../constant'

export default {
  titleTemplate(title) {
    if (title) {
      return `${title} - ${env.appName}`
    }
    return env.appName
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      property: 'og:image:alt',
      content: env.appName
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      property: 'og:site_name',
      content: env.appName
    },
    { property: 'fb:admins', content: env.fbAdminId },
    {
      property: 'fb:app_id',
      content: env.fbAppId
    },
    { property: 'fb:pages', content: env.fbPageId },
    {
      name: 'google-site-verification',
      content: env.gsiteVerification
    }
  ],
  link: [
    {
      type: 'text/plain',
      rel: 'author',
      href: `${env.hostname}/humans.txt`
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.gstatic.com'
    }
  ],
  // Taken from: https://github.com/manniL/lichter.io/blob/master/config/head.js
  __dangerouslyDisableSanitizers: ['script'],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: env.appName,
        headline: env.description,
        description: env.description,
        about: env.description,
        keywords: env.keywords,
        copyrightYear: new Date().getFullYear(),
        dateCreated: '2020-07-27',
        inLanguage: ['Bahasa Indonesia'],
        isAccessibleForFree: 'true',
        isFamilyFriendly: 'true',
        license: 'https://opensource.org/licenses/MIT',
        image: {
          '@type': 'imageObject',
          url: `${env.hostname}/icon.png`,
          width: '2739',
          height: '3102'
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${env.hostname}`
        },
        publisher: {
          '@type': 'Organization',
          name: env.appName,
          sameAs: 'https://www.facebook.com/nasrullah.web.id',
          logo: {
            '@type': 'imageObject',
            url: `${env.hostname}/icon.png`,
            width: '2739',
            height: '3102'
          }
        },
        creator: {
          '@type': 'Person',
          name: env.creatorName,
          alternateName: env.creatorAlternate,
          birthDate: '1992-12-30',
          gender: { '@type': 'GenderType', alternateName: 'Male' },
          url: [`${env.hostname}`]
        }
      })
    }
  ]
}
