import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/Component'
import GeneralAsideComponent from '~src/component/generalAside'
import GeneralBodyComponent from '~src/component/generalMain'
import ChatPreviewComponent from '~src/component/components/chatPreview'
import ClipComponent from '~src/component/components/clips'
import MessageFieldComponent, {
  MessageFieldOptionsInterface,
} from '~src/component/components/messageField'
import InputComponent from '~src/component/components/input'
import { searchChat, sendMessage } from '~src/controller/chat'
import FileInputComponent from '~src/component/fileInput'
import { api_get_chats } from '~src/store/Actions'

interface GeneralPageOptionsInterface {
  searchField: Component<MessageFieldOptionsInterface>
  messageField: Component<MessageFieldOptionsInterface>
}

export default class GeneralPage extends Component<GeneralPageOptionsInterface> {
  protected initProps() {
    api_get_chats()

    this.props.searchField = new MessageFieldComponent({
      textField: new InputComponent({
        name: 'search',
        placeholder: 'Search',
        required: true,
      }),
      events: {
        submit: searchChat,
      },
    })

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
    const aside = new GeneralAsideComponent({
      searchField: this.props.searchField,
      chats: [
        new ChatPreviewComponent({
          name: 'name',
          message: 'message',
          time: '12:00',
          count: '3',
        }),
        new ChatPreviewComponent({
          name: 'name',
          message: 'message',
          time: '12:00',
          count: '3',
        }),
        new ChatPreviewComponent({
          name: 'name',
          message: 'message',
          time: '12:00',
          count: '3',
        }),
      ],
    })

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
