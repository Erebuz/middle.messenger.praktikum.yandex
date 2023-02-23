import template from './index.tmpl'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import { TextFieldOptionsInterface } from '~src/component/components/textField/textField'
import { ButtonOptionsInterface } from '~src/component/components/button'

export interface FormOptionComponent {
  fields: Component<TextFieldOptionsInterface>[]
  button: Component<ButtonOptionsInterface>
}

export default class FormComponent extends Component<FormOptionComponent> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('fields', this.props.fields)

    body.setKey('saveBtn', this.props.button)

    return body.render()
  }
}
