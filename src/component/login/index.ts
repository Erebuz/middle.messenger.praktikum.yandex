import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

import loginTemplate from './index.tmpl'
import './index.scss'
import { TextFieldOptionsInterface } from '~src/component/components/textField/textField'
import { ButtonOptionsInterface } from '~src/component/components/button'

export interface LoginOptionsInterface {
  inputUsername: Component<TextFieldOptionsInterface>
  inputPassword: Component<TextFieldOptionsInterface>
  button: Component<ButtonOptionsInterface>
}

export default class LoginComponent extends Component<LoginOptionsInterface> {
  protected render(): Element {
    const template = new TemplateBuilder(loginTemplate)

    template.setKey('inputUsername', this.props.inputUsername)

    template.setKey('inputPassword', this.props.inputPassword)

    template.setKey('button', this.props.button)

    return template.render()
  }
}
