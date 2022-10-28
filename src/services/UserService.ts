import type { User } from 'src/stores/types'
import { RequestPath, RestClient } from './common/rest-client'
import { Response } from './common/types'

@RequestPath("/usuarios")
class UserService extends RestClient<User> {
  public async getUser (): Promise<Response<User>> {
    const response = await this.httpClient.get<User>(`${this.path}/autenticado`)
    return this.handleResponse(response)
  }
}

export { UserService }
