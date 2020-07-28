<template>
  <div class="page-home">
    <AppBreadcrumb title="Info &amp; Artikel Property" />
    <div class="container mx-auto py-12 px-4">
      <div class="flex flex-col items-center justify-center">
        <div v-for="i in 2" :key="i" class="postProperty">
          <AppBlog
            img="/slide-2.jpg"
            slug="/artikel"
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
export default {
  components: {
    AppBreadcrumb,
    AppBlog
  },
  data() {
    return {}
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
