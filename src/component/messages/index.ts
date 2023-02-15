import connect from '~src/utils/store/Connect'
import MessagesComponent from '~src/component/messages/MessagesClass'
import { StateInterface } from '~src/store/state'
import './index.scss'

export default connect<typeof MessagesComponent>(
  MessagesComponent,
  (state: StateInterface) => {
    return { ...state }
  }
)
