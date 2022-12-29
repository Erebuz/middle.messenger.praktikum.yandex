import { TemplateBuilder } from '~src/utils/templateBuilder'
import './index.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'

const generalTemplate =
  '<button id="button" class="{{ classes }}" onclick="{{ onclick }}">{{ text }}</button>'

export default class ButtonComponent extends ComponentClass {
  public id_list = (<T extends string[]>(...o: T) => o)('button')
  public template = new TemplateBuilder('{{ body }}')

  constructor(title: string, classes?: string, onclick?: string) {
    super([])

    this.template.setKey(
      'body',
      this._templateCreaters.button(title, classes, onclick)
    )
  }

  protected _templateCreaters = {
    button: (title: string, classes?: string, onclick?: string) => {
      const template = new TemplateBuilder(generalTemplate)

      template.setKey('text', title)
      if (classes) {
        template.setKey('classes', classes)
      }
      if (onclick) {
        template.setKey('onclick', onclick)
      }

      return template
    },
  }
}
