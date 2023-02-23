import EventBus from '~src/utils/EventBus'

export default class Store<State = {}> extends EventBus {
  static EVENT_UPDATE = 'event_update'
  private static _instance: Store
  protected readonly STORE_NAME = 'store'

  protected _state: State = {} as State

  constructor() {
    if (Store._instance) {
      return Store._instance as Store<State>
    }

    super()

    this._state = this.get_save_state()

    Store._instance = this as Store

    this.on(Store.EVENT_UPDATE, () => {
      this.set_save_state()
    })
  }

  protected get_save_state(): State {
    return {} as State
  }

  protected set_save_state() {}

  getState(): State {
    return this._state as State
  }

  public removeState() {
    this.emit(Store.EVENT_UPDATE)
  }

  set(id: string, value: unknown) {
    ;(this._state as Record<string, unknown>)[id] = value
    this.emit(Store.EVENT_UPDATE)
    return this
  }
}
