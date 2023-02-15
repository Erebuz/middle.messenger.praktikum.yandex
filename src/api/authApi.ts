import BaseAPI from '~src/api/baseApi'
import { UserRegistrationInterface } from '~src/interfaces/user'

export default class AuthApi extends BaseAPI {
  constructor() {
    super('auth')
  }

  sign_in(data: { login: string; password: string }) {
    return this._set('signin', { data })
  }

  logout() {
    return this._set('logout')
  }

  registration(data: Omit<UserRegistrationInterface, 'display_name'>) {
    return this._create('', { data })
  }

  get_user() {
    return this._get('user')
  }
}
