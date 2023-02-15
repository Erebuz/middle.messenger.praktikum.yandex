import { Component } from '~src/utils/Component'

import template from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'
import {
  emailReg,
  loginReg,
  nameReg,
  passwordReg,
  phoneReg,
} from '~src/controller/validation'
import RouterLink from '~src/component/components/routerLink'

export interface RegistrationOptionsInterface {}

export default class RegistrationComponent extends Component<RegistrationOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    const mail = new TextFieldComponent({
      name: 'email',
      label: 'Mail',
      visualType: 'block',
      pattern: emailReg,
      required: true,
    })

    const username = new TextFieldComponent({
      name: 'login',
      label: 'Username',
      visualType: 'block',
      pattern: loginReg,
      required: true,
    })

    const firstname = new TextFieldComponent({
      name: 'first_name',
      label: 'Firstname',
      visualType: 'block',
      pattern: nameReg,
      required: true,
    })

    const lastname = new TextFieldComponent({
      name: 'second_name',
      label: 'Lastname',
      visualType: 'block',
      pattern: nameReg,
      required: true,
    })

    const phone = new TextFieldComponent({
      name: 'phone',
      label: 'Phone',
      visualType: 'block',
      pattern: phoneReg,
      required: true,
    })

    const password = new TextFieldComponent({
      name: 'password',
      label: 'Password',
      inputType: 'password',
      visualType: 'block',
      pattern: passwordReg,
      required: true,
    })

    const confirm_password = new TextFieldComponent({
      name: 'confirm_password',
      label: 'Confirm password',
      inputType: 'password',
      visualType: 'block',
      pattern: passwordReg,
      required: true,
    })

    body.setKey('fields', [
      mail.element,
      username.element,
      firstname.element,
      lastname.element,
      phone.element,
      password.element,
      confirm_password.element,
    ])

    body.setKey(
      'buttons',
      new ButtonComponent({
        label: 'Registration',
        buttonType: 'submit',
      })
    )

    body.setKey('loginLink', new RouterLink({ text: 'Login', link: '/' }))

    return body.render()
  }
}
