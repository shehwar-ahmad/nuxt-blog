export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie("user").value;

  if (!isAuthenticated && to.path.startsWith("/admin")) {
    return navigateTo("/login");
  }
});
