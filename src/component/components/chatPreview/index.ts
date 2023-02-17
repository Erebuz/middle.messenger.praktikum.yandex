import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import { ChatPreviewInterface } from '~src/interfaces/chat'
import { set_current_chat } from '~src/store/Actions'
import AppWS from '~src/socket'

export default class ChatPreviewComponent extends Component<ChatPreviewInterface> {
  protected initProps() {
    this.props.events = {
      click: () => {
        set_current_chat(this.props)
        new AppWS().connect(this.props.id)
      },
    }
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    if (this.props.avatar) body.setKey('avatar', this.props.avatar)

    if (this.props.title) body.setKey('title', this.props.title)

    if (this.props.unread_count)
      body.setKey('unread_count', `${this.props.unread_count}`)

    if (this.props.last_message) {
      body.setKey('avatar', this.props.last_message.content)
      body.setKey('avatar', this.props.last_message.time)
    }

    return body.render()
  }
}
