import GeneralAsideComponent from '~src/component/generalAside/AsideClass'
import connect from '~src/utils/store/Connect'
import ChatPreviewComponent from '~src/component/components/chatPreview'
import { StateInterface } from '~src/store/state'

export default connect<typeof GeneralAsideComponent>(
  GeneralAsideComponent,
  (state: StateInterface) => {
    const result = []

    if (state.search_chats.length > 0) {
      for (const item of state.search_chats) {
        result.push(
          new ChatPreviewComponent({
            id: item.id,
            avatar: item.avatar,
            title: item.title,
            last_message: item.last_message,
            unread_count: item.unread_count,
            created_by: item.created_by,
          })
        )
      }
    } else {
      for (const item of state.chats) {
        result.push(
          new ChatPreviewComponent({
            id: item.id,
            avatar: item.avatar,
            title: item.title,
            last_message: item.last_message,
            unread_count: item.unread_count,
            created_by: item.created_by,
          })
        )
      }
    }

    return { preview: result }
  }
)
