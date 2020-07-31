<template>
  <div class="static-page">
    <AppBreadcrumb title="Login Member" />
    <div class="max-w-4xl ml-auto mr-auto py-12 px-4 h-screen"></div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/Layout/AppBreadcrumb'
import { HOSTNAME, APP_NAME, KEYWORDS } from '@/constant'
export default {
  name: 'Login',
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
      title: 'Login Member',
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'title',
          content: 'Login Member'
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `Login member ${APP_NAME}`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          property: 'keywords',
          content: `Login member, ${KEYWORDS}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Login Member'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `Login member ${APP_NAME}`
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
          content: 'Login Member'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: `Login member ${APP_NAME}`
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
