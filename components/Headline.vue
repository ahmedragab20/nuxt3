<template>
  <h3 class="text-2xl sm:text-4xl my-5 text-center w-full">
    {{ title }}
  </h3>
</template>

<script setup lang="ts">
  defineProps({ title: String });
</script>
