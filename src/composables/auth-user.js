import store from "@/store";

export async function authUser(to, from, next) {
  const currentUser = await store.dispatch("auth/getCurrentUser");

  if (!currentUser) {
    // Redirect to login page if user is not authenticated.
    next("/login");
  } else {
    // Allow access to route if user is authenticated.
    next();
  }
}
