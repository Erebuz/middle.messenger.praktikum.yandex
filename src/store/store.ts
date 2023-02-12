import Store from '~src/utils/store/Store'
import State, { StateInterface } from '~src/store/state'

export default class AppStore extends Store<StateInterface> {
  readonly STORE_NAME = 'store'
  protected get_save_state() {
    return State[this.STORE_NAME]
  }

  protected set_save_state() {
    State[this.STORE_NAME] = this._state
  }
}
