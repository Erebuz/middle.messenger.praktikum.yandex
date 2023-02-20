import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import { ChatPreviewInterface } from '~src/interfaces/chat'
import { set_current_chat } from '~src/store/Actions'
import AppWS from '~src/socket'
import { BASE_URL } from '~src/api/baseApi'
import { get_old_messages } from '~src/controller/chatController'

export default class ChatPreviewComponent extends Component<ChatPreviewInterface> {
  protected initProps() {
    this.props.events = {
      click: () => {
        set_current_chat(this.props)
        new AppWS().connect(this.props.id).then(() => {
          setTimeout(() => get_old_messages(), 100)
        })
      },
    }
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    if (this.props.avatar) {
      const src = BASE_URL + '/resources' + this.props.avatar
      body.setKey('avatar', `<img src="${src}" alt="Img">`)
    }

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
