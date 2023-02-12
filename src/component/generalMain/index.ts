import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import ChatInfoComponent, { ChatInfoOptionsInterface } from "~src/component/chatInfo";
import { MessageFieldOptionsInterface } from "~src/component/components/messageField";

export interface GeneralBodyOptionsInterface {
  messageField: Component<MessageFieldOptionsInterface>
  chatInfo?: Component<ChatInfoOptionsInterface>
}

export default class GeneralBodyComponent extends Component<GeneralBodyOptionsInterface> {
  protected initProps() {
    this.props.chatInfo = new ChatInfoComponent({
      img: 'img',
      name: 'Ivanov',
    })
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('textField', this.props.messageField)

    if (this.props.chatInfo) {
      body.setKey('chatInfo', this.props.chatInfo)
    }

    return body.render()
  }
}
