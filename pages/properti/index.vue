<template>
  <div class="page-artikel">
    <AppBreadcrumb title="Properti Terbaik Hanya Untuk Anda" />
    <div class="container mx-auto py-12 px-4">
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
