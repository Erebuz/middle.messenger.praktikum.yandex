import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import inputTemplate from './index.tmpl'

export interface InputOptionsInterface {
  name: string
  inputType?: 'text' | 'password'
  pattern?: string
  required?: boolean
  placeholder?: string
}

export default class InputComponent extends Component {
  constructor(options: InputOptionsInterface) {
    super(options)
  }
  protected render(): Element {
    const input = new TemplateBuilder(inputTemplate)

    input.setKey('name', this.props.name)

    input.setKey('inputType', this.props.inputType || 'text')

    if (this.props.pattern) {
      input.setKey('pattern', `pattern="${this.props.pattern}"` || '')
    }

    if (this.props.required) {
      input.setKey('required', 'required')
    }

    input.setKey('placeholder', this.props.placeholder || 'Enter text')

    return input.render()
  }
}
