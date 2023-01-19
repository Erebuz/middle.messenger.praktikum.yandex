import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export interface GeneralAsideOptionsInterface {
  search: Component
  chats: Component[]
}

export default class GeneralAsideComponent extends Component<GeneralAsideOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('searchField', this.props.search)

    body.setKey('chats', this.props.chats)

    return body.render()
  }
}
