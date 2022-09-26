import { UsuarioModel } from 'src/model/UsuarioModel'
import { RequestPath, RestClient } from './common/rest-client'

@RequestPath("/usuarios")
class UsuarioService extends RestClient<UsuarioModel> {}

export { UsuarioService }
