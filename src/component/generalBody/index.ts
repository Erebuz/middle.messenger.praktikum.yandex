import template from './index.tmpl'
import './index.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'

export default class GeneralBodyComponent extends ComponentClass {
  constructor() {
    super()

    this.template = new TemplateBuilder(template)

    this.template.setKey(
      'textField',
      new TextFieldComponent({ label: 'Message', visualType: 'block' }).render()
    )
  }

  protected _templateCreaters = {}
}
