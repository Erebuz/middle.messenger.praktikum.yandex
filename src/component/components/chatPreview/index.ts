import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export interface ChatPreviewOptionsInterface {
  img?: string
  name: string
  message: string
  time: string
  count: string
}

export default class ChatPreviewComponent extends Component {
  constructor(options: ChatPreviewOptionsInterface) {
    super(options)
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    for (const [key, value] of Object.entries(this.props)) {
      if (key) {
        body.setKey(key, value)
      }
    }

    return body.render()
  }
}
