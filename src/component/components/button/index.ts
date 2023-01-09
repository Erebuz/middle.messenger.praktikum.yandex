import { TemplateBuilder } from '~src/utils/templateBuilder'
import './index.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'

import buttonTemplate from './index.tmpl'

export interface ButtonOptionsInterface {
  label?: string
  buttonType?: 'submit' | 'button'
  classes?: string
  onclick?: string
}

export default class ButtonComponent extends ComponentClass {
  constructor(options: ButtonOptionsInterface) {
    super(['button'])

    this.template = this._templateCreaters.button(options)
  }

  protected _templateCreaters = {
    button: (options: ButtonOptionsInterface) => {
      const template = new TemplateBuilder(buttonTemplate)

      template.setKey('text', options.label)

      template.setKey('classes', options.classes)

      if (options.onclick) {
        template.setKey('onclick', 'onclick="' + options.onclick + '"')
      }

      if (options.buttonType) {
        template.setKey('buttonType', options.buttonType)
      }

      return template
    },
  }
}
