import store from '~src/store'
import ChatApi from '~src/api/chatApi'
import { HTTPResponse } from '~src/utils/HttpTransport'
import { searchUser } from '~src/controller/userController'

const chatApi = new ChatApi()

export function getChats() {
  chatApi.get_chats().then((res: HTTPResponse) => {
    store.set('chats', res.data)
  })
}

export function searchChat(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const login = formData.get('search') as string

  searchUser(login)
}

export function createChat(title: string) {
  chatApi.create_chat(title).then(() => {
    store.set('search_users', [])
    getChats()
  })
}

export function sendMessage(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    message: formData.get('message'),
  }

  console.log(data)
}
