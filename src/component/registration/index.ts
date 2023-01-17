import { Component } from '~src/utils/templateBuilder/Component'

import template from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'

export default class RegistrationComponent extends Component {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    const mail = new TextFieldComponent({
      name: 'email',
      label: 'Mail',
      visualType: 'block',
    })

    const username = new TextFieldComponent({
      name: 'login',
      label: 'Username',
      visualType: 'block',
    })

    const firstname = new TextFieldComponent({
      name: 'first_name',
      label: 'Firstname',
      visualType: 'block',
    })

    const lastname = new TextFieldComponent({
      name: 'second_name',
      label: 'Lastname',
      visualType: 'block',
    })

    const phone = new TextFieldComponent({
      name: 'phone',
      label: 'Phone',
      visualType: 'block',
    })

    const password = new TextFieldComponent({
      name: 'password',
      label: 'Password',
      inputType: 'password',
      visualType: 'block',
    })

    const confirm_password = new TextFieldComponent({
      name: 'confirm_password',
      label: 'Confirm password',
      inputType: 'password',
      visualType: 'block',
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

    return body.render()
  }
}
