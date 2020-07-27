<template>
  <div class="footer">
    <div class="footerMenu">
      <div
        class="container mx-auto block flex-row items-start justify-between sm:flex"
      >
        <div class="contact">
          <h3>{{ appName }}</h3>
          <ul>
            <li>
              <font-awesome-icon
                :icon="['fas', 'map-marked-alt']"
                class="icon"
              />
              <span
                >{{ contact.address }} <br />
                {{ contact.region }} - {{ contact.postalCode }}</span
              >
            </li>
            <li>
              <font-awesome-icon
                :icon="['fas', 'phone-square-alt']"
                class="icon"
              />
              <span>{{ contact.phone }}</span>
            </li>
            <li>
              <font-awesome-icon
                :icon="['fas', 'envelope-open-text']"
                class="icon"
              />
              <span>{{ contact.email }}</span>
            </li>
          </ul>
          <ul class="socialNetworks">
            <li v-for="item in socialNetwork" :key="item.name">
              <a :href="item.link" :title="item.name" target="_blank">
                <font-awesome-icon :icon="['fab', item.name]" class="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div class="navigasi">
          <h3>Menu Navigasi</h3>
          <ul>
            <li v-for="item in menu" :key="item.path">
              <nuxt-link :to="item.path" :title="item.name">
                <font-awesome-icon :icon="['fas', item.icon]" class="icon" />
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="news">
          <h3>Properti Terbaru</h3>
          <ul>
            <li v-for="i in 4" :key="i" class="newsItem">
              <div class="thumb">
                <app-img
                  :src="`/slide-${i}.jpg`"
                  :alt="`Catalya Gardens Hertasning ${i}`"
                  :width="70"
                  :height="70"
                />
              </div>
              <div class="desc">
                <div class="time">{{ i }} Jul 2020</div>
                <div class="title">Catalya Gardens Hertasning {{ i }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} {{ appName }} - All rights reserved
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    appName: {
      type: String,
      default: process.env.APP_NAME || 'Property Syariah'
    },
    contact: {
      type: Object,
      required: true
    },
    socialNetwork: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      menu: [
        { path: '/tentang-kami', name: 'Tentang Kami', icon: 'user-friends' },
        { path: '/properti', name: 'Properti', icon: 'house-user' },
        { path: '/artikel', name: 'Artikel', icon: 'newspaper' },
        { path: '/privasi', name: 'Privasi', icon: 'user-secret' },
        { path: '/persyaratan', name: 'Persyaratan', icon: 'cogs' },
        { path: '/bantuan', name: 'Bantuan', icon: 'question-circle' }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.footer {
  background-image: url('/img/banner.jpg');
  background-position: center;
  background-size: cover;
}
.footerMenu {
  @apply flex bg-blue-900 bg-opacity-75 pt-8 pb-4 px-4 text-gray-200;
  & h3 {
    @apply mt-2;
    text-transform: uppercase;
  }
  & ul {
    @apply list-none m-0 text-sm;
  }
}
.contact {
  /* @apply block text-left items-start justify-start; */
  & ul li {
    @apply flex flex-row items-center;
  }
  & .icon {
    @apply mr-3 text-xl text-blue-300;
  }
  & .socialNetworks {
    @apply flex list-none mt-4 mb-0 mx-0 items-center justify-start;
    & a {
      @apply block w-10 h-10 mr-2 rounded-full shadow text-center text-2xl bg-blue-700;
      line-height: 1.6;
      & .icon {
        color: white;
        margin: 0;
      }
      &:focus {
        @apply outline-none;
      }

      &:hover {
        color: var(--text-link);
        @apply shadow-lg;
      }
    }
  }
}
.navigasi {
  & a {
    @apply text-gray-200;
  }
  & a:hover {
    color: var(--text-link);
  }
  & .icon {
    width: 30px;
  }
}
.news {
  & .newsItem {
    @apply flex flex-row items-center justify-start;
  }
  & .thumb {
    @apply w-1/4 mr-2;
  }
  & .time {
    @apply text-xs italic text-blue-300;
  }
}
.copyright {
  @apply text-sm text-center p-2 text-gray-200;
  background: var(--bg-footer);
}
.footerMenu li:hover .icon {
  -webkit-animation: icnBubble 0.7s ease-in-out;
  animation: icnBubble 0.7s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>
