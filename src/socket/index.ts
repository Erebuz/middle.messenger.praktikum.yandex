import { WS } from '~src/utils/WebSocket'
import ChatApi from '~src/api/chatApi'
import State from '~src/store/state'
import wsActions from '~src/socket/actions'

const chatApi = new ChatApi()

export default class AppWS extends WS {
  chatId: number
  intervalId: NodeJS.Timer

  constructor() {
    super('wss://ya-praktikum.tech/ws/chats')
  }

  async connect(chatId: number) {
    if (chatId === this.chatId) {
      return
    } else {
      this.disconnect()
      clearInterval(this.intervalId)
      this.chatId = chatId
    }

    const userId = State.store.user.id
    const token = await AppWS.get_token(chatId)

    if (token) {
      super._connect(
        userId,
        chatId,
        token,
        (ev: { type: string } & { [key: string]: unknown }) => {
          try {
            if (ev.type && Object.keys(wsActions).includes(ev.type)) {
              wsActions[ev.type](ev)
            } else {
              wsActions.default(ev)
            }
          } catch (e) {
            if (ev.type){
              console.error(`WebSocket action ${ev.type} not exist`)
            }
            console.error(e)
          }
        }
      )

      this.intervalId = setInterval(() => {
        this.send({ type: 'ping' })
      }, 10000)
    }
  }

  private static get_token(chatId: number) {
    return chatApi.get_token(chatId)
  }
}
