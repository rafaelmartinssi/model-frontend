import { useStorage, type RemovableRef } from '@vueuse/core'
import { defineStore, StoreDefinition } from 'pinia'
import type { UserSession, Token } from './types'

interface State {
  _userSession: RemovableRef<UserSession>
  _token: RemovableRef<Token>
  _isLogged: RemovableRef<boolean>
}

export const useMainStore: StoreDefinition = defineStore<'main', State>({
  id: 'main',
  state: () => ({
    _userSession: useStorage('userSession', {} as UserSession),
    _token: useStorage('token', {} as Token),
    _isLogged: useStorage('isLogged', false)
  }),
  getters: {
    userSession: (state) => ({ ...state._userSession }),
    token: (state) => state._token.access_token,
    userName: (state) => state._userSession.nome,
    isLogged: (state) => state._isLogged
  },
  actions: {
    logout () {
      this._userSession = {} as UserSession
      this._token = {} as Token
      this._isLogged = false
      window.localStorage.clear()
    },
    setToken (token: Token) {
      this._token = { ...token }
    },
    setUserSession (user: UserSession) {
      this._userSession = { ...user }
      if (this._userSession) this._isLogged = true
      else this._isLogged = false
    }
  }
})
