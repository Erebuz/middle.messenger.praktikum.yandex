import template from './index.tmpl'
import './index.scss'
import logoutImg from '~src/assets/logout.svg'

import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'

export default class UserSettingsComponent extends ComponentClass {
  constructor() {
    super()

    this.template = new TemplateBuilder(template)

    this.template.setKey('logoutImg', logoutImg)

    const mail = new TextFieldComponent({
      label: 'Mail',
      visualType: 'block',
    }).render()
    const username = new TextFieldComponent({
      label: 'Username',
      visualType: 'block',
    }).render()
    const firstname = new TextFieldComponent({
      label: 'Firstname',
      visualType: 'block',
    }).render()
    const lastname = new TextFieldComponent({
      label: 'Lastname',
      visualType: 'block',
    }).render()
    const phone = new TextFieldComponent({
      label: 'Phone',
      visualType: 'block',
    }).render()

    this.template.setKey(
      'dataFields',
      mail + username + firstname + lastname + phone
    )

    this.template.setKey(
      'dataSaveBtn',
      new ButtonComponent({ label: 'Save', buttonType: 'submit' }).render()
    )

    const password = new TextFieldComponent({
      label: 'Password',
      inputType: 'password',
      visualType: 'block',
    }).render()
    const confirm_password = new TextFieldComponent({
      label: 'Confirm password',
      inputType: 'password',
      visualType: 'block',
    }).render()

    this.template.setKey('passwordFields', password + confirm_password)

    this.template.setKey(
      'passwordSaveBtn',
      new ButtonComponent({ label: 'Save', buttonType: 'submit' }).render()
    )
  }
}
