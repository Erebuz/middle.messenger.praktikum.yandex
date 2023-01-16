import { Component } from '~src/utils/templateBuilder/Component'
import {
  registrationFunction,
  TemplateBuilder,
} from '~src/utils/templateBuilder'

import loginTemplate from './index.tmpl'
import './index.scss'

import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'

export default class LoginComponent extends Component {
  constructor() {
    super()

    this.template = new TemplateBuilder(loginTemplate)

    this.template.setKey(
      'inputFieldUsername',
      new TextFieldComponent({
        name: 'login',
        label: 'Username',
        errorText: 'Error text',
        showError: true,
      }).render()
    )

    this.template.setKey(
      'inputFieldPassword',
      new TextFieldComponent({
        name: 'password',
        label: 'Password',
        inputType: 'password',
      }).render()
    )

    this.template.setKey(
      'loginButton',
      new ButtonComponent({ label: 'Login', buttonType: 'submit' }).render()
    )

    this.template.setKey(
      'submitFoo',
      registrationFunction('loginBlock', (ev: SubmitEvent) => {
        console.log(ev)
        ev.preventDefault()
      })
    )
  }

  protected _templateCreaters = {}
}
