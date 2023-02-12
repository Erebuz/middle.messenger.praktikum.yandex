import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'

export interface ChatPreviewOptionsInterface {
  img?: string
  name: string
  message: string
  time: string
  count: string
}

export default class ChatPreviewComponent extends Component<ChatPreviewOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    for (const [key, value] of Object.entries(this.props)) {
      if (key) {
        body.setKey(key, value as any)
      }
    }

    return body.render()
  }
}
