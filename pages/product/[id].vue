<template>
  <div class="flex flex-col items-center" v-if="currentProduct">
    <Alert v-if="showAlert" :isGreen="alertStatus" />
    <div class="w-full flex justify-center items-center">
      <div
        class="mt-6 flex justify-center items-center w-52 sm:w-72 lg:w-80 xl:w-96 rounded-xl overflow-hidden"
      >
        <img :src="currentProduct.image" alt="product image" />
      </div>
    </div>
    <div class="w-full flex justify-center items-center text-center flex-col">
      <h3 class="text-xl sm:text-2xl lg:text-3xl mt-2">
        <span class="-mr-0.5">
          {{ currentProduct.name }}
        </span>
        <span v-html="getEmoji(currentProduct.mainColor)" />
      </h3>
      <p>{{ currentProduct.description }}</p>
      <strong :class="currentProduct.tailwindTextColor"
        >{{ currentProduct.price }}$</strong
      >
      <button
        @click="favoritesHandler(currentProduct)"
        class="px-6 py-4 border-2 uppercase rounded-xl mt-2"
        :class="{
          'border-green-400 text-green-600 bg-green-50 font-semibold':
            productExist,
        }"
      >
        <span v-if="!productExist">Add to favorites</span>
        <span v-else>Added to favorites</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { productData } from "@/ts/types";
  import { getEmoji } from "@/utils/helpers";

  const route = useRoute();
  const showAlert = ref(false);
  const alertStatus = ref(false);

  const id = route.params.id;
  const currentProduct = ref();
  const productExist = ref(false);

  const isCurrentProductExist = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const clickedItem = favorites?.find(
      (product) => product.id == currentProduct.value?.id
    );

    if (clickedItem) {
      productExist.value = true;
    } else {
      productExist.value = false;
    }
  };

  //! taking this approach isn't the best way to do this type of pages, you should have a separate endpoint for etch item
  useNewCollections().then((res) => {
    res.value.data.forEach((element) => {
      if (element.id == id) {
        currentProduct.value = element;
      }
    });
  });

  // Add to favorites
  const favoritesHandler = (item: productData) => {
    if (productExist.value) {
      alertStatus.value = false;
    } else {
      alertStatus.value = true;
    }

    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);

    setFavorites(item);

    isCurrentProductExist();
  };

  watchEffect(() => {
    isCurrentProductExist();
  });
</script>
