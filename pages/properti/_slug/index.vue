<template>
  <div class="page-artikel">
    <AppBreadcrumb
      title="Properti Terbaik Hanya Untuk Anda"
      images="/slide-1.jpg"
    />
    <div class="container mx-auto py-12 px-4">
      <!-- <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2"
      > -->
      <div class="flex flex-col items-center justify-center">
        <div class="postProperty md:mx-4 max-w-4xl mx-auto">
          <AppPost
            :title="post.title"
            :slug="post.slug"
            :thumbnail="post.thumbnail"
            :address="post.address"
            :summary="post.summary"
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
      post: {
        title: 'Catalya Gardens Hertasning',
        slug: '/properti/catalya-gardens-hertasning',
        summary:
          'Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan berkualitas.',
        address: 'Kawasan Hertasning Makassar',
        thumbnail: '/slide-1.jpg'
      }
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
