<template>
  <div class="rounded-xl w-full p-3">
    <div class="h-[320px]">
      <img
        :src="item.image"
        alt="a guy wearing a t-shirt"
        class="h-full w-full object-cover shadow-md pointer-events-none xl:pointer-events-auto select-none rounded-xl transition-all duration-500 hover:scale-125"
      />
    </div>
    <div class="mt-2 py-1 px-3 bg-slate-100 rounded-xl">
      <h2 class="font-bold truncate text-2xl">
        <span class="-mr-0.5">{{ item.name }}</span>
        <span v-html="getEmoji(item.mainColor)" />
      </h2>
      <p class="my-1 line-clamp-2 text-slate-500 text-sm sm:text-base">
        {{ item.description }}
      </p>
      <nuxt-link
        v-if="!handler"
        :to="`product/${item.id}`"
        class="border-2 w-full sm:px-7 sm:py-3.5 px-5 py-2 mb-2 uppercase rounded-xl flex flex-nowrap whitespace-nowrap justify-center items-center gap-2"
      >
        More Details
        <img src="/images/right-arrow.png" alt="right arrow icon" width="18" />
      </nuxt-link>
      <button
        v-else
        class="border-2 w-full sm:px-7 sm:py-3.5 px-5 py-2 mb-2 uppercase rounded-xl flex flex-nowrap whitespace-nowrap justify-center items-center gap-2"
        @click="handler(item)"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getEmoji } from "@/utils/helpers";

  defineProps({
    item: Object,
    handler: Function,
    buttonText: String,
  });
</script>
