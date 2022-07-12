import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NIKE",
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
      ],
    },
  },
  buildModules: ["@nuxtjs/tailwindcss"],
});
