import AppStore from './store'

const store = new AppStore()

export const show_add_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: true })
}

export const show_remove_user_dialog = () => {
  store.set('modal_dialog', { show: true, add: false })
}
