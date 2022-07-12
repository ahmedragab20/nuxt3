<template>
  <nav class="flex justify-center items-center bg-slate-100">
    <nuxt-link
      to="/"
      exact
      class="font-bold flex justify-center items-center flex-col"
      title="home screen"
    >
      <!-- Nike -->
      <img src="/images/nike-logo.png" alt="nike logo" width="40" />
    </nuxt-link>
  </nav>
  <slot />
  <div
    class="fixed right-3 bottom-3 shadow-xl rounded-xl text-2xl p-2 bg-white z-50"
    title="favorite products"
  >
    <nuxt-link to="/favorites">🥰</nuxt-link>
  </div>
  <footer class="mt-5 text-center py-3">
    Created by Ahmed Ragab &copy; 2022
  </footer>
</template>
