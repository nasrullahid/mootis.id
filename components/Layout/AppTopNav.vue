<template>
  <section class="headerTopNav">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-row items-center">
        <div class="flex items-center justify-start w-1/2">
          <time :datetime="officeTime" class="officeTime">{{
            officeTime
          }}</time>
        </div>
        <div class="flex items-center justify-end w-1/2">
          <ul class="socialNetworks">
            <li
              v-for="item in socialNetwork"
              :key="item.name"
              class="socialItems hidden sm:block"
            >
              <a :href="item.link" :title="item.name">
                <font-awesome-icon :icon="['fab', item.name]" class="icon" />
              </a>
            </li>
            <li class="userAccount">
              <button
                class="focus:outline-none focus:border-white"
                @click="isOpen = !isOpen"
              >
                <font-awesome-icon :icon="['fas', 'user']" class="icon" />
                <span>Welcome, Guest</span>
              </button>
              <button
                v-if="isOpen"
                class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
                tabindex="10"
                @click="isOpen = false"
              ></button>
            </li>
          </ul>
          <div class="userAccountCard">
            <div
              v-if="isOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10"
            >
              <nuxt-link
                to="/login"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                title="Login"
                @click="isOpen = false"
                >Login</nuxt-link
              >
              <nuxt-link
                to="/daftar"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                title="Daftar"
                @click="isOpen = false"
                >Daftar
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    officeTime: {
      type: String,
      required: true
    },
    socialNetwork: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    // const handleEscape = (e) => {
    //   if (e.key === 'Esc' || e.key === 'Escape') {
    //     this.isOpen = false
    //   }
    // }
    // document.addEventListener('keydown', handleEscape)
    // this.$once('hook:beforeDestroy', () => {
    //   document.removeEventListener('keydown', handleEscape)
    // })
  }
}
</script>

<style scoped>
.headerTopNav {
  @apply shadow bg-blue-500 p-1 text-sm;
  color: #f7fafc;
}
.officeTime {
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
}
.socialNetworks {
  @apply flex list-none m-0 items-center justify-between;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  & a {
    color: #e2e8f0;
  }
  & a:hover {
    color: #f7fafc;
  }
}
.socialItems {
  @apply mb-0 mr-4;
}
.userAccount {
  @apply mb-0 ml-2 border-l-2 pl-2 border-opacity-25;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  & span {
    @apply ml-1;
  }
}
.userAccountCard {
  @apply relative;
  top: 0.6rem;
}

.socialNetworks > a:hover .icon {
  -webkit-animation: icnBubble 0.7s ease-in-out;
  animation: icnBubble 0.7s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>
