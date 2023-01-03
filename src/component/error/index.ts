import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'

import errorTemplate from './index.tmpl'
import './index.scss'

export default class ErrorComponent extends ComponentClass {
  constructor(
    code: string,
    text: string,
    image_path: string,
    errorStyle?: string
  ) {
    super()

    this.template = this._templateCreaters.errorCode(code, text, image_path, errorStyle)
  }

  protected _templateCreaters = {
    errorCode: (
      errorCode: string,
      errorText: string,
      errorImagePath: string,
      errorStyle: string
    ) => {
      const template = new TemplateBuilder(errorTemplate)

      template.setKey('errorCode', errorCode)
      template.setKey('errorText', errorText)
      template.setKey('errorImg', errorImagePath)

      if (errorStyle) {
        template.setKey('errorStyle', errorStyle)
      }

      return template
    },
  }
}
