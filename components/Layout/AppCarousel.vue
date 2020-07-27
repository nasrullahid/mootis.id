<template>
  <div v-swiper:carousel="swiperOptions" class="swiper">
    <div class="swiper-wrapper">
      <div
        v-for="index in 4"
        :key="index"
        class="swiper-slide"
        :style="`background-image:url(./img/slide-${index}.jpg)`"
      >
        <h3>Slide {{ index }}</h3>
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SwiperNuxt',
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    }
  }
}
</script>

<style scoped>
.swiper {
  height: 75vh;
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination > .swiper-pagination-bullet {
  background-color: red;
}
</style>
