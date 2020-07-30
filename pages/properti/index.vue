<template>
  <div class="page-artikel">
    <AppBreadcrumb title="Properti Terbaik Hanya Untuk Anda" />
    <div class="max-w-4xl mx-auto py-12 px-4">
      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2"
      > -->
      <div class="flex flex-col items-center justify-center">
        <div
          v-for="i in post"
          :key="i.slug"
          class="postProperty md:mx-4 max-w-4xl mx-auto"
        >
          <AppPost
            :title="i.title"
            :slug="i.slug"
            :thumbnail="i.thumbnail"
            :address="i.address"
            :summary="i.summary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/Layout/AppBreadcrumb'
import AppPost from '@/components/AppPost'
import { HOSTNAME } from '~/constant'
export default {
  components: {
    AppBreadcrumb,
    AppPost
  },
  data() {
    return {
      post: [
        {
          title: 'Catalya Gardens Hertasning',
          slug: '/properti/catalya-gardens-hertasning',
          summary:
            'Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan berkualitas.',
          address: 'Kawasan Hertasning Makassar',
          thumbnail: '/slide-1.jpg'
        },
        {
          title: 'Al Jazeera Residence Moncongloe',
          slug: '/properti/al-jazeera-residence',
          summary:
            'Al Jazeera Residence Moncongloe, hunian islami eksklusif di Sulawesi Selatan yang menghadirkan konsep islami modern eksklusif, dengan desain arsitektur minimalis modern dan menedepankan aspek  green living concept yang religius, humanis, dan prestisius ',
          address: 'Moncongloe Maros Sulawesi Selatan',
          thumbnail: '/slide-2.jpg'
        },
        {
          title: 'Catalya Gardens Hertasning 2',
          slug: '/properti/catalya-gardens-hertasning-2',
          summary:
            'Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan berkualitas.',
          address: 'Kawasan Hertasning Makassar',
          thumbnail: '/slide-3.jpg'
        },
        {
          title: 'Al Jazeera Residence Moncongloe 2',
          slug: '/properti/al-jazeera-residence-2',
          summary:
            'Al Jazeera Residence Moncongloe, hunian islami eksklusif di Sulawesi Selatan yang menghadirkan konsep islami modern eksklusif, dengan desain arsitektur minimalis modern dan menedepankan aspek  green living concept yang religius, humanis, dan prestisius ',
          address: 'Moncongloe Maros Sulawesi Selatan',
          thumbnail: '/slide-2.jpg'
        },
        {
          title: 'Catalya Gardens Hertasning 3',
          slug: '/properti/catalya-gardens-hertasning-3',
          summary:
            'Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan berkualitas.',
          address: 'Kawasan Hertasning Makassar',
          thumbnail: '/slide-1.jpg'
        },
        {
          title: 'Catalya Gardens Hertasning 2.1',
          slug: '/properti/catalya-gardens-hertasning-2-1',
          summary:
            'Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan berkualitas.',
          address: 'Kawasan Hertasning Makassar',
          thumbnail: '/slide-3.jpg'
        }
      ]
    }
  },
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
      title: 'Katalog Properti Syariah',
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'title',
          content: 'Katalog Properti Syariah'
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `Katalog properti syariah terbaik hanya untuk Anda dari ${process.env.COMPANY_NAME}`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          property: 'keywords',
          content: process.env.KEYWORDS
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Katalog Properti Syariah'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `Katalog properti syariah terbaik hanya untuk Anda dari ${process.env.COMPANY_NAME}`
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}/properti`
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
          content: 'Katalog Properti Syariah'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: `Katalog properti syariah terbaik hanya untuk Anda dari ${process.env.COMPANY_NAME}`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          property: 'twitter:url',
          content: `${HOSTNAME}/properti`
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
