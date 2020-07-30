<template>
  <div class="static-page">
    <AppBreadcrumb title="Pertanyaan Yang Sering Diajukan" />
    <div class="max-w-4xl ml-auto mr-auto py-12 px-4 h-screen"></div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/Layout/AppBreadcrumb'
import { env } from '~/constant'
export default {
  name: 'Bantuan',
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
      title: 'Pertanyaan Yang Sering DIajukan',
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'title',
          content: `Pertanyaan Yang Sering DIajukan - ${env.appName}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `Pertanyaan Yang Sering DIajukan - ${env.description}`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          property: 'keywords',
          content: `Pertanyaan Yang Sering DIajukan - ${env.keywords}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `Pertanyaan Yang Sering DIajukan - ${env.appName}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `Pertanyaan Yang Sering DIajukan - ${env.description}`
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${env.hostname}/bantuan`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${env.hostname}${this.imageRequired.src}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          property: 'twitter:title',
          content: `Pertanyaan Yang Sering DIajukan - ${env.appName}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: `Pertanyaan Yang Sering DIajukan - ${env.description}`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          property: 'twitter:url',
          content: `${env.hostname}/bantuan`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          property: 'twitter:image',
          content: `${env.hostname}${this.imageRequired.src}`
        }
      ]
    }
  }
}
</script>
