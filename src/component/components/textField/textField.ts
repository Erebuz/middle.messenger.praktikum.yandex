import fieldTemplate from './index.tmpl'
import './index.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'

interface TextFieldOptionsInterface {
  label?: string
  inputType?: 'text' | 'password'
  visualType?: 'field' | 'block'
  errorText?: string
  showError?: boolean
}

export default class TextFieldComponent extends ComponentClass {
  constructor(options: TextFieldOptionsInterface) {
    super([])

    this.template = this._templateCreaters.input(options)
  }

  protected _templateCreaters = {
    input: (options: TextFieldOptionsInterface) => {
      const template = new TemplateBuilder(fieldTemplate)

      template.setKey('label', options.label)

      if (options.inputType) {
        template.setKey('inputType', options.inputType)
      } else {
        template.setKey('inputType', 'text')
      }

      if (options.visualType === 'block') {
        template.setKey('fieldClass', 'text-field_block')
      }

      template.setKey('errorText', options.errorText)

      if (options.showError) {
        template.setKey('errorClass', 'text-field__error_show')
      }

      return template
    },
  }
}
