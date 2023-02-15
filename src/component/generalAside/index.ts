import GeneralAsideComponent from '~src/component/generalAside/AsideClass'
import connect from '~src/utils/store/Connect'
import ChatPreviewComponent from '~src/component/components/chatPreview'
import { StateInterface } from '~src/store/state'
import UserPreviewComponent from '~src/component/components/userPreview'
import CancelSearchComponent from '~src/component/cancelSearch'

export default connect<typeof GeneralAsideComponent>(
  GeneralAsideComponent,
  (state: StateInterface) => {
    const result = []

    if (state.search_users.length > 0) {
      for (const item in state.search_users) {
        result.push(
          new UserPreviewComponent({
            user: state.search_users[item],
          })
        )
      }
      result.push(new CancelSearchComponent())
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
