import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
  EffectFade
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'
SwiperClass.use([Navigation, Pagination, Mousewheel, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
