import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

import sendMessageSvg from '~src/assets/send_message.svg'

export interface MessageFieldOptionsInterface {
  fileInput?: Component
  textField: Component
}

export default class MessageFieldComponent extends Component {
  constructor(options: MessageFieldOptionsInterface) {
    super(options)
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('fileInput', this.props.fileInput || '')

    body.setKey('textField', this.props.textField || '')

    body.setKey('img', sendMessageSvg)

    return body.render()
  }
}
