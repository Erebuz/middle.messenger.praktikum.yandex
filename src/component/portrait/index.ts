import connect from '~src/utils/store/Connect'
import { StateInterface } from '~src/store/state'
import PortraitComponent from '~src/component/portrait/PortraitClass'
import { BASE_URL } from '~src/api/baseApi'

export default connect<typeof PortraitComponent>(
  PortraitComponent,
  (state: StateInterface) => {
    const src = BASE_URL + '/resources' + state.user.avatar
    const hide = state.user.avatar == null

    return { src, hide }
  }
)
