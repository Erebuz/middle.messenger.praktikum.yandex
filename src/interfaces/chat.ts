import { UserInterface } from '~src/interfaces/user'

export interface ChatPreviewInterface {
  id: number
  title: string
  avatar: string | null
  created_by: number
  unread_count: number
  last_message: null | {
    user: UserInterface
    time: string
    content: string
  }
}

export interface MessageInterface {
  id: number
  user_id: number
  chat_id: number
  type: 'message'
  time: string
  content: string
  is_read: boolean
  file: string | null
}
