import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

import clip from '~src/assets/paperclip.svg'

export interface FileInputOptionsInterface {}

export default class FileInputComponent extends Component<FileInputOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('img', clip)

    return body.render()
  }
}
