import GeneralAsideComponent from '~src/component/generalAside/AsideClass'
import connect from '~src/utils/store/Connect'
import ChatPreviewComponent from '~src/component/components/chatPreview'
import { StateInterface } from '~src/store/state'

export default connect<typeof GeneralAsideComponent>(
  GeneralAsideComponent,
  (state: StateInterface) => {
    const result = []

    if (state.search_users.length > 0) {
      for (const item in state.search_users) {
        result.push(
          new ChatPreviewComponent({
            name: item,
            message: item,
            count: '1',
            time: '12:00',
          })
        )
      }
    } else  {
      for (const item in state.chats) {
        result.push(
          new ChatPreviewComponent({
            name: item,
            message: item,
            count: '1',
            time: '12:00',
          })
        )
      }
    }

    return { preview: result }
  }
)
