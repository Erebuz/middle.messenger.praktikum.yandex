import connect from '~src/utils/store/Connect'
import { StateInterface } from '~src/store/state'
import { baseUrl } from '~src/controller/userController'
import PortraitComponent from '~src/component/portrait/PortraitClass'

export default connect<typeof PortraitComponent>(
  PortraitComponent,
  (state: StateInterface) => {
    const src = baseUrl + '/resources' + state.user.avatar
    const hide = state.user.avatar == null

    return { src, hide }
  }
)
