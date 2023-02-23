import tmpl from './index.tmpl'
import './index.scss'

import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'

export default class ChatAvatarInputComponent extends Component {
  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    return body.render()
  }
}
