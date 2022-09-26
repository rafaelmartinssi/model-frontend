import axios from 'axios'
import { UsuarioService } from './UsuarioService'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

export default {
  usuario: new UsuarioService(httpClient)
}
