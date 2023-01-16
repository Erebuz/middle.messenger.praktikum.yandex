import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'

import errorTemplate from './index.tmpl'
import './index.scss'

export default class ErrorComponent extends Component {
  constructor(code: string, text: string, image: string, errorStyle?: string) {
    super()

    this.template = this._templateCreaters.errorCode(
      code,
      text,
      image,
      errorStyle
    )
  }

  protected _templateCreaters = {
    errorCode: (
      errorCode: string,
      errorText: string,
      errorImagePath: string,
      errorStyle?: string
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
