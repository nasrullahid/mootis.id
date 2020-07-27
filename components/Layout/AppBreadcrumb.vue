<template>
  <div class="banner">
    <div class="container mx-auto">
      <h1 class="m-0 shadow-lg text-3xl capitalize">
        {{ this.$route.name.replace('-', ' ') }}
      </h1>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.banner {
  @apply h-64 bg-blue-500 flex items-center text-center;
  background-image: url('/img/banner.jpg');
  background-position: center;
  background-size: cover;
}
</style>
