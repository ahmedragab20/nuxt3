<template>
  <nuxt-link
    v-if="isGreen"
    to="/favorites"
    class="absolute top-10 right-0 z-50 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
    role="alert"
  >
    <div class="flex gap-2">
      <div class="py-1" v-html="checkSvg" />
      <div>
        <p class="font-bold">Add successfully to your favorites list</p>
        <p class="text-sm">click here to see the whole list.</p>
      </div>
    </div>
  </nuxt-link>
  <nuxt-link
    v-else
    to="/favorites"
    class="absolute top-10 right-0 z-50 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
    role="alert"
  >
    <div class="flex gap-2">
      <div class="py-1" v-html="errorSvg" />
      <div>
        <p class="font-bold">Hmm, this product is already exist</p>
        <p class="text-sm">click here to see the whole list.</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
  const props = defineProps({
    isGreen: Boolean,
  });

  const checkSvg = ref(
    `<svg style="color: rgb(20, 184, 166);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 " clip-rule="nonzero" fill="#14b8a6"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="#14b8a6" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"></path></g></svg>`
  );
  const errorSvg = ref(
    `<svg class="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>`
  );
</script>
