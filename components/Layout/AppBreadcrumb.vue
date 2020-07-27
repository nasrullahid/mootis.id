<template>
  <div class="banner">
    <div class="container mx-auto">
      <h1 class="m-0 shadow-lg text-3xl capitalize">
        {{ this.$route.name.replace('-', ' ') }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this)
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
