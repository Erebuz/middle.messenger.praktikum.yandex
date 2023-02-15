import BaseAPI from '~src/api/baseApi'

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
}
