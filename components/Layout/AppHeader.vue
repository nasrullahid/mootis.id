<template>
  <section class="header bg-gray-200 py-4 shadow">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-row items-center justify-start">
        <div class="flex flex-row items-center sm:hidden pl-3">
          <button
            class="flex items-center px-3 py-2 border rounded text-blue-300 border-blue-300 hover:text-blue-500 hover:border-blue-500"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <nuxt-link to="/" title="Beranda">
            <app-img :src="logo" alt="Logo" width="auto" height="auto" />
          </nuxt-link>
        </div>
        <div class="flex-row items-center hidden sm:block">
          <ul class="headerMenu">
            <li v-for="item in menu" :key="item.path">
              <nuxt-link
                :to="item.path"
                :title="item.name"
                class="flex items-center text-blue-300 hover:text-blue-500 py-2 px-4"
              >
                <font-awesome-icon :icon="['fas', item.icon]" class="icon" />
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    logo: {
      type: String,
      required: true
    },
    menu: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.headerMenu {
  margin-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding-top: 2px;
}
.headerMenu li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  color: #444;
  font-size: 0.9rem;
  line-height: 1.63636;
  margin-left: 1rem;
  margin-bottom: 0;
}
.headerMenu > li > a {
  background: linear-gradient(
    to right,
    #4299e1 0%,
    #4299e1 3px,
    transparent 3px
  );
  background-repeat: repeat-x;
  background-size: 100%;
  color: #4a5568;
  padding-left: 1rem;
  text-decoration: none;
}
.headerMenu > li > a:hover {
  background: linear-gradient(to right, #4299e1 0%, #4299e1 5px, transparent);
}
.headerMenu .icon {
  font-size: 1.125rem;
}
.headerMenu > li:hover .icon {
  -webkit-animation: icnBubble 0.7s ease-in-out;
  animation: icnBubble 0.7s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.headerMenu > li > a > span {
  margin-left: 0.5rem;
}
</style>
