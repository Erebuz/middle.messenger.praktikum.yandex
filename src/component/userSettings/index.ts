import connect from '~src/utils/store/Connect'
import UserSettingsComponent from '~src/component/userSettings/UserSettingsClass'
import { StateInterface } from '~src/store/state'

export default connect<typeof UserSettingsComponent>(
  UserSettingsComponent,
  (state: StateInterface) => {
    return { ...state.show_user_settings }
  }
)
