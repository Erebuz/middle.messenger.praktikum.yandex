import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export interface GeneralMainOptionsInterface {
  textField: Component
}

export default class GeneralMainComponent extends Component {
  constructor(options: GeneralMainOptionsInterface) {
    super(options)
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('textField', this.props.textField)

    return body.render()
  }
}
