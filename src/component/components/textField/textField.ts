import fieldTemplate from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

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
  }

  protected render(): Element {
    const template = new TemplateBuilder(fieldTemplate)

    template.setKey('name', this.props.name)

    template.setKey('label', this.props.label)

    template.setKey('inputType', this.props.inputType || 'text')

    if (this.props.visualType === 'block') {
      template.setKey('fieldClass', 'text-field_block')
    }

    template.setKey('errorText', this.props.errorText)

    template.setKey('errorClass', 'text-field__error_show')

    template.setKey('pattern', this.props.pattern)

    if (this.props.required) {
      template.setKey('required', 'required')
    }

    return template.render()
  }
}
