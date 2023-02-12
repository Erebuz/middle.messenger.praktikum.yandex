import EventBus from '~src/utils/EventBus'

export default class Store extends EventBus {
  static EVENT_UPDATE = 'event_update'
  private static _instance: Store
  protected static STORE_NAME = 'store'

  protected _state: Record<string, any> = {}

  constructor() {
    if (Store._instance) {
      return Store._instance
    }

    super()

    const savedState = this.get_save_state()

    this._state = savedState ? savedState : {}

    Store._instance = this

    this.on(Store.EVENT_UPDATE, () => {
      this.set_save_state()
    })
  }

  protected get_save_state() {
    return {}
  }

  protected set_save_state() {}

  getState() {
    return this._state
  }

  removeState() {
    this._state = {}
    this.emit(Store.EVENT_UPDATE)
  }

  set(id: string, value: any) {
    this._state[id] = value
    this.emit(Store.EVENT_UPDATE)
    return this
  }
}
