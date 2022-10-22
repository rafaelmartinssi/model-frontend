import type { Token } from 'src/stores/types'
import type { Response } from './common/types'
import { RequestPath, RestClient } from './common/rest-client'

@RequestPath('/oauth/token')
class TokenService extends RestClient<{ id?: number }> {
  public async getTokenUser (code: string): Promise<Response<Token>> {
    const response = await this.httpClient.post(
      `${this.path}`,
      {
        code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:9000/callback',
        code_verifier: 'ksagsfgadsgfdsjgfhds54df4df8fd544',
        client_id: 'frontend-web'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    return this.handleResponse(response)
  }
}

export { TokenService }
