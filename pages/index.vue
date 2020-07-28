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
      <div class="text-center">
        <button class="btn focus:outline-none focus:border-white">
          Temukan Properti Lainnya
        </button>
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
        <button class="btn focus:outline-none focus:border-white">
          Info &amp; Update Lainnya
        </button>
      </div>
      <div class="text-center">
        <h2 class="text-3xl border-b">
          Apa Kata Mereka Tentang <span>Property Syariah</span>?
        </h2>
      </div>
      <div class="max-w-4xl mx-auto text-center">
        <!-- <div
        v-swiper:mySwiper="swiperOptions"
        class="swiper"
        instanceName="testimoni"
      >
        <div class="swiper-wrapper">
          <div v-for="index in 4" :key="index" class="swiper-slide">
            <img
              :src="`./img/slide-${index}.jpg`"
              alt="Nasrullah"
              class="w-32 h-32 rounded-full mx-auto shadow-lg border-4"
            />
            <h4 class="text-2xl">Nasrullah</h4>
            <blockquote>
              Lorem Ipsum adalah contoh teks atau dummy dalam industri
              percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah
              menjadi standar contoh teks sejak tahun 1500an, saat seorang
              tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan
              mengacaknya untuk menjadi sebuah buku contoh huruf.
            </blockquote>
          </div>
        </div>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </div> -->
        <client-only>
          <swiper ref="testimoni" class="swiper" :options="swiperOptions">
            <swiper-slide v-for="index in 4" :key="index" class="swiper-slide">
              <img
                :src="`./img/slide-${index}.jpg`"
                alt="Nasrullah"
                class="w-32 h-32 rounded-full mx-auto shadow-lg border-4"
              />
              <h4 class="text-2xl">Nasrullah</h4>
              <blockquote>
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun 1500an, saat
                seorang tukang cetak yang tidak dikenal mengambil sebuah
                kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh
                huruf.
              </blockquote>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
            <div slot="button-prev" class="swiper-button-prev"></div>
            <div slot="button-next" class="swiper-button-next"></div>
          </swiper>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import AppCarousel from '@/components/Layout/AppCarousel'
import AppPost from '@/components/AppPost'
import AppBlog from '@/components/AppBlog'
export default {
  components: {
    AppCarousel,
    AppPost,
    AppBlog
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
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
.swiper-slide {
  @apply shadow-lg rounded-lg p-8;
  background: var(--card-bg);
}
.btn {
  @apply py-4 px-12 rounded-lg shadow-xl bg-blue-700 text-white;
}
</style>
