export default defineNuxtPlugin(() => {
  console.log(
    "%cAccessed runtime config within global-plugin.",
    "background: white; color: black; padding: 4px; border-radius: 4px; font-weight: bold;"
  );
  addRouteMiddleware(
    "global-route-watcher",
    (to, from) => {
      if (to.fullPath === "/product") {
        return "/";
      } else if (to.fullPath === from.fullPath && to.fullPath !== "/") {
        // this condition is just as a work around for an issue in Calling the data in the dynamic pages, once I'm not using a normal API
        return "/";
      }
    },
    { global: true }
  );
});
