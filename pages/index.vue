<template>
  <div>
    <!-- Banner -->
    <ArticleWithPoster
      :content="bannerContent"
      :button="bannerButton"
      :banner-styles="bannerStyles"
      :content-styles="contentStyles"
      :btn-styles="btnStyles"
      :image-first="false"
    >
      <template #image>
        <div class="p-5 flex justify-center items-center">
          <div class="w-11/12 md:w-[70%]">
            <img
              lazy
              :src="bannerImage.src"
              :alt="bannerImage.alt"
              class="select-none pointer-events-none"
            />
          </div>
        </div>
      </template>
    </ArticleWithPoster>

    <!-- New Collections Block -->
    <div v-if="products">
      <Headline :title="'New Collections'" />
      <div
        v-if="products.data"
        class="my-10 flex xl:justify-center justify-start xl:overflow-visible overflow-auto container mx-auto"
      >
        <!-- Collections card -->
        <div
          v-for="product in products.data"
          :key="product.id"
          class="xl:w-1/5 xl:m-auto"
        >
          <CollectionsCard :item="product" />
        </div>
      </div>
      <div
        v-else-if="products.pending || true"
        class="flex justify-center items-center flex-col"
      >
        <img
          src="/images/boy-running.gif"
          alt="boy running (gif image)"
          width="150"
        />
        <span class="uppercase pb-3"> loading... </span>
      </div>
      <div
        v-else-if="products.error"
        class="flex justify-center items-center flex-col text-red-500"
      >
        <img src="/images/error.gif" alt="error image (gif)" width="250" />
        <span class="pb-3"
          >Ops!! something went wrong. pls try again later!</span
        >
      </div>
    </div>

    <!-- Application Block -->
    <ArticleWithPoster
      :content="appPosterContent"
      :button="appPosterButton"
      :banner-styles="appPosterStyles"
      :content-styles="appPosterContentStyles"
      :btn-styles="appPosterBtnStyles"
      :image-first="true"
    >
      <template #image>
        <div class="p-5 flex justify-center items-center">
          <div class="w-11/12 md:w-[70%]">
            <img
              lazy
              :src="appPosterImage.src"
              :alt="appPosterImage.alt"
              class="select-none pointer-events-none mix-blend-normal"
            />
          </div>
        </div>
      </template>
    </ArticleWithPoster>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    // This is an example of using middleware
    middleware: "route-me",
  });

  /* Poster Content */
  const bannerContent = ref({
    title: "We got a new collections for you😉🥰",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque, est labore numquam quis rem!",
  });
  const bannerImage = ref({
    src: "/images/banner.png",
    alt: "image with some avatars",
  });
  const bannerStyles = ref("container mx-auto");
  const bannerButton = ref({
    text: "enroll now",
    handler: () => {
      console.log("enroll now");
    },
  });
  const contentStyles = ref("text-black");
  const btnStyles = ref("bg-black hover:bg-white text-white hover:text-black");

  // New Collections Products
  const products = ref();

  useNewCollections().then((data) => {
    products.value = data?.value;
  });

  // App Poster Block
  const appPosterContent = ref({
    title: "We Have An Application🙌",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque, est labore numquam quis rem!",
  });
  const appPosterImage = ref({
    src: "/images/kid-in-iphone.png",
    alt: "image with some avatars",
  });
  const appPosterStyles = ref("container mx-auto");
  const appPosterButton = ref({
    text: "Download it now",
    handler: () => {
      console.log("download the app");
    },
  });
  const appPosterContentStyles = ref("text-black");
  const appPosterBtnStyles = ref(
    "bg-black hover:bg-white text-white hover:text-black"
  );
</script>
