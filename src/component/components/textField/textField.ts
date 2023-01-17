import fieldTemplate from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import InputComponent from '~src/component/components/input'
import { validation } from '~src/controller/validation'

interface TextFieldOptionsInterface {
  name: string
  label?: string
  inputType?: 'text' | 'password'
  visualType?: 'field' | 'block'
  errorText?: string
  showError?: boolean
  pattern?: string
  required?: boolean
}

export default class TextFieldComponent extends Component {
  constructor(options: TextFieldOptionsInterface) {
    super(options)

    const input = new InputComponent({
      name: this.props.name,
      inputType: this.props.inputType,
      pattern: this.props.pattern,
      required: this.props.required,
    })

    input.on('focus', () => validation(this))

    input.on('blur', () => validation(this))

    this.props.input = input
  }

  protected render(): Element {
    const template = new TemplateBuilder(fieldTemplate)

    template.setKey('label', this.props.label)

    if (this.props.visualType === 'block') {
      template.setKey('fieldClass', 'text-field_block')
    }

    template.setKey('errorText', this.props.errorText || 'Error')

    if (this.props.showError) {
      template.setKey('errorClass', 'text-field__error_show')
    }

    template.setKey('input', this.props.input)

    return template.render()
  }
}
