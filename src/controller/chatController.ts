import store from '~src/store'
import ChatApi from '~src/api/chatApi'
import { HTTPResponse } from '~src/utils/HttpTransport'
import State from '~src/store/state'
import UserApi from '~src/api/userApi'
import { UserInterface } from '~src/interfaces/user'
import { ChatPreviewInterface } from '~src/interfaces/chat'
import { hide_modal_dialog } from '~src/store/Actions'
import { appWS } from '~src'

const chatApi = new ChatApi()
const userApi = new UserApi()

export function getChats() {
  chatApi
    .get_chats()
    .then((res: HTTPResponse) => {
      store.set('chats', res.data)
    })
    .catch()
}

export function searchChat(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const chat_name = formData.get('search') as string

  if (chat_name) {
    chatApi
      .search_chats(chat_name)
      .then((res: HTTPResponse<ChatPreviewInterface>) => {
        store.set('search_chats', res.data)
      })
      .catch()
  } else {
    store.set('search_chats', [])
  }
}

export function createChat(title: string) {
  return chatApi.create_chat(title).then(() => {
    store.set('search_users', [])
    getChats()
  })
}

export function createChatWithUser(title: string, user_id: number) {
  chatApi
    .create_chat(title)
    .then((res: HTTPResponse<{ id: number }>) => {
      store.set('search_users', [])
      getChats()

      if (res.data?.id) {
        addUserToChatById(res.data?.id, user_id).catch()
      }
    })
    .catch()
}

export function sendMessage(ev: SubmitEvent) {
  const formData = new FormData(ev.target as HTMLFormElement)

  const message = formData.get('message')

  appWS.send({ content: message, type: 'message' })

}

export function getCurrentChatUsers() {
  const chat_id = State.store.current_chat!.id
  return chatApi
    .get_users(chat_id)
    .then((res: HTTPResponse<UserInterface[]>) => {
      store.set('current_chat_users', res.data)
    })
}

export function addUserToCurrentChat(id: number) {
  const chat_id = State.store.current_chat!.id
  return addUserToChatById(chat_id, id)
}

export function addUserToChatByLogin(login: string) {
  userApi
    .search_user(login)
    .then((res: HTTPResponse<UserInterface[]>) => {
      if (res.data?.length === 1) {
        addUserToCurrentChat(res.data[0].id).catch()
        hide_modal_dialog()
      }
    })
    .catch()
}

export function addUserToChatById(chat_id: number, user_id: number) {
  return chatApi.add_users([user_id], chat_id).then()
}

export function removeUserByCurrentChat(user_id: number) {
  const chat_id = State.store.current_chat!.id

  chatApi
    .remove_users([user_id], chat_id)
    .then(() => {
      getCurrentChatUsers()
    })
    .catch()
}

export function removeUsers(ids: number[], chat_id: number) {
  chatApi
    .remove_users(ids, chat_id)
    .then(() => {
      store.set('current_chat', null)
      getChats()
    })
    .catch()
}

export function leaveChat() {
  const id = State.store.user.id
  const chat_id = State.store.current_chat!.id

  chatApi
    .remove_users([id], chat_id)
    .then(() => {
      store.set('current_chat', null)
      getChats()
    })
    .catch()
}

export function deleteChat() {
  const chat_id = State.store.current_chat!.id

  chatApi
    .delete_chat(chat_id)
    .then(() => {
      store.set('current_chat', null)
      getChats()
    })
    .catch()
}

export function setChatAvatar() {
  const input = document.getElementById('chat_avatar') as HTMLInputElement
  const file = input.files?.[0]

  if (file) {
    const formData = new FormData()
    const chatId = State.store.current_chat?.id
    formData.set('avatar', file)
    formData.set('chatId', `${chatId}`)

    chatApi
      .update_chat_avatar(formData)
      .then(() => {
        store.set('current_chat', null)
        hide_modal_dialog()
        getChats()
      })
      .catch()
  }
}

export function get_old_messages() {
  appWS.send({ content: 0, type: 'get old' })
}
