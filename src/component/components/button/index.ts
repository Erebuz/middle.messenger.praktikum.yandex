import { TemplateBuilder } from '~src/utils/templateBuilder'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'

import buttonTemplate from './index.tmpl'

export interface ButtonOptionsInterface {
  label?: string
  buttonType?: 'submit' | 'button'
  classes?: string
  onclick?: string
}

export default class ButtonComponent extends Component {
  constructor(options: ButtonOptionsInterface) {
    super()

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
