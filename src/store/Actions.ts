import AppStore from './store'

const store = new AppStore()

const get_chats = () => {
  const state = store.getState()

  return state.chats
}

export { get_chats }
