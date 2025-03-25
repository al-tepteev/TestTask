import { useAuthStore } from "~/store/auth/index.store";

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const publicRoutes = ['/login', '/error'];
  const isRouteProtected = !publicRoutes.includes(to.path);

  if (!authStore.isAuthenticated) {
    await authStore.initializeAuth();
  }

  if (isRouteProtected && !authStore.isAuthenticated) {
    return navigateTo('/login/');
  }

  if (to.path === '/login/' && authStore.isAuthenticated) {
    return navigateTo('/');
  }
});
