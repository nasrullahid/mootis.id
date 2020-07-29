import { HOSTNAME } from '../constant'

export default {
  titleTemplate(title) {
    if (title) {
      return `${title} - ${process.env.APP_NAME}`
    }
    return process.env.APP_NAME
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
      content: process.env.APP_NAME
    },
    { property: 'fb:admins', content: process.env.FB_ADMIN },
    {
      property: 'fb:app_id',
      content: process.env.FB_APPID
    },
    { property: 'fb:pages', content: process.env.FB_PAGE },
    {
      name: 'google-site-verification',
      content: process.env.GSITE_VERIFICATION
    }
  ],
  link: [
    {
      type: 'text/plain',
      rel: 'author',
      href: `${HOSTNAME}/humans.txt`
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
        name: process.env.APP_NAME,
        headline: process.env.DESCRIPTION,
        description: process.env.DESCRIPTION,
        about: process.env.DESCRIPTION,
        keywords: process.env.KEYWORDS,
        copyrightYear: new Date().getFullYear(),
        dateCreated: '2020-07-27',
        inLanguage: ['Bahasa Indonesia'],
        isAccessibleForFree: 'true',
        isFamilyFriendly: 'true',
        license: 'https://opensource.org/licenses/MIT',
        image: {
          '@type': 'imageObject',
          url: `${HOSTNAME}/icon.png`,
          width: '2739',
          height: '3102'
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${HOSTNAME}`
        },
        publisher: {
          '@type': 'Organization',
          name: process.env.APP_NAME,
          sameAs: 'https://www.facebook.com/nasrullah.web.id',
          logo: {
            '@type': 'imageObject',
            url: `${HOSTNAME}/icon.png`,
            width: '2739',
            height: '3102'
          }
        },
        creator: {
          '@type': 'Person',
          name: process.env.CREATOR_NAME,
          alternateName: process.env.CREATOR_ALTERNATE,
          birthDate: '1992-12-30',
          gender: { '@type': 'GenderType', alternateName: 'Male' },
          url: [`${HOSTNAME}`]
        }
      })
    }
  ]
}
