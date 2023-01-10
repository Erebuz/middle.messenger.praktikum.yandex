import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'

import template from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'

export default class RegistrationComponent extends ComponentClass {
  constructor() {
    super()

    this.template = new TemplateBuilder(template)

    const mail = new TextFieldComponent({
      name: 'email',
      label: 'Mail',
      visualType: 'block',
    }).render()
    const username = new TextFieldComponent({
      name: 'login',
      label: 'Username',
      visualType: 'block',
    }).render()
    const firstname = new TextFieldComponent({
      name: 'first_name',
      label: 'Firstname',
      visualType: 'block',
    }).render()
    const lastname = new TextFieldComponent({
      name: 'second_name',
      label: 'Lastname',
      visualType: 'block',
    }).render()
    const phone = new TextFieldComponent({
      name: 'phone',
      label: 'Phone',
      visualType: 'block',
    }).render()
    const password = new TextFieldComponent({
      name: 'password',
      label: 'Password',
      inputType: 'password',
      visualType: 'block',
    }).render()
    const confirm_password = new TextFieldComponent({
      name: 'confirm_password',
      label: 'Confirm password',
      inputType: 'password',
      visualType: 'block',
    }).render()

    this.template.setKey(
      'fields',
      mail +
        username +
        firstname +
        lastname +
        phone +
        password +
        confirm_password
    )

    this.template.setKey(
      'buttons',
      new ButtonComponent({ label: 'Registration', buttonType: "submit" }).render()
    )
  }

  protected _templateCreaters = {}
}
