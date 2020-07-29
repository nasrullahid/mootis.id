<template>
  <div class="page-post">
    <div class="banner">
      <div class="banner__img">
        <app-img :src="blog.img" :alt="blog.title" />
      </div>
    </div>
    <div class="max-w-4xl mx-auto pb-12 px-4">
      <article class="blog-post">
        <div class="blog-post__title">
          <h2 class="m-0">{{ blog.title }}</h2>
        </div>
        <div class="blog-post__date">
          <font-awesome-icon :icon="['fas', 'user']" class="icon" />
          <span>{{ blog.contributors }}</span>
          <font-awesome-icon :icon="['fas', 'clock']" class="icon" />
          <span>
            <time :datetime="blog.postedDate">
              {{ formatDate(blog.postedDate) }}
            </time>
          </span>
          <font-awesome-icon :icon="['fas', 'book-reader']" class="icon" />
          <span>
            {{ Math.ceil(blog.readingTime.minutes.toFixed(2)) }} menit
          </span>
        </div>

        <div class="blog-post__content">
          <!-- {{ blog.content }} -->
          <h3 class="m-0 mb-4">What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h3>Why do we use it?</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <h3>Where does it come from?</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is
            a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit
            amet..\", comes from a line in section 1.10.32.
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from \"de
            Finibus Bonorum et Malorum\" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <h3>Where can I get some?</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </article>
    </div>
    <client-only>
      <vue-scroll-indicator
        height="2px"
        color="var(--text-normal)"
        background="var(--bg-primary)"
      />
    </client-only>
  </div>
</template>

<script>
import readingTime from 'reading-time'
import { formatDate } from '~/mixins'
import { HOSTNAME } from '~/constant'
export default {
  mixins: [formatDate],
  data() {
    return {
      blog: null
    }
  },
  created() {
    const slug = this.$route && this.$route.params && this.$route.params.slug
    const fullPath = `${HOSTNAME}/artikel/${slug}`
    const content =
      "<h3>What is Lorem Ipsum?</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h3>Why do we use it?</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><h3>Where does it come from?</h3><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><h3>Where can I get some?</h3><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

    this.blog = {
      img: '/slide-1.jpg',
      title: 'Lorem Ipsum',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
      postedDate: '2020-07-27T11:00:00.000Z',
      updatedDate: '2020-07-27T11:00:00.000Z',
      slug,
      contributors: 'Nasrullah',
      content,
      readingTime: readingTime(content),
      fullPath
    }
  },
  mounted() {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      element.scrollIntoView({})
    }
  }
}
</script>

<style lang="postcss">
/* purgecss start ignore */
.banner {
  @apply h-64;
  &__img {
    @apply h-64 w-full object-cover;
    filter: brightness(0.7);
  }
  & .image-placeholder {
    height: 30rem;
  }
}
.blog-post {
  @apply mb-4 max-w-4xl rounded overflow-hidden shadow relative;
  background-color: var(--card-bg);

  &:hover {
    @apply shadow-lg;
  }

  &__title {
    @apply capitalize font-bold text-2xl leading-normal p-8;
  }

  &__date {
    @apply leading-normal py-2 px-8 text-sm bg-blue-900 bg-opacity-75 text-white;

    .icon {
      @apply mr-1 text-xs;
    }

    span {
      @apply mr-2;
    }
  }

  &__content {
    @apply leading-normal mb-0 p-8 text-justify;
  }
}

/* @screen sm {
  .blog-post {
    &__meta {
      @apply px-16 py-10;
    }
  }
} */

body.dark {
  /* .banner { */
  .image-placeholder {
    filter: brightness(0.5);
  }
  /* } */
}
/* purgecss end ignore */
</style>
