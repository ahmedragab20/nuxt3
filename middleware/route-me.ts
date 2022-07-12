export default defineNuxtRouteMiddleware((to) => {
  const { $config } = useNuxtApp();
  if ($config) {
    console.log(
      "%cAccessed runtime config within middleware.",
      "background: brown; color: black; padding: 4px; border-radius: 4px; font-weight: bold;"
    );
  }
});
