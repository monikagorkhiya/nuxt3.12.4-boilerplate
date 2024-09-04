import { useUserStore } from '../stores/users'

export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore()

  // If the user is authenticated, continue to the requested route
  if (userStore.authenticated === true) {
    return // returns nothing means continue the middleware, instead of redirect again
  }

  // If the user is not authenticated, redirect to the login page
  return navigateTo('/login')
})
