import axios from 'axios'
import { TokenService } from './TokenService'
import { UsuarioService } from './UsuarioService'
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
  usuario: new UsuarioService(httpClient),
  token: new TokenService(httpClient)
}
