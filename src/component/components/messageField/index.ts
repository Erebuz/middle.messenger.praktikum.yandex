import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'

import sendMessageSvg from '~src/assets/send_message.svg'
import { TextFieldOptionsInterface } from '~src/component/components/textField/textField'
import { FileInputOptionsInterface } from '~src/component/fileInput'

export interface MessageFieldOptionsInterface {
  fileInput?: Component<FileInputOptionsInterface>
  textField: Component<TextFieldOptionsInterface>
}

export default class MessageFieldComponent extends Component<MessageFieldOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('fileInput', this.props.fileInput || '')

    body.setKey('textField', this.props.textField || '')

    body.setKey('img', sendMessageSvg)

    return body.render()
  }
}
