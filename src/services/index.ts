import axios from 'axios'
import { TokenService } from './TokenService'
import { UsuarioService } from './UsuarioService'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

export default {
  usuario: new UsuarioService(httpClient),
  token: new TokenService(httpClient)
}
