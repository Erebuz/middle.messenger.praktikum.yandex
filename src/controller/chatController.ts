import store from '~src/store'
import ChatApi from '~src/api/chatApi'
import { HTTPResponse } from '~src/utils/HttpTransport'
import { searchUser } from '~src/controller/userController'
import State from '~src/store/state'

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

export function addUserToChat(id: number) {
  const chat_id = State.store.current_chat!.id

  chatApi.add_users([id], chat_id).then()
}

export function addUserToChatByLogin(login: string) {}

export function removeUserToChatByLogin(login: string) {}

export function removeUsers(ids: number[], chat_id: number) {
  chatApi.remove_users(ids, chat_id).then(() => {
    store.set('current_chat', null)
    getChats()
  })
}

export function leaveChat() {
  const id = State.store.user.id
  const chat_id = State.store.current_chat!.id

  chatApi.remove_users([id], chat_id).then(() => {
    store.set('current_chat', null)
    getChats()
  })
}

export function deleteChat() {
  const chat_id = State.store.current_chat!.id

  chatApi.delete_chat(chat_id).then(() => {
    store.set('current_chat', null)
    getChats()
  })
}
