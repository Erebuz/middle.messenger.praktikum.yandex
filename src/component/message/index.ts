import tmpl from './index.tmpl'
import './index.scss'

import { Component } from '~src/utils/Component'
import { MessageInterface } from '~src/interfaces/chat'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'

export default class MessageComponent extends Component<MessageInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    body.setKey('content', this.props.content)

    return body.render()
  }
}
