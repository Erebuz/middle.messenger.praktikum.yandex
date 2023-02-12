import { TemplateBuilder } from '~src/utils/templateBuilder'
import './index.scss'
import { Component } from '~src/utils/Component'

import buttonTemplate from './index.tmpl'

export interface ButtonOptionsInterface {
  label?: string
  buttonType?: 'submit' | 'button'
  classes?: string
}

export default class ButtonComponent extends Component<ButtonOptionsInterface> {
  protected render(): Element {
    const template = new TemplateBuilder(buttonTemplate)

    template.setKey('text', this.props.label || '')
    template.setKey('classes', this.props.classes || '')
    template.setKey('buttonType', this.props.buttonType || 'submit')

    return template.render()
  }
}
