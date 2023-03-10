import BaseAPI from '~src/api/baseApi'
import { HTTPResponse } from '~src/utils/HttpTransport'

export default class ChatApi extends BaseAPI {
  constructor() {
    super('chats')
  }

  get_chats() {
    return this._get('')
  }

  create_chat(title: string) {
    return this._create('', { data: { title } })
  }

  get_users(chat_id: number) {
    return this._get(chat_id + '/users')
  }

  add_users(ids: number[], chat_id: number) {
    return this._update('users', {
      data: {
        users: ids,
        chatId: chat_id,
      },
    })
  }

  remove_users(ids: number[], chat_id: number) {
    return this._delete('users', {
      data: {
        users: ids,
        chatId: chat_id,
      },
    })
  }

  delete_chat(chat_id: number) {
    return this._delete('', {
      data: {
        chatId: chat_id,
      },
    })
  }

  get_token(chat_id: number) {
    return this._set(`token/${chat_id}`).then(
      (res: HTTPResponse<{ token: string }>) => res.data?.token
    )
  }

  search_chats(name: string) {
    return this._get('', {
      data: {
        title: name,
      },
    })
  }

  update_chat_avatar(formData: FormData) {
    return this._update('avatar', {
      data: formData,
    })
  }

  get_new_mes_count(chatId: number) {
    return this._get(`new/${chatId}`)
  }
}
