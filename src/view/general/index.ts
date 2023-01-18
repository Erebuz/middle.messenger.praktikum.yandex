import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/templateBuilder/Component'
import GeneralAsideComponent from '~src/component/generalAside'
import GeneralMainComponent from '~src/component/generalBody'
import ChatPreviewComponent from '~src/component/components/chatPreview'
import ClipComponent from '~src/component/components/clips'
import MessageFieldComponent from '~src/component/components/messageField'
import InputComponent from '~src/component/components/input'
import { searchChat, sendMessage } from '~src/controller/chat'
import FileInputComponent from '~src/component/fileInput'

export default class GeneralPage extends Component {
  protected initProps() {
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
      search: this.props.searchField,
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

    const main = new GeneralMainComponent({
      textField: this.props.messageField,
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

function render(el: Element) {
  const root = document.querySelector('#root')
  root?.appendChild(el)
  return root
}

render(new GeneralPage().element)
