import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'

import loginTemplate from './index.tmpl'
import './index.scss'
import { TextFieldOptionsInterface } from '~src/component/components/textField/textField'
import { ButtonOptionsInterface } from '~src/component/components/button'
import RouterLink from '~src/component/components/routerLink'

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

    template.setKey(
      'registrationLink',
      new RouterLink({ text: 'Registration?', link: '/sign-up' })
    )

    return template.render()
  }
}
