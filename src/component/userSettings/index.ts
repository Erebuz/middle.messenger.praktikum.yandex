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

    const display_name = new TextFieldComponent({
      name: 'display_name',
      label: 'Display name',
      visualType: 'block',
    }).render()

    const phone = new TextFieldComponent({
      name: 'phone',
      label: 'Phone',
      visualType: 'block',
    }).render()

    this.template.setKey(
      'dataFields',
      mail + username + firstname + lastname + display_name + phone
    )

    this.template.setKey(
      'dataSaveBtn',
      new ButtonComponent({ label: 'Save', buttonType: 'submit' }).render()
    )

    const old_password = new TextFieldComponent({
      name: 'oldPassword',
      label: 'Current password',
      inputType: 'password',
      visualType: 'block',
    }).render()

    const new_password = new TextFieldComponent({
      name: 'newPassword',
      label: 'New password',
      inputType: 'password',
      visualType: 'block',
    }).render()

    const confirm_new_password = new TextFieldComponent({
      name: 'confirmNewPassword',
      label: 'Confirm new password',
      inputType: 'password',
      visualType: 'block',
    }).render()

    this.template.setKey(
      'passwordFields',
      old_password + new_password + confirm_new_password
    )

    this.template.setKey(
      'passwordSaveBtn',
      new ButtonComponent({ label: 'Save', buttonType: 'submit' }).render()
    )
  }
}
