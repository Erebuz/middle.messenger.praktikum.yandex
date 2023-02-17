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
