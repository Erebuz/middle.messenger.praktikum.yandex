import AppStore from './store'
import { ChatPreviewInterface } from '~src/interfaces/chat'
import { getCurrentChatUsers } from '~src/controller/chatController'

const store = new AppStore()

export const show_add_user_dialog = () => {
  store.set('modal_dialog', { show: true, type: 'add' })
}

export const show_remove_user_dialog = () => {
  getCurrentChatUsers()
    .then(() => {
      store.set('modal_dialog', { show: true, type: 'remove' })
    })
    .catch()
}

export const show_create_chat_dialog = () => {
  store.set('modal_dialog', { show: true, type: 'create' })
}

export const show_set_chat_avatar = () => {
  store.set('modal_dialog', { show: true, type: 'add_avatar' })
}

export const hide_modal_dialog = () => {
  store.set('modal_dialog', { show: false, type: 'add' })
}

export const set_current_chat = (chat: ChatPreviewInterface) => {
  store.set('current_chat', chat)
  getCurrentChatUsers()
}

export const clear_search_user = () => {
  store.set('search_users', [])
}
