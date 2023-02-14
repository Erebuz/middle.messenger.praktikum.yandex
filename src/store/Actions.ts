import AppStore from './store'
import HTTPTransport, { HTTPRequest } from '~src/utils/HttpTransport'

const http = new HTTPTransport('https://ya-praktikum.tech/api/v2')

const store = new AppStore()

export const api_get_chats = () => {
  http.get('/chats').then((res: HTTPRequest) => {
    store.set('chats', res.data)
  })
}

export const api_create_chat = (title: string) => {
  http.post('/chats', { data: { title: title } }).then()
}

export const get_chats = () => {
  return store
}

export const show_add_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: true })
}

export const show_remove_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: false })
}
