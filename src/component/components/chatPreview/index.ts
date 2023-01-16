import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'

export interface ChatPreviewOptionsInterface {
  img?: string
  name: string
  message: string
  time: string
  count: number
}

export default class ChatPreviewComponent extends Component {
  constructor(options: ChatPreviewOptionsInterface) {
    super()

    this.template = new TemplateBuilder(template)

    for (const [key, value] of Object.entries(options)) {
      if (key) {
        this.template.setKey(key, value)
      }
    }
  }
}
