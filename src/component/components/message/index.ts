import tmpl from './index.tmpl'
import './index.scss'

import { Component } from '~src/utils/Component'
import { MessageInterface } from '~src/interfaces/chat'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import State from "~src/store/state";

export default class MessageComponent extends Component<MessageInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    body.setKey('content', this.props.content)

    if (this.props.user_id === State.store.user.id) {
      body.setKey('classes', 'message__self')
    }

    return body.render()
  }
}
