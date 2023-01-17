import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export interface BodyOptionsInterface {
  aside: Component | Element
  main: Component
  clips: Component
  hideAside?: boolean
}

export default class BodyComponent extends Component {
  constructor(options: BodyOptionsInterface) {
    super(options)
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('aside', this.props.aside)
    body.setKey('main', this.props.main)
    body.setKey('clips', this.props.clips)

    if (this.props.hideAside) {
      body.setKey('asideClass', 'left-page__close')
    }

    return body.render()
  }
}
