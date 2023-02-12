export interface StateInterface {
  chats: string[]
  user: {
    id: number
    first_name: string
    second_name: string
    display_name: null | string
    login: string
    avatar: null | string
    email: string
    phone: string
  }
}

const State: { store: StateInterface } = {
  store: {
    chats: [],
    user: {
      id: 0,
      first_name: '',
      second_name: '',
      display_name: null,
      login: '',
      avatar: null,
      email: '',
      phone: '',
    },
  },
}

export default State
