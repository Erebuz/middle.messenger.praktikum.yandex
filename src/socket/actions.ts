import store from '~src/store'
import { add_message_to_current } from '~src/store/Actions'
import { MessageInterface } from '~src/interfaces/chat'

const wsActions: { [key: string]: (...args: unknown[]) => void } = {
  pong: () => console.log('Pong'),
  message: (mes: MessageInterface) => add_message_to_current(mes),
  default: (mes: MessageInterface[]) => {
    store.set('current_messages', mes.reverse())
  },
}

export default wsActions
