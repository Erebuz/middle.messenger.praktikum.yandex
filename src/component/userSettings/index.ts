import template from './index.tmpl'
import './index.scss'
import logoutImg from '~src/assets/logout.svg'

import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'

export default class UserSettingsComponent extends Component {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('logoutImg', logoutImg)

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
      showError: true,
      errorText: 'sadasd',
    })

    const lastname = new TextFieldComponent({
      name: 'second_name',
      label: 'Lastname',
      visualType: 'block',
    })

    const display_name = new TextFieldComponent({
      name: 'display_name',
      label: 'Display name',
      visualType: 'block',
    })
    const phone = new TextFieldComponent({
      name: 'phone',
      label: 'Phone',
      visualType: 'block',
    })

    body.setKey('dataFields', [
      mail,
      username,
      firstname,
      lastname,
      display_name,
      phone,
    ])

    body.setKey(
      'dataSaveBtn',
      new ButtonComponent({ label: 'Save', buttonType: 'submit' })
    )

    const old_password = new TextFieldComponent({
      name: 'oldPassword',
      label: 'Current password',
      inputType: 'password',
      visualType: 'block',
    })

    const new_password = new TextFieldComponent({
      name: 'newPassword',
      label: 'New password',
      inputType: 'password',
      visualType: 'block',
    })

    const confirm_new_password = new TextFieldComponent({
      name: 'confirmNewPassword',
      label: 'Confirm new password',
      inputType: 'password',
      visualType: 'block',
    })

    body.setKey('passwordFields', [
      old_password,
      new_password,
      confirm_new_password,
    ])

    body.setKey(
      'passwordSaveBtn',
      new ButtonComponent({ label: 'Save', buttonType: 'submit' })
    )

    return body.render()
  }
}
