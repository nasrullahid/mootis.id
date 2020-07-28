<template>
  <div class="banner" :style="`background-image: url('${imageRequired}');`">
    <div class="container mx-auto">
      <h1 class="m-0 shadow-lg text-3xl text-white capitalize">
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
  },
  computed: {
    imageRequired() {
      return require(`@/assets/img${this.images}`)
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
