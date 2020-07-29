<template>
  <div class="static-page">
    <AppBreadcrumb title="Pertanyaan Yang Sering Diajukan" />
    <div class="max-w-4xl ml-auto mr-auto py-12 px-4 h-screen"></div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/Layout/AppBreadcrumb'
import { HOSTNAME } from '~/constant'
export default {
  name: 'Bantuan',
  components: { AppBreadcrumb },
  mounted() {
    this.$fb.enable()
  },
  head() {
    return {
      title: 'Pertanyaan Yang Sering Diajukan',
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}/bantuan`
        }
      ]
    }
  }
}
</script>
