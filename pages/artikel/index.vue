<template>
  <div class="page-home">
    <AppBreadcrumb title="Info &amp; Artikel Property" />
    <div class="container mx-auto py-12 px-4">
      <div class="flex flex-col items-center justify-center">
        <div v-for="i in 2" :key="i" class="postProperty">
          <AppBlog
            img="/slide-2.jpg"
            slug="/artikel/test"
            posted-date="2020-07-27T11:00:00.000Z"
            updated-date="2020-07-27T11:00:00.000Z"
            title="Menata Rumah Mungil Dengan Desain Interior Minimalis"
            summary="Setiap orang pasti mendambakan rumah yang luas dan mewah untuk ditinggali. Namun, apabila anggaran untuk membeli rumah tidak cukup besar untuk mendapatkan rumah ..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/Layout/AppBreadcrumb'
import AppBlog from '@/components/AppBlog'
import { HOSTNAME, KEYWORDS } from '@/constant'
export default {
  components: {
    AppBreadcrumb,
    AppBlog
  },
  data() {
    return {}
  },
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
      title: 'Artikel Properti Syariah',
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'title',
          content: 'Artikel Properti Syariah'
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: 'Update artikel properti syariah'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          property: 'keywords',
          content: `artikel properti syariah, ${KEYWORDS}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Artikel Properti Syariah'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Update artikel properti syariah'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}/artikel`
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
          content: 'Artikel Properti Syariah'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: 'Update artikel properti syariah'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          property: 'twitter:url',
          content: `${HOSTNAME}/artikel`
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

<style lang="postcss" scoped>
h2 {
  & span {
    color: var(--text-link);
  }
}
.postProperty {
  @apply my-4;
}
.swiper-slide {
  @apply shadow-lg rounded-lg p-8;
  background: var(--card-bg);
}
.btn {
  @apply py-4 px-12 rounded-lg shadow-xl bg-blue-700 text-white;
}
</style>
