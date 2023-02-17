import AppStore from './store'
import { ChatPreviewInterface } from '~src/interfaces/chat'
import { get_current_chat_users } from '~src/controller/chatController'

const store = new AppStore()

export const show_add_user_dialog = () => {
  store.set('modal_dialog', { show: true, type: 'add' })
}

export const show_remove_user_dialog = () => {
  get_current_chat_users().then(() => {
    store.set('modal_dialog', { show: true, type: 'remove' })
  })
}

export const show_create_chat_dialog = () => {
  store.set('modal_dialog', { show: true, type: 'create' })
}

export const hide_modal_dialog = () => {
  store.set('modal_dialog', { show: false, type: 'add' })
}

export const set_current_chat = (chat: ChatPreviewInterface) => {
  store.set('current_chat', chat)
}

export const clear_search_user = () => {
  store.set('search_users', [])
}
