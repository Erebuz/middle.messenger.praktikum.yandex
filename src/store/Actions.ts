import AppStore from './store'
import HTTPTransport, { HTTPResponse } from '~src/utils/HttpTransport'

const http = new HTTPTransport('https://ya-praktikum.tech/api/v2')

const store = new AppStore()

export const show_add_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: true })
}

export const show_remove_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: false })
}

export const api_get_chats = () => {
  http.get('/chats').then((res: HTTPResponse) => {
    store.set('chats', res.data)
  })
}

export const api_create_chat = (title: string) => {
  http.post('/chats', { data: { title: title } }).then()
}

export const api_get_search_users = (login: string) => {
  http
    .post('/user/search', { data: { login } })
    .then((res: HTTPResponse<any[]>) => store.set('search_users', res.data))
}
