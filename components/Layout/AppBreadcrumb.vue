<template>
  <div class="banner" :style="`background-image: url('./img/banner.jpg');`">
    <div class="container mx-auto">
      <h1 class="m-0 text-3xl text-white capitalize">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  props: {
    images: {
      type: String,
      default: '/banner.jpg'
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.banner {
  @apply h-64 bg-blue-500 flex items-center text-center;
  background-position: center;
  background-size: cover;
}
</style>
