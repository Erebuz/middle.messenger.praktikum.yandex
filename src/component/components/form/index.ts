import template from './index.tmpl'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export interface FormOptionComponent {
  fields: Component[]
  button: Component
}

export default class FormComponent extends Component {
  constructor(options: FormOptionComponent) {
    super(options)
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('fields', this.props.fields)

    body.setKey('saveBtn', this.props.button)

    return body.render()
  }
}
