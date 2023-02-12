import GeneralAsideComponent from '~src/component/generalAside/AsideClass'
import connect from '~src/utils/store/Connect'
import ChatPreviewComponent from '~src/component/components/chatPreview'
import State from '~src/store/state'

export default connect<typeof GeneralAsideComponent>(
  GeneralAsideComponent,
  (state: typeof State) => {
    const chats = []
    for (const item in state) {
      chats.push(
        new ChatPreviewComponent({
          name: item,
          message: item,
          count: '1',
          time: '12:00',
        })
      )
    }

    return { chats }
  }
)
