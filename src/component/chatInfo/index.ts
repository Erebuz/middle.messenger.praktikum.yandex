import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'

export interface ChatInfoOptionsInterface {
  img: string
  name: string
}

export default class ChatInfoComponent extends Component<ChatInfoOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('img', this.props.img)
    body.setKey('name', this.props.name)

    return body.render()
  }
}
