import BaseAPI from '~src/api/baseApi'
import {
  UpdatePasswordInterface,
  UserRegistrationInterface,
} from '~src/interfaces/user'

export default class UserApi extends BaseAPI {
  constructor() {
    super('user')
  }

  update_settings(data: Omit<UserRegistrationInterface, 'password'>) {
    return this._update('profile', { data })
  }

  update_password(data: UpdatePasswordInterface) {
    return this._update('password', { data })
  }

  update_avatar(data: FormData) {
    return this._update('profile/avatar', { data })
  }

  search_user(login: string) {
    return this._set('search', { data: { login } })
  }
}
