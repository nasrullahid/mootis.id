<template>
  <section class="headerTopNav">
    <div class="container mx-auto">
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
              <nuxt-link :to="item.link" :title="item.name">
                <font-awesome-icon :icon="['fab', item.name]" class="icon" />
              </nuxt-link>
            </li>
            <li class="userAccount">
              <nuxt-link to="/login" title="Welcome Guest">
                <font-awesome-icon :icon="['fas', 'user']" class="icon" />
                <span>Welcome, Guest</span>
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
.socialNetworks > a:hover .icon {
  -webkit-animation: icnBubble 0.7s ease-in-out;
  animation: icnBubble 0.7s ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>
