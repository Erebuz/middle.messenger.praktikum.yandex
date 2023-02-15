import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
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

    for (const [key, value] of Object.entries(this.props)) {
      if (key && key !== 'id' && key !== 'events') {
        body.setKey(key, value !== null ? String(value) : '')
      }
    }

    return body.render()
  }
}
