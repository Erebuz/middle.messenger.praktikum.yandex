export class WS {
  private static _instance: WS

  private readonly baseUrl: string
  private socket: WebSocket | null = null

  constructor(baseUrl?: string) {
    if (WS._instance) {
      return WS._instance
    }

    if (!baseUrl) {
      throw new Error('Must specify the base URL on the first call')
    }

    this.baseUrl = baseUrl
    WS._instance = this
    return this
  }

  protected _connect(
    userId: number,
    chatId: number,
    token: string,
    onMessage: (...args: unknown[]) => unknown
  ) {
    this.socket = new WebSocket(`${this.baseUrl}/${userId}/${chatId}/${token}`)

    this.socket.addEventListener('message', (ev) => {
      try {
        onMessage(JSON.parse(ev.data))
      } catch (e) {
        console.error(e)
        onMessage(ev.data)
      }
    })

    this.socket?.addEventListener('open', () => {
      console.log('ws is opened')
    })

    this.socket?.addEventListener('close', () => {
      console.log('ws is closed')
    })

    this.socket?.addEventListener('error', () => {
      console.log('ws is error')
    })

    return this
  }

  disconnect() {
    this.socket?.close()
    this.socket = null
  }

  send(message: unknown) {
    try {
      this.socket?.send(JSON.stringify(message))
    } catch (e) {
      console.error(e)
    }
  }
}
