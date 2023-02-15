import connect from '~src/utils/store/Connect'
import GeneralBodyComponent from '~src/component/generalBody/GeneralBodyClass'
import { StateInterface } from '~src/store/state'

export default connect<typeof GeneralBodyComponent>(
  GeneralBodyComponent,
  (state: StateInterface) => {
    const show = state.current_chat !== null
    return { show }
  }
)
