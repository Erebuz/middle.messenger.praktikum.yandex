import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import { MessageInterface } from '~src/interfaces/chat'
import MessageComponent from '~src/component/components/message'

export interface MessagesOptionsInterface {
  messages: MessageInterface[]
}

export default class MessagesComponent extends Component<MessagesOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(
      '<div class="messages">{{ messages }}</div>'
    )

    const messages = []

    if (this.props.messages.length > 0) {
      for (const mes of this.props.messages) {
        messages.push(new MessageComponent(mes))
      }

      body.setKey('messages', messages)
    } else {
      body.setKey('messages', 'No messages')
    }

    return body.render()
  }
}
