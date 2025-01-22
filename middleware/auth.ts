export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie("authToken").value;

  if (!isAuthenticated && to.path.startsWith("/admin")) {
    return navigateTo("/auth/login");
  }
});
