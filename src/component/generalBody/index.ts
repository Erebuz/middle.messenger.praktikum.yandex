import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'

export default class GeneralBodyComponent extends Component {
  constructor() {
    super()

    this.template = new TemplateBuilder(template)

    this.template.setKey(
      'textField',
      new TextFieldComponent({
        name: 'message',
        label: 'Message',
        visualType: 'block',
      }).render()
    )
  }

  protected _templateCreaters = {}
}
