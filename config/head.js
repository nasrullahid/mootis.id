import {
  HOSTNAME,
  APP_NAME,
  DESCRIPTION,
  KEYWORDS,
  CREATOR_NAME,
  CREATOR_ALTERNATE,
  GSITE_VERIFICATION,
  FB_ADMIN_ID,
  FB_APP_ID,
  FB_PAGE_ID
} from '../constant/index'

export default {
  titleTemplate: `%s - ${APP_NAME}`,
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
      content: APP_NAME
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      property: 'og:site_name',
      content: APP_NAME
    },
    { property: 'fb:admins', content: FB_ADMIN_ID },
    {
      property: 'fb:app_id',
      content: FB_APP_ID
    },
    { property: 'fb:pages', content: FB_PAGE_ID },
    {
      name: 'google-site-verification',
      content: GSITE_VERIFICATION
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
        name: APP_NAME,
        headline: DESCRIPTION,
        description: DESCRIPTION,
        about: DESCRIPTION,
        keywords: KEYWORDS,
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
          name: APP_NAME,
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
          name: CREATOR_NAME,
          alternateName: CREATOR_ALTERNATE,
          birthDate: '1992-12-30',
          gender: { '@type': 'GenderType', alternateName: 'Male' },
          url: [`${HOSTNAME}`]
        }
      })
    }
  ]
}
