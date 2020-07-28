<template>
  <article class="post h-auto">
    <div class="post__thumbnail">
      <app-img :src="thumbnail" :alt="title" />
      <div class="post__address">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon" />
        <span>{{ address }}</span>
      </div>
    </div>
    <h2 class="post__title">{{ title }}</h2>
    <p class="post__content">
      {{ summary }}
    </p>
    <nuxt-link :aria-label="title" :to="slug" class="post__link">
      {{ title }}
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'AppPost',
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.post {
  @apply rounded shadow overflow-hidden relative max-w-2xl;
  background-color: var(--card-bg);

  &:hover {
    @apply shadow-lg;
  }

  &__thumbnail {
    @apply relative;
  }

  &__address {
    @apply leading-normal p-2 text-sm absolute bg-blue-900 bg-opacity-75 text-white w-full;
    bottom: 0;
    left: 0;

    .icon {
      @apply mr-2;
    }
  }

  &__title {
    @apply m-0 p-4 text-center leading-normal capitalize font-bold text-2xl;
    color: var(--text-normal);
  }

  &__content {
    @apply p-4 shadow m-0 leading-normal;
  }

  &__link {
    @apply absolute top-0 left-0 w-full h-full overflow-hidden z-0;
    text-indent: -9999px;
  }
}
</style>
