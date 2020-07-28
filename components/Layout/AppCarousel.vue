<template>
  <client-only placeholder="Loading slide">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="index in 4" :key="index" class="img-wrapper">
        <img
          :src="`./img/slide-${index}.jpg`"
          alt="Nasrullah"
          class="w-full h-full"
        />
        <h3>Lorem ipsum dolor sit amet in slide {{ index }}</h3>
      </div>
    </VueSlickCarousel>
  </client-only>
</template>

<script>
export default {
  name: 'SwiperNuxt',
  data() {
    return {
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
  }
}
</script>

<style lang="postcss" scoped>
.img-wrapper {
  @apply relative;
  height: 75vh;
  width: 100%;
  & img {
    @apply object-cover object-center;
  }
  & h3 {
    @apply absolute m-0 mb-4 py-4 px-8 text-white max-w-2xl text-3xl leading-normal;
    background: linear-gradient(
      to right,
      rgba(17, 74, 130, 0.95) 0%,
      rgba(92, 105, 186, 0.95) 100%
    );
    bottom: 2rem;
  }
}
</style>

<style scoped>
ul {
  bottom: 1rem;
}
.custom-dot-class li {
  width: 2rem;
  height: 2rem;
}
</style>
