import connect from '~src/utils/store/Connect'
import ModalDialogComponent from '~src/component/modalDialog/ModalDialogClass'
import { StateInterface } from '~src/store/state'

export default connect<typeof ModalDialogComponent>(
  ModalDialogComponent,
  (state: StateInterface) => {
    return { ...state.modal_dialog }
  }
)
