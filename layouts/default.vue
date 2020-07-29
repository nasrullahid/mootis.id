<template>
  <div id="top" class="mx-auto w-full">
    <AppTopNav :office-time="officeTime" :social-network="socialNetwork" />
    <AppHeader :logo="logo" :menu="menu" />
    <div class="content-wrapper">
      <Nuxt />
    </div>
    <AppFooter :contact="contact" :social-network="socialNetwork" />
    <AppToTop />
    <AppSwitchTheme v-model="isDark" />
  </div>
</template>

<script>
import AppToTop from '@/components/AppToTop'
import AppSwitchTheme from '@/components/AppSwitchTheme'
import AppTopNav from '@/components/Layout/AppTopNav'
import AppHeader from '@/components/Layout/AppHeader'
import AppFooter from '@/components/Layout/AppFooter'

const Cookie = process.client ? require('js-cookie') : undefined
export default {
  components: {
    AppToTop,
    AppSwitchTheme,
    AppTopNav,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      isDark: false,
      officeTime: 'Senin-Sabtu: 08.00-16.00',
      socialNetwork: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/airportcityresidence.mks/'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/airportcityresidence.mks/'
        },
        {
          name: 'youtube',
          link: 'https://www.youtube.com/channel/UCIpvGTTLU-eGBCM7iWCPvrg'
        }
      ],
      logo: '/logo.png',
      menu: [
        { path: '/tentang-kami', name: 'Tentang Kami', icon: 'user-friends' },
        { path: '/properti', name: 'Properti', icon: 'house-user' },
        { path: '/artikel', name: 'Artikel', icon: 'newspaper' },
        { path: '/bantuan', name: 'Bantuan', icon: 'question-circle' }
      ],
      contact: {
        address: 'Jl. Ayah Syeh Yusuf, Moncongloe Lappara, Kec. Moncongloe',
        region: 'Sulawesi Selatan',
        postalCode: 90212,
        phone: '+62 811-757575-6',
        email: 'info@medinaland.id'
      }
    }
  },
  mounted() {
    this.initColorScheme()
  },
  methods: {
    initColorScheme() {
      const isDark = Cookie.get('d')
      if (isDark) {
        if (parseInt(isDark)) {
          this.isDark = true
        }
      } else if (
        window.matchMedia('(prefers-color-scheme)').media !== 'not all'
      ) {
        const darkModeMediaQuery = window.matchMedia(
          '(prefers-color-scheme: dark)'
        )
        if (darkModeMediaQuery.matches) {
          this.isDark = true
        }
        darkModeMediaQuery.addListener((e) => {
          const darkModeOn = e.matches
          this.isDark = darkModeOn
        })
      }
    }
  },
  head() {
    return {
      title: process.env.COMPANY_NAME,
      bodyAttrs: {
        class: this.isDark ? 'dark' : 'light'
      }
    }
  }
}
</script>
