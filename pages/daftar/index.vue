<template>
  <div class="static-page">
    <AppBreadcrumb title="Pendaftaran Member" />
    <div class="max-w-4xl ml-auto mr-auto py-12 px-4 h-screen"></div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/Layout/AppBreadcrumb'
import { HOSTNAME, APP_NAME, KEYWORDS } from '@/constant'
export default {
  name: 'Daftar',
  components: { AppBreadcrumb },
  computed: {
    imageRequired() {
      return require('@/assets/img/logo.jpg')
    }
  },
  mounted() {
    this.$fb.enable()
  },
  head() {
    return {
      title: 'Pendaftaran Member',
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'title',
          content: 'Pendaftaran Member'
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `Jadilah bagian dari ${APP_NAME}, daftar sekarang`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          property: 'keywords',
          content: `Daftar Member ${APP_NAME}, ${KEYWORDS}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Pendaftaran Member'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `Jadilah bagian dari ${APP_NAME}, daftar sekarang`
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}/daftar`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${HOSTNAME}${this.imageRequired.src}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          property: 'twitter:title',
          content: 'Pendaftaran Member'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: `Jadilah bagian dari ${APP_NAME}, daftar sekarang`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          property: 'twitter:url',
          content: `${HOSTNAME}/daftar`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          property: 'twitter:image',
          content: `${HOSTNAME}${this.imageRequired.src}`
        }
      ]
    }
  }
}
</script>
