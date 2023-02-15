import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import ChatInfoComponent from '~src/component/chatInfo'
import MessageFieldComponent, {
  MessageFieldOptionsInterface,
} from '~src/component/components/messageField'
import MessagesComponent from '~src/component/messages'
import InputComponent from '~src/component/components/input'
import FileInputComponent from '~src/component/fileInput'
import { sendMessage } from '~src/controller/chatController'
import { ChatInfoOptionsInterface } from '~src/component/chatInfo/ChatInfoClass'

export interface GeneralBodyOptionsInterface {
  messageField?: Component<MessageFieldOptionsInterface> | null
  messages?: Component | null
  chatInfo?: Component<ChatInfoOptionsInterface> | null
  show: boolean
}

export default class GeneralBodyComponent extends Component<GeneralBodyOptionsInterface> {
  protected initProps() {
    this.props.chatInfo = new ChatInfoComponent()
    this.props.messages = new MessagesComponent()

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
    if (!this.props.show) {
      return new TemplateBuilder(
        '<div class="no-chat">No selected chat</div>'
      ).render()
    }

    const body = new TemplateBuilder(template)

    body.setKey('textField', this.props.messageField!)

    body.setKey('messages', this.props.messages!)

    body.setKey('chatInfo', this.props.chatInfo!)

    return body.render()
  }
}
