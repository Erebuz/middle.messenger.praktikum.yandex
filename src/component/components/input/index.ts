import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import inputTemplate from './index.tmpl'

export interface InputOptionsInterface {
  name: string
  inputType?: 'text' | 'password'
  value?: string | null
  pattern?: string
  required?: boolean
  placeholder?: string
  id?: string
}

export default class InputComponent extends Component<InputOptionsInterface> {
  protected render(): Element {
    const input = new TemplateBuilder(inputTemplate)

    input.setKey('name', this.props.name)

    input.setKey('inputType', this.props.inputType || 'text')

    if (this.props.value) {
      input.setKey('value', `value=${this.props.value}`)
    }

    if (this.props.pattern) {
      input.setKey('pattern', `pattern="${this.props.pattern}"` || '')
    }

    if (this.props.required) {
      input.setKey('required', 'required')
    }

    if (this.props.id) {
      input.setKey('id', `id="${this.props.id}"`)
    }

    input.setKey('placeholder', this.props.placeholder || 'Enter text')

    return input.render()
  }
}
