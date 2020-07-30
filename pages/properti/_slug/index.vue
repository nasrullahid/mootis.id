<template>
  <div class="page-post">
    <div class="banner">
      <div class="banner__img">
        <app-img :src="`/properti/${post.banner}`" :alt="post.title" />
      </div>
    </div>
    <div class="max-w-4xl mx-auto pb-12 px-4">
      <article class="post">
        <div class="post__slider">
          <client-only placeholder="Loading slide">
            <VueSlickCarousel v-bind="slickOptions">
              <div v-for="index in 4" :key="index" class="post__slick">
                <app-img
                  :src="`/properti/slide-${index}.jpg`"
                  :alt="post.title"
                />
              </div>
            </VueSlickCarousel>
          </client-only>
        </div>

        <h2 class="post__title">{{ post.title }}</h2>

        <div class="post__date">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon" />
          <span>{{ post.address }}</span>
          <font-awesome-icon :icon="['fas', 'clock']" class="icon" />
          <span>
            <time :datetime="post.postedDate">
              {{ formatDate(post.postedDate) }}
            </time>
          </span>
        </div>

        <div class="post__content">
          <h4 v-if="post.headline" class="post__content__heading">
            {{ post.headline }}
          </h4>

          <div v-if="post.description" class="post__content__description">
            <p class="mb-0">{{ post.description }}</p>
          </div>

          <div v-if="post.video" class="post__content__video">
            <app-video :src="post.video" />
          </div>

          <div v-if="post.fasilitas" class="post__content__fasilitas">
            <h3 class="mb-4">Fasilitas yang Anda Dapatkan</h3>
            <ul>
              <li v-for="item in post.fasilitas" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div v-if="post.sitePlan" class="post__content__siteplan">
            <h3 class="mb-4">Site Plan {{ post.title }}</h3>
            <app-img
              :src="`/properti/${post.sitePlan}`"
              :alt="`Site Plan ${post.title}`"
            />
          </div>

          <div v-if="post.tipeUnit" class="post__content__typeunit">
            <h3 class="mb-4">Tipe Unit &amp; Spesifikasi</h3>
            <div v-for="(item, index) in post.tipeUnit" :key="index">
              <h5 class="m-0">{{ index + 1 }}. {{ item.tipe }}</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <app-img :src="`/properti/${item.image}`" :alt="item.tipe" />
                <div class="spesifikasi">
                  <p>Spesifikasi {{ item.tipe }}</p>
                  <ul>
                    <li v-for="spesc in item.spesifikasi" :key="spesc">
                      {{ spesc }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div v-if="post.maps" class="post__content__maps">
            <h3 class="mb-4">Lihat Lokasi di Google Maps</h3>
            <figure class="video">
              <div class="embed embed__16/9">
                <iframe :src="post.maps"></iframe>
              </div>
            </figure>
          </div>

          <div class="post__content__form">
            <h3 class="mb-4">Booking Segera Sebelum Kehabisan</h3>
            <p class="text-sm italic mb-4">
              Mohon isi formulir dengan data yang benar untuk mempermudah proses
              pemesanan Anda
            </p>
            <form class="w-full max-w-xl">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="md:text-right md:mb-0" for="name">
                    Nama Lengkap
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    id="name"
                    class="focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    placeholder="Nasrullah"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="md:text-right md:mb-0" for="phone">
                    No. HP/WA
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    id="phone"
                    class="focus:outline-none focus:bg-white focus:border-blue-500"
                    type="number"
                    placeholder="62823456789xx"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="md:text-right md:mb-0" for="city">
                    Kota/Kabupaten
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    id="city"
                    class="focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    placeholder="Makassar"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                  <button
                    class="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none mb-2 w-full sm:mb-0 sm:w-1/2"
                    type="button"
                  >
                    Pesan Sekarang
                  </button>
                  <button
                    class="bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none w-full sm:w-auto"
                    type="button"
                  >
                    Pesan via Whatsapp
                  </button>
                </div>
              </div>
            </form>
          </div>
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
import { formatDate } from '~/mixins'
import { HOSTNAME } from '~/constant'
export default {
  mixins: [formatDate],
  data() {
    return {
      post: null,
      slickOptions: {
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
        initialSlide: 0,
        swipeToSlide: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]
      }
    }
  },
  computed: {
    imageRequired() {
      return require(`~/assets/img/properti/${this.post.banner}`)
    }
  },
  created() {
    const slug = this.$route && this.$route.params && this.$route.params.slug
    const fullPath = `${HOSTNAME}/properi/${slug}`

    this.post = {
      banner: 'slide-1.jpg',
      title: 'Al Jazeera Residence Moncongloe',
      headline: 'Islamic Green Living Concept',
      description:
        'Al Jazeera Residence Moncongloe, hunian islami eksklusif di Sulawesi Selatan yang menghadirkan konsep islami modern eksklusif, dengan desain arsitektur minimalis modern dan menedepankan aspek green living concept yang religius, humanis, dan prestisius',
      address: 'Moncongloe Maros Sulawesi Selatan',
      keywords:
        'Residence, hunian islami eksklusif, tanpa bank, tanpa akad bathil, tanpa riba, tanpa sita',
      postedDate: new Date(),
      updatedDate: new Date(),
      sitePlan: 'siteplan.jpg',
      video: 'https://www.youtube.com/embed/8B9Kz5m9xh8',
      fasilitas: [
        'One gate system',
        'One home one hafidz',
        'Pagar keliling',
        'Taman dalam perumahan',
        'Pos security',
        'Tanpa bank',
        'Tanpa akad bathil',
        'Tanpa riba',
        'Tanpa denda',
        'Tanpa sita'
      ],
      tipeUnit: [
        {
          tipe: 'Tipe 48/60',
          image: 'tipeunit-48.jpeg',
          spesifikasi: [
            'Garasi Mobil',
            'Ruang Tamu',
            'Ruang Keluarga',
            'Dapur + Ruang Makan',
            '2 Kamar Mandi / WC',
            '3 Kamar Tidur',
            '1 Balkon'
          ]
        },
        {
          tipe: 'Tipe 68/72',
          image: 'tipeunit-68.jpeg',
          spesifikasi: [
            'Garasi Mobil',
            'Ruang Tamu',
            'Ruang Keluarga',
            'Dapur + Ruang Makan',
            '2 Kamar Mandi / WC',
            '3 Kamar Tidur',
            '2 Balkon'
          ]
        }
      ],
      maps:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7947.453144478817!2d119.542629!3d-5.147647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b3a127daa753612!2sAl%20Jazeera%20Residence!5e0!3m2!1sen!2sid!4v1595999628401!5m2!1sen!2sid',
      slug,
      fullPath
    }
  },
  mounted() {
    this.$fb.enable()
    this.$fb.track('ViewContent')
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      element.scrollIntoView({})
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          property: 'title',
          content: this.post.title
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: this.post.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          property: 'keywords',
          content: this.post.keywords
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}/properti/${this.post.slug}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${HOSTNAME}${this.imageRequired.src}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          property: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: this.post.description
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          property: 'twitter:url',
          content: `${HOSTNAME}/properti/${this.post.slug}`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          property: 'twitter:image',
          content: `${HOSTNAME}${this.imageRequired.src}`
        }
      ],
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          HOSTNAME,
          title: `${this.post.title} - ${process.env.APP_NAME}`
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
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
      @apply w-full h-full object-cover object-center;
    }
  }

  &__title {
    @apply leading-normal p-8 text-center font-bold text-3xl m-0;
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
    @apply p-8;

    &__heading {
      @apply leading-normal font-bold text-2xl m-0 mb-4;
    }

    &__description {
      @apply m-0;
      p {
        @apply shadow bg-gray-600 rounded px-4 py-6 text-center;
      }
    }

    &__video {
      @apply mt-6;
      .embed {
        @apply mb-0 rounded shadow;
      }
    }

    &__fasilitas {
      ul li {
        @apply m-0;
      }
    }

    &__siteplan {
      .image-placeholder {
        @apply max-w-2xl mx-auto shadow rounded;
      }
    }

    &__typeunit {
      h5 {
        @apply mb-4 border-b text-base;
        border-color: var(--inline-code-border);
      }
      div:not(:last-child) {
        @apply mb-4;
      }
      .image-placeholder {
        @apply w-full shadow;
      }
      .spesifikasi {
        @apply w-full h-full p-4 shadow;
        background: var(--card-bg);
        p {
          @apply font-bold text-base mb-4;
        }
        ul {
          @apply mb-0;
        }
        li {
          @apply m-0 text-sm;
        }
      }
    }

    &__maps {
      .embed {
        @apply mb-0 rounded shadow;
      }
    }

    &__form {
      p {
        @apply leading-normal;
      }
      form {
        label {
          @apply block text-gray-500 mb-1 pr-4 text-base;
        }
        input {
          @apply bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight text-base;
        }
        button {
          @apply shadow text-white py-2 px-4 rounded text-base;
        }
      }
    }
  }
}

body {
  &.light {
    .post__content__description {
      p {
        @apply text-white;
      }
    }
  }

  &.dark {
    .post {
      input {
        filter: brightness(0.9);
      }
      button {
        filter: brightness(0.9);
      }
    }
  }
}

@media (max-width: 640px) {
  .banner {
    @apply h-40;
    &__img {
      @apply h-40;
    }
    & .image-placeholder {
      height: 15rem;
    }
  }
  .post__slick {
    height: 10rem;
  }
}

@media (max-width: 380px) {
  .banner {
    @apply h-24;
  }
  .post__slick {
    height: 10rem;
  }
}

/* purgecss end ignore */
</style>
