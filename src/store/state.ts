import { cloneDeep } from '~src/utils/mydash/cloneDeep'
import { ChatPreviewInterface } from '~src/interfaces/chat'
import { UserInterface } from '~src/interfaces/user'

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
    type: 'add' | 'remove' | 'create'
  }
  search_chats: any[]
  search_users: UserInterface[]
  current_chat: ChatPreviewInterface | null
  current_chat_users: UserInterface[]
  show_user_settings: {
    new: boolean
    show: boolean
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
    type: 'create',
  },
  search_chats: [],
  search_users: [],
  current_chat: null,
  current_chat_users: [],
  show_user_settings: {
    new: true,
    show: false,
  },
}

export const State: { store: StateInterface } = {
  store: cloneDeep(defaultState),
}

export default State
