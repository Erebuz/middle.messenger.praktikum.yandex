import template from './index.tmpl'
import './index.scss'
import logoutImg from '~src/assets/logout.svg'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'
import FormComponent from '~src/component/components/form'
import { updatePassword, updateSettings } from '~src/controller/userController'
import {
  emailReg,
  loginReg,
  nameReg,
  passwordReg,
  phoneReg,
} from '~src/controller/validation'
import ButtonImgComponent from '~src/component/components/buttonImg'
import store from '~src/store'
import PortraitComponent from '~src/component/portrait'
import { logout } from '~src/controller/authController'
import router from '~src/router'
export interface FlagOptionsInterface {}

class FlagComponent extends Component<FlagOptionsInterface> {
  protected render(): Element {
    const template = new TemplateBuilder(
      '<div id="flag" class="user-settings__flag"></div>'
    )

    return template.render()
  }
}

export interface UserSettingsOptionsInterface {
  new: boolean
  show: boolean
  flag: Component
}

export default class UserSettingsComponent extends Component<UserSettingsOptionsInterface> {
  protected initProps() {
    this.props.flag = new FlagComponent({
      events: {
        click: () => {
          if (!this.element.classList.contains('show')) {
            router.go('/settings')
          } else {
            router.go('/messenger')
          }
        },
      },
    })
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('portrait', new PortraitComponent())

    body.setKey(
      'logout',
      new ButtonImgComponent({
        img: logoutImg,
        classes: 'user-settings__logout',
        events: {
          click: logout,
        },
      })
    )

    const mail = new TextFieldComponent({
      value: store.getState().user.email,
      name: 'email',
      label: 'Mail',
      visualType: 'block',
      pattern: emailReg,
      required: true,
    })

    const username = new TextFieldComponent({
      value: store.getState().user.login,
      name: 'login',
      label: 'Username',
      visualType: 'block',
      pattern: loginReg,
      required: true,
    })

    const firstname = new TextFieldComponent({
      value: store.getState().user.first_name,
      name: 'first_name',
      label: 'Firstname',
      visualType: 'block',
      pattern: nameReg,
      required: true,
    })

    const lastname = new TextFieldComponent({
      value: store.getState().user.second_name,
      name: 'second_name',
      label: 'Lastname',
      visualType: 'block',
      pattern: nameReg,
      required: true,
    })

    const display_name = new TextFieldComponent({
      value: store.getState().user.display_name,
      name: 'display_name',
      label: 'Display name',
      visualType: 'block',
    })

    const phone = new TextFieldComponent({
      value: store.getState().user.phone,
      name: 'phone',
      label: 'Phone',
      visualType: 'block',
      pattern: phoneReg,
      required: true,
    })

    const formData = new FormComponent({
      fields: [mail, username, firstname, lastname, display_name, phone],
      button: new ButtonComponent({ label: 'Save', buttonType: 'submit' }),
      events: {
        submit: updateSettings,
      },
    })

    body.setKey('formData', formData)

    const old_password = new TextFieldComponent({
      name: 'oldPassword',
      label: 'Current password',
      inputType: 'password',
      visualType: 'block',
      required: true,
    })

    const new_password = new TextFieldComponent({
      name: 'newPassword',
      label: 'New password',
      inputType: 'password',
      visualType: 'block',
      pattern: passwordReg,
      required: true,
    })

    const confirm_new_password = new TextFieldComponent({
      name: 'confirmNewPassword',
      label: 'Confirm new password',
      inputType: 'password',
      visualType: 'block',
      pattern: passwordReg,
      required: true,
    })

    const formPassword = new FormComponent({
      fields: [old_password, new_password, confirm_new_password],
      button: new ButtonComponent({ label: 'Save', buttonType: 'submit' }),
      events: {
        submit: updatePassword,
      },
    })

    body.setKey('formPassword', formPassword)

    body.setKey('flag', this.props.flag)

    const render = body.render()

    if (this.props.show) {
      render.classList.add('show')
    }

    return render
  }
}
