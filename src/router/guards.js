import store from '@/store'

// Deny access to pages which require logged in if logged out
export function authGuard(to, from, next) {
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth
  })

  if(requiresAuth && !store.getters.getIsAuthenticated) {
    return next({name: 'Login'})
  }

  next()
}