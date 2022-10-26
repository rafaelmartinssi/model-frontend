import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useMainStore } from 'src/stores/userStore'
import services from 'src/services'

const isAuthenticated = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext) => {
  const main = useMainStore()
  const token = main.token

  if (!token) {
    next('/index')
    return
  }

  // tenho que terminar

  next()
}

const login = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext) => {
  const issuer = 'http://localhost:8080/oauth/authorize'
  const params = {
    response_type: 'code',
    client_id: 'frontend-web',
    redirect_uri: 'http://localhost:9000/callback',
    code_challenge: 'ksagsfgadsgfdsjgfhds54df4df8fd544',
    code_challenge_method: 'plain'
  }

  const search = Object.entries(params)
    .map(([key, value]) => `${encodeURI(key)}=${encodeURI(value)}`)
    .join('&')

  location.href = `${issuer}?${search}`

  next(false)
}

const callback = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext) => {
  const main = useMainStore()

  if (main.token) {
    next({ name: 'home' })
    return
  }

  const params = new URLSearchParams(location.search)
  const code = params.get('code')

  if (!code) {
    next({ name: 'index' })
    return
  }

  try {
    const token = await services.token.getTokenUser(code)
    main.setToken(token.data)
    next({ name: 'home' })
  } catch (error) {
    console.error(error)
    next({ name: 'index' })
  }
}

const logout = () => {
  const main = useMainStore()

  const logoutUrl = new URL('http://localhost:8080/logout')
  location.href = logoutUrl.toString()
  main.logout()
}

export { login, callback, logout, isAuthenticated }
