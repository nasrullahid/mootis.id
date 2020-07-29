<template>
  <div class="blog-item">
    <article>
      <div class="blog-item__img">
        <app-img :src="img" :alt="title" />
        <div class="blog-item__date">
          <font-awesome-icon :icon="['fas', 'user']" class="icon" />
          <span>Admin</span>
          <font-awesome-icon :icon="['fas', 'clock']" class="icon" />
          <span>
            <time :datetime="postedDate">
              {{ formatDate(postedDate) }}
            </time>
          </span>
          <!-- <font-awesome-icon :icon="['fas', 'book-reader']" class="icon" /> -->
          <!-- <span>
              {{ Math.ceil(readingTime.minutes.toFixed(2)) }}
              {{ $t('minRead') }}
            </span> -->
        </div>
      </div>
      <div class="blog-item__meta">
        <header>
          <h2 class="blog-item__title">
            {{ title }}
          </h2>
        </header>
        <p class="blog-item__summary">
          {{ summary }}
        </p>
        <nuxt-link :aria-label="title" :to="slug" class="blog-item__link">
          {{ title }}
        </nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
import { formatDate } from '~/mixins'

export default {
  mixins: [formatDate],
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    postedDate: {
      type: String,
      default: ''
    },
    updatedDate: {
      type: String,
      default: ''
    },
    // readingTime: {
    //   type: Object,
    //   default() {
    //     return null
    //   }
    // },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss">
/* purgecss start ignore */
.blog-item {
  @apply mb-4 mx-4 max-w-4xl rounded overflow-hidden shadow relative;
  background-color: var(--card-bg);

  img {
    @apply h-64 w-full object-cover;
  }

  &:hover {
    @apply shadow-lg;
  }

  &__img {
    @apply relative;
  }

  &__meta {
    @apply p-4;
  }

  &__title {
    @apply capitalize font-bold text-2xl mt-0 mb-4 leading-normal;
  }

  &__date {
    @apply leading-normal p-2 text-sm absolute bg-blue-900 bg-opacity-75 text-white;
    bottom: 0;
    right: 0;

    .icon {
      @apply mr-1 text-xs;
    }

    span {
      @apply mr-2;
    }
  }

  &__summary {
    @apply leading-normal mb-0;
  }

  &__link {
    @apply absolute top-0 left-0 w-full h-full overflow-hidden z-0;
    text-indent: -9999px;
  }
}

@screen sm {
  .blog-item {
    &__meta {
      @apply px-16 py-10;
    }
  }
}

body {
  &.dark {
    .blog-item {
      img {
        filter: brightness(0.7);
      }
    }
  }
}

/* purgecss end ignore */
</style>
