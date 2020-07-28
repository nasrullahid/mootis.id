<template>
  <div class="banner">
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
  background-image: url('/img/banner.jpg');
  background-position: center;
  background-size: cover;
}
</style>
