<template>
  <div :class="bannerStyles" class="flex w-full flex-wrap">
    <div
      :class="[contentStyles, imageFirst ? 'order-2' : 'order-2 lg:order-1']"
      class="sm:px-7 px-3 lg:w-1/2 w-full text-center lg:text-start flex justify-center items-center lg:items-start flex-col"
    >
      <h2 class="sm:text-4xl text-3xl font-semibold">
        {{ content.title }}
      </h2>
      <p class="my-5">
        {{ content.description }}
      </p>
      <div>
        <button
          type="button"
          :class="btnStyles"
          class="border-2 sm:px-7 sm:py-3.5 px-5 py-2 uppercase rounded-lg transition-all duration-300"
          @click="button.handler()"
        >
          {{ button.text }}
        </button>
      </div>
    </div>
    <div
      :class="[imageStyles, imageFirst ? 'order-1' : 'order-1 lg:order-2']"
      class="lg:w-1/2 w-full"
    >
      <template v-if="showImageSlot">
        <slot name="image" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    content: Object,
    image: Object,
    button: Object,
    contentStyles: String,
    imageStyles: String,
    bannerStyles: String,
    btnStyles: String,
    imageFirst: Boolean,
  });

  // check if the slot is defined or not

  const slots = useSlots();

  const showImageSlot = () => !!slots.image;
</script>
