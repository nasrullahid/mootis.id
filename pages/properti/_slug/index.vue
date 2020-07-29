<template>
  <div class="page-post">
    <div class="banner">
      <div class="banner__img">
        <app-img :src="blog.img" :alt="blog.title" />
      </div>
    </div>
    <div class="max-w-4xl mx-auto pb-12 px-4">
      <article class="post">
        <div class="post__slider">
          <client-only placeholder="Loading slide">
            <VueSlickCarousel v-bind="slickOptions">
              <div v-for="index in 4" :key="index" class="post__slick">
                <img :src="`../img/slide-${index}.jpg`" class="w-full h-full" />
              </div>
            </VueSlickCarousel>
          </client-only>
        </div>

        <h2 class="post__title">{{ blog.title }}</h2>

        <div class="post__date">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon" />
          <span>Moncongloe Maros Sulawesi Selatan</span>
        </div>

        <h4 class="post__subtitle">Islamic Green Living Concept</h4>
        <div class="post__description">
          <p class="mb-0">
            Al Jazeera Residence Moncongloe, hunian islami eksklusif di Sulawesi
            Selatan yang menghadirkan konsep islami modern eksklusif, dengan
            desain arsitektur minimalis modern dan menedepankan aspek green
            living concept yang religius, humanis, dan prestisius
          </p>
        </div>
        <div class="post_fasilitas">
          <h3>Fasilitas yang Anda Dapatkan</h3>
          <ul>
            <li>One gate system</li>
            <li>One home one hafidz</li>
          </ul>
        </div>
        <div class="post_siteplan">
          <h3>Site Plan {{ blog.title }}</h3>
        </div>
        <div class="post_typeunit">
          <h3>Tipe Unit &amp; Spesifikasi</h3>
        </div>
        <div class="post_maps">
          <h3>Lihat Lokasi di Google Maps</h3>
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
      blog: null,
      slickOptions: {
        arrows: true,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        infinite: true,
        fade: true,
        autoplay: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      }
    }
  },
  created() {
    const slug = this.$route && this.$route.params && this.$route.params.slug
    const fullPath = `${HOSTNAME}/artikel/${slug}`
    const content =
      "<h3>What is Lorem Ipsum?</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h3>Why do we use it?</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><h3>Where does it come from?</h3><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p><h3>Where can I get some?</h3><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

    this.blog = {
      img: '/slide-1.jpg',
      title: 'Al Jazeera Residence Moncongloe',
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
.post {
  @apply mb-4 max-w-4xl rounded overflow-hidden shadow relative;
  background-color: var(--card-bg);

  &:hover {
    @apply shadow-lg;
  }

  &__slider {
    @apply w-full;
  }

  &__slick {
    height: 24rem;
    width: 100%;
    & img {
      @apply object-cover object-center;
    }
  }

  &__title {
    @apply leading-normal p-8 text-center font-bold text-3xl m-0;
  }

  &__subtitle {
    @apply leading-normal p-8 font-bold text-2xl m-0;
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

  &__description {
    @apply m-0 px-8;
    p {
      @apply shadow bg-gray-600 rounded-lg px-4 py-6 text-center;
    }
  }
}

@screen sm {
  .post {
    &__meta {
      @apply px-16 py-10;
    }
  }
}

body {
  &.light {
    .post__description {
      p {
        @apply text-white;
      }
    }
  }
}

/* purgecss end ignore */
</style>
