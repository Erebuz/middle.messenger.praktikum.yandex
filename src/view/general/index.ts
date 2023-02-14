import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/Component'
import GeneralAsideComponent from '~src/component/generalAside'
import GeneralBodyComponent from '~src/component/generalMain'
import ClipComponent from '~src/component/components/clips'
import MessageFieldComponent, {
  MessageFieldOptionsInterface,
} from '~src/component/components/messageField'
import InputComponent from '~src/component/components/input'
import { sendMessage } from '~src/controller/chatController'
import FileInputComponent from '~src/component/fileInput'

interface GeneralPageOptionsInterface {
  searchField: Component<MessageFieldOptionsInterface>
  messageField: Component<MessageFieldOptionsInterface>
}

export default class GeneralPage extends Component<GeneralPageOptionsInterface> {
  protected initProps() {
    this.props.messageField = new MessageFieldComponent({
      textField: new InputComponent({
        name: 'message',
        placeholder: 'Message',
        required: true,
      }),
      fileInput: new FileInputComponent(),
      events: {
        submit: sendMessage,
      },
    })
  }

  protected render(): Element {
    const aside = new GeneralAsideComponent()

    const main = new GeneralBodyComponent({
      messageField: this.props.messageField,
    })

    const clips = new ClipComponent({ hideBackClip: true })

    return new BodyComponent({
      aside,
      main,
      clips,
      showUserSettings: true,
    }).element
  }
}
