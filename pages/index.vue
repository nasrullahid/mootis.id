<template>
  <div class="page-home">
    <AppCarousel />
    <div class="container mx-auto py-12 px-4">
      <div class="text-center">
        <h2 class="text-3xl border-b">
          <span>Properti Terbaik</span> Hanya Untuk Anda
        </h2>
      </div>
      <div class="flex flex-col md:flex-row">
        <div v-for="i in post" :key="i.slug" class="postProperty md:mx-4">
          <AppPost
            :title="i.title"
            :slug="i.slug"
            :thumbnail="i.thumbnail"
            :address="i.address"
            :summary="i.summary"
          />
        </div>
      </div>
      <div class="text-center mt-4">
        <nuxt-link
          to="/properti"
          aria-label="Temukan Properti Lainnya"
          class="btn"
        >
          Temukan Properti Lainnya
        </nuxt-link>
      </div>
      <div class="text-center">
        <h2 class="text-3xl border-b">
          <span>Info &amp; Update</span> Properi Terbaru
        </h2>
      </div>
      <div class="flex flex-col md:flex-row">
        <div v-for="i in 2" :key="i" class="postProperty">
          <AppBlog
            img="/slide-2.jpg"
            slug="/artikel"
            posted-date="2020-07-27T11:00:00.000Z"
            updated-date="2020-07-27T11:00:00.000Z"
            title="Menata Rumah Mungil Dengan Desain Interior Minimalis"
            summary="Setiap orang pasti mendambakan rumah yang luas dan mewah untuk ditinggali. Namun, apabila anggaran untuk membeli rumah tidak cukup besar untuk mendapatkan rumah ..."
          />
        </div>
      </div>
      <div class="text-center">
        <nuxt-link
          to="/artikel"
          aria-label="Info &amp; Update Lainnya"
          class="btn"
        >
          Info &amp; Update Lainnya
        </nuxt-link>
      </div>
      <div class="text-center">
        <h2 class="text-3xl border-b">
          Apa Kata Mereka Tentang <span>Property Syariah</span>?
        </h2>
      </div>
      <div class="max-w-4xl mx-auto text-center">
        <client-only placeholder="Loading testimoni">
          <VueSlickCarousel v-bind="slickOptions">
            <div v-for="index in 4" :key="index" class="img-wrapper">
              <img
                :src="`./img/slide-${index}.jpg`"
                class="w-32 h-32 rounded-full mx-auto shadow-lg border-4"
              />
              <h3>Lorem ipsum dolor sit amet in slide {{ index }}</h3>
              <blockquote>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun 1500an, saat
                seorang tukang cetak yang tidak dikenal mengambil sebuah
                kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh
                huruf.
              </blockquote>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import AppCarousel from '@/components/Layout/AppCarousel'
import AppPost from '@/components/AppPost'
import AppBlog from '@/components/AppBlog'

import { HOSTNAME } from '~/constant'
export default {
  components: {
    AppCarousel,
    AppPost,
    AppBlog
  },
  data() {
    return {
      slickOptions: {
        dots: true,
        infinite: true,
        autoplay: true,
        fade: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      },
      post: [
        {
          title: 'Catalya Gardens Hertasning',
          slug: '/properti/catalya-gardens-hertasning',
          summary:
            'Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan berkualitas.',
          address: 'Kawasan Hertasning Makassar',
          thumbnail: '/slide-1.jpg'
        },
        {
          title: 'Al Jazeera Residence Moncongloe',
          slug: '/properti/al-jazeera-residence',
          summary:
            'Al Jazeera Residence Moncongloe, hunian islami eksklusif di Sulawesi Selatan yang menghadirkan konsep islami modern eksklusif, dengan desain arsitektur minimalis modern dan menedepankan aspek  green living concept yang religius, humanis, dan prestisius ',
          address: 'Moncongloe Maros Sulawesi Selatan',
          thumbnail: '/slide-2.jpg'
        },
        {
          title: 'Catalya Gardens Hertasning 2',
          slug: '/properti/catalya-gardens-hertasning-2',
          summary:
            'Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan berkualitas.',
          address: 'Kawasan Hertasning Makassar',
          thumbnail: '/slide-3.jpg'
        }
      ]
    }
  },
  mounted() {
    this.$fb.enable()
  },
  head() {
    return {
      title: process.env.COMPANY_NAME,
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: HOSTNAME
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${HOSTNAME}/img/slide-2.jpg`
        }
      ],
      link: [
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          HOSTNAME,
          title: `${process.env.COMPANY_NAME} - ${process.env.APP_NAME}`
        },
        {
          rel: 'amphtml',
          href: `${HOSTNAME}/amp`
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
h2 {
  & span {
    color: var(--text-link);
  }
}
.postProperty {
  @apply my-4;
}
.img-wrapper {
  @apply shadow-lg rounded-lg p-8;
  background: var(--card-bg);
}
.slick-prev {
  left: 25px;
  z-index: 10;
}
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.btn {
  @apply py-3 px-8 rounded-lg shadow-xl bg-blue-700 text-white;
  &:hover {
    @apply bg-blue-500;
  }
}
</style>
