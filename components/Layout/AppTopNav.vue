<template>
  <section class="headerTopNav">
    <div class="max-w-4xl mx-auto px-4">
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
            <li class="userAccount border-0 sm:border-l border-opacity-25">
              <button
                class="focus:outline-none focus:border-white"
                @click="isOpen = !isOpen"
              >
                <font-awesome-icon :icon="['fas', 'user']" class="icon" />
                <span class="hidden sm:inline">Welcome, Guest</span>
              </button>
              <button
                v-if="isOpen"
                class="fixed inset-0 h-full w-full cursor-default z-50"
                tabindex="1"
                @click="isOpen = false"
              ></button>
            </li>
          </ul>
          <div class="userAccountCard">
            <div
              v-if="isOpen"
              class="absolute right-0 mt-1 w-48 bg-white shadow-xl z-50"
            >
              <button
                class="block px-4 py-2 text-gray-800 hover:bg-blue-500 w-full text-left hover:text-white focus:outline-none"
                @click="userAction('/login')"
              >
                Login
              </button>
              <button
                class="block px-4 py-2 text-gray-800 hover:bg-blue-500 text-left w-full hover:text-white focus:outline-none"
                @click="userAction('/daftar')"
              >
                Daftar
              </button>
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
  methods: {
    userAction(params) {
      this.isOpen = false
      this.$router.push(params)
    }
  }
}
</script>

<style lang="postcss" scoped>
.headerTopNav {
  @apply shadow p-1 text-sm;
  background: var(--bg-primary);
  color: var(--text-normal);
}
.officeTime {
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
    color: var(--text-normal);
  }
  & a:hover {
    color: var(--text-link);
  }
}
.socialItems {
  @apply mb-0 mr-4;
}
.userAccount {
  @apply mb-0 ml-0 pl-4;
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
