import connect from '~src/utils/store/Connect'
import ModalDialogComponent from '~src/component/modalDialog/ModalDialogClass'
import { StateInterface } from '~src/store/state'
import { UserInterface } from '~src/interfaces/user'

export default connect<typeof ModalDialogComponent>(
  ModalDialogComponent,
  (state: StateInterface) => {
    let current_users: UserInterface[]
    if (state.modal_dialog.type === 'remove')
      current_users = state.current_chat_users
    else {
      current_users = state.search_users
    }
    return { current_users, ...state.modal_dialog }
  }
)
