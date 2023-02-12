export interface StateInterface {
  chats: string[]
}

const State: { store: StateInterface } = {
  store: {
    chats: [],
  },
}

export default State
