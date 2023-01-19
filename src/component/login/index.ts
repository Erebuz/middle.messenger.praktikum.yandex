import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

import loginTemplate from './index.tmpl'
import './index.scss'

export interface LoginOptionsInterface {
  inputFieldUsername: Component
  inputFieldPassword: Component
  loginButton: Component
}

export default class LoginComponent extends Component<LoginOptionsInterface> {
  protected render(): Element {
    const template = new TemplateBuilder(loginTemplate)

    template.setKey('inputFieldUsername', this.props.inputFieldUsername)

    template.setKey('inputFieldPassword', this.props.inputFieldPassword)

    template.setKey('loginButton', this.props.loginButton)

    return template.render()
  }
}
