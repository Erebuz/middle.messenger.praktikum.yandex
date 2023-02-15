import AppStore from './store'
import { ChatPreviewInterface } from '~src/interfaces/chat'

const store = new AppStore()

export const show_add_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: true })
}

export const show_remove_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: false })
}

export const set_current_chat = (chat: ChatPreviewInterface) => {
  store.set('current_chat', chat)
}
