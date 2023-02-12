import fieldTemplate from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import InputComponent, { InputOptionsInterface } from "~src/component/components/input";
import { validation } from '~src/controller/validation'

export interface TextFieldOptionsInterface {
  name: string
  label?: string
  inputType?: 'text' | 'password'
  visualType?: 'field' | 'block'
  errorText?: string
  showError?: boolean
  pattern?: string
  required?: boolean
  input?: Component<InputOptionsInterface>
}

export default class TextFieldComponent extends Component<TextFieldOptionsInterface> {
  protected initProps() {
    this.props.input = new InputComponent({
      name: this.props.name,
      inputType: this.props.inputType,
      pattern: this.props.pattern,
      required: this.props.required,
      events: {
        blur: () => validation(this),
      },
    })
  }

  protected render(): Element {
    const template = new TemplateBuilder(fieldTemplate)

    if (this.props.label) {
      template.setKey('label', this.props.label)
    }

    if (this.props.visualType === 'block') {
      template.setKey('fieldClass', 'text-field_block')
    }

    template.setKey('errorText', this.props.errorText || 'Invalid input')

    if (this.props.showError) {
      template.setKey('errorClass', 'text-field__error_show')
    }

    if (this.props.input) {
      template.setKey('input', this.props.input)
    }

    return template.render()
  }
}
