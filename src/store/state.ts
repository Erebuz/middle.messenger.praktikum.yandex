import { cloneDeep } from '~src/utils/mydash/cloneDeep'
import { ChatPreviewInterface } from '~src/interfaces/chat'

export interface StateInterface {
  chats: ChatPreviewInterface[]
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
  search_users: any[]
  current_chat: ChatPreviewInterface | null
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
  search_users: [],
  current_chat: null,
}

export const State: { store: StateInterface } = {
  store: cloneDeep(defaultState),
}

export default State
