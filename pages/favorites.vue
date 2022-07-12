<template>
  <div
    class="min-h-[80vh]"
    :class="{ 'flex justify-center items-center': !isFavorites }"
  >
    <Headline :title="isFavorites ? 'Favorites List😍' : 'No Favorites👀'" />
    <div v-if="isFavorites">
      <div class="my-10 flex justify-center flex-wrap container mx-auto">
        <!-- Collections card -->
        <div
          v-for="product in favorites"
          :key="product.id"
          class="w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <CollectionsCard
            :item="product"
            :handler="favoritesHandler"
            buttonText="Remove Item 🧹"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { productData } from "@/ts/types";

  const favorites = ref(JSON.parse(localStorage.getItem("favorites")));
  const favoritesHandler = (item: productData) => {
    setFavorites(item);
    favorites.value = JSON.parse(localStorage.getItem("favorites"));
  };
  const isFavorites = computed(
    () => favorites.value && favorites.value.length > 0
  );

  //? just an example of how to use middleware

  definePageMeta({
    // This is an example of inline middleware
    middleware: () => {
      console.log("%cStrictly forbidden.", "color: red;font-size: 2rem;");
    },
  });
</script>
