import { cloneDeep } from '~src/utils/mydash/cloneDeep'

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
  modal_dialog: {
    show: boolean
    add: boolean
  }
}

export const defaultState: StateInterface = {
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
  modal_dialog: {
    show: false,
    add: false,
  },
}

const State: { store: StateInterface } = {
  store: cloneDeep(defaultState),
}

export default State
