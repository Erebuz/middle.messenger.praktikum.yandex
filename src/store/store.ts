import Store from '~src/utils/store/Store'
import State from '~src/store/state'

export default class AppStore extends Store {
  protected get_save_state() {
    return State[Store.STORE_NAME]
  }

  protected set_save_state() {
    State[Store.STORE_NAME] = this._state
  }
}
