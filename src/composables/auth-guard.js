import store from "@/store";

export async function authGuard(to, from, next) {
  const currentUser = await store.dispatch("auth/getCurrentUser");

  if (!currentUser) {
    // User is not authenticated, redirect to login page
    next("/login");
  } else {
    // User is authenticated, allow access to route
    next();
  }
}
