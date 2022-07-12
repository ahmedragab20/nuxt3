<template>
  <NuxtLayout :name="layout">
    <!-- The Wrapper of the pages -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
  const layout = "default"; // you can remove it as long as you named it default
</script>
