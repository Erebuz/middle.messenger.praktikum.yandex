import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'

export default class MessagesComponent extends Component {
  protected render(): Element {
    const body = new TemplateBuilder('<div class="messages">Messages</div>')

    return body.render()
  }
}
