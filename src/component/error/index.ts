import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'

import errorTemplate from './index.tmpl'
import './index.scss'

export interface ErrorOptionsInterface {
  code: string
  text: string
  image: string
  errorStyle?: string
}

export default class ErrorComponent extends Component<ErrorOptionsInterface> {
  protected render(): Element {
    const template = new TemplateBuilder(errorTemplate)

    template.setKey('errorCode', this.props.code)
    template.setKey('errorText', this.props.text)
    template.setKey('errorImg', this.props.image)

    template.setKey('errorStyle', this.props.errorStyle || '')

    return template.render()
  }
}
