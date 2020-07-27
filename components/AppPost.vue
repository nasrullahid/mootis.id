<template>
  <article class="postColumn h-auto">
    <div class="thumbnail">
      <app-img src="/slide-1.jpg" alt="Catalya Gardens Hertasning" />
    </div>
    <h2>Catalya Gardens Hertasning</h2>
    <div class="address">
      <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon" />
      <span>Kawasan Hertasning Makassar</span>
    </div>
    <div class="content">
      Perumahan Catalya Gardens dibangun dengan Konsep Islamic Green Living
      Concept dengan Full Fasilitas, Rumah Ekslusive Anda dengan Harga hemat dan
      berkualitas...
    </div>
  </article>
</template>

<style lang="postcss" scoped>
.postColumn {
  @apply rounded shadow overflow-hidden relative;
  background-color: var(--card-bg);
  & h2 {
    @apply m-0 p-4 shadow-lg;
    color: var(--text-normal);
  }
  & .address {
    @apply px-4 text-sm border-b border-t border-gray-500 text-gray-500;
    & span {
      @apply ml-2;
    }
  }
  & .content {
    @apply p-4;
  }
}
</style>
