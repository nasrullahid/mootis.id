<template>
  <div class="static-page">
    <AppBreadcrumb title="Login Admin / Marketing" />
    <div class="max-w-4xl ml-auto mr-auto py-12 px-4 h-screen"></div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/Layout/AppBreadcrumb'
import { HOSTNAME } from '~/constant'
export default {
  name: 'Login',
  components: { AppBreadcrumb },
  computed: {
    imageRequired() {
      return require('~/assets/img/logo.jpg')
    }
  },
  mounted() {
    this.$fb.enable()
  },
  head() {
    return {
      title: 'Login',
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'title',
          content: `Login - ${process.env.APP_NAME}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `Login - ${process.env.DESCRIPTION}`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          property: 'keywords',
          content: `Login - ${process.env.KEYWORDS}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `Login - ${process.env.APP_NAME}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `Login - ${process.env.DESCRIPTION}`
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}/login`
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
          content: `Login - ${process.env.APP_NAME}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: `Login - ${process.env.DESCRIPTION}`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          property: 'twitter:url',
          content: `${HOSTNAME}/login`
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
