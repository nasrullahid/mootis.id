<template>
  <div class="container mx-auto py-12 px-4">
    <div class="text-center">
      <h2 class="m-0 text-3xl">
        <span>Properti Terbaik</span> Hanya Untuk Anda
      </h2>
    </div>
    <div class="flex flex-col md:flex-row">
      <div v-for="i in 3" :key="i" class="postProperty md:mx-4">
        <AppPost />
      </div>
    </div>
    <div class="text-center">
      <button class="btn focus:outline-none focus:border-white">
        Temukan Properti Lainnya
      </button>
    </div>
    <div class="text-center">
      <h2 class="text-3xl"><span>Info &amp; Update</span> Properi Terbaru</h2>
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
      <h2 class="text-3xl">
        Apa Kata Mereka Tentang <span>Property Syariah</span>?
      </h2>
    </div>
    <div class="max-w-2xl mx-auto text-center">
      <div
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
      </div>
    </div>
  </div>
</template>

<script>
import AppPost from '@/components/AppPost'
import AppBlog from '@/components/AppBlog'
export default {
  components: {
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
      }
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
