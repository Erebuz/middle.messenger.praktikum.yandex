import { WS } from '~src/utils/WebSocket'
import ChatApi from '~src/api/chatApi'
import State from '~src/store/state'
import wsActions from '~src/socket/actions'

const chatApi = new ChatApi()

export default class AppWS extends WS {
  chatId: number
  intervalId: any

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
        (ev: { type: string } & { [key: string]: any }) => {
          try {
            wsActions[ev.type](ev)
          } catch (e) {
            console.error(`Not find WS action "${ev.type}'`)
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
