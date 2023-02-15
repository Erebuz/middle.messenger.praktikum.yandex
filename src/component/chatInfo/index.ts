import connect from '~src/utils/store/Connect'
import { StateInterface } from '~src/store/state'
import ChatInfoComponent from '~src/component/chatInfo/ChatInfoClass'

export default connect<typeof ChatInfoComponent>(
  ChatInfoComponent,
  (state: StateInterface) => {
    const chat = state.current_chat
    return { chat }
  }
)
