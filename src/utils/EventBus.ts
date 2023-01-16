export default class EventBus {
  listeners: { [key: string]: [(...args: any) => void] } = {}

  constructor() {}

  on(event: string, callback: (...args: any) => void) {
    this.listeners[event].push(callback)
  }

  off(event: string, callback: (...args: any) => void) {
    if (!Object.keys(this.listeners).includes(event)) {
      throw new Error(`No event ${event}`)
    }

    const index = this.listeners[event].indexOf(callback)

    this.listeners[event].splice(index, 1)
  }

  emit(event: string, ...args: any) {
    if (!Object.keys(this.listeners).includes(event)) {
      throw new Error(`No event ${event}`)
    }

    this.listeners[event].forEach((foo) => foo(...args))
  }
}
