import fieldTemplate from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'

interface TextFieldOptionsInterface {
  name: string
  label?: string
  inputType?: 'text' | 'password'
  visualType?: 'field' | 'block'
  errorText?: string
  showError?: boolean
}

export default class TextFieldComponent extends Component {
  constructor(options: TextFieldOptionsInterface) {
    super([])

    this.template = this._templateCreaters.input(options)
  }

  protected _templateCreaters = {
    input: (options: TextFieldOptionsInterface) => {
      const template = new TemplateBuilder(fieldTemplate)

      template.setKey('name', options.name)

      if (options.label) {
        template.setKey('label', options.label)
      }

      if (options.inputType) {
        template.setKey('inputType', options.inputType)
      } else {
        template.setKey('inputType', 'text')
      }

      if (options.visualType === 'block') {
        template.setKey('fieldClass', 'text-field_block')
      }

      if (options.errorText) {
        template.setKey('errorText', options.errorText)
      }

      if (options.showError) {
        template.setKey('errorClass', 'text-field__error_show')
      }

      return template
    },
  }
}
