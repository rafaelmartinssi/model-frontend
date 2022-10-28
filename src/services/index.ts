import axios from 'axios'
import { TokenService } from './TokenService'
import { UserService } from './UserService'
import { useMainStore } from 'src/stores/userStore'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

httpClient.interceptors.request.use((config) => {
  const main = useMainStore()
  const token = main.token
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
})

export default {
  user: new UserService(httpClient),
  token: new TokenService(httpClient)
}
