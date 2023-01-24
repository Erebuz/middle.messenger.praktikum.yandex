import '~src/assets/style.scss'
import './index.scss'
import BodyComponent from '~src/component/body'
import ClipComponent from '~src/component/components/clips'
import { Component } from '~src/utils/templateBuilder/Component'
import LoginComponent, { LoginOptionsInterface } from '~src/component/login'

import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'
import { login } from '~src/controller/auth'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import projectDescription from './projectDesription.tmpl'

export interface LoginPageOptionsInterface {
  main: Component<LoginOptionsInterface>
}

export default class LoginPage extends Component<LoginPageOptionsInterface> {
  protected initProps() {
    const usernameField = new TextFieldComponent({
      name: 'username',
      label: 'Username',
      inputType: 'text',
      required: true,
    })

    this.props.main = new LoginComponent({
      inputUsername: usernameField,
      inputPassword: new TextFieldComponent({
        name: 'password',
        label: 'Password',
        inputType: 'password',
        required: true,
      }),
      button: new ButtonComponent({ label: 'Login' }),
      events: {
        submit: login,
      },
    })
  }

  protected render(): Element {
    const aside = new TemplateBuilder(projectDescription)

    const clips = new ClipComponent({ hideBackClip: false })

    const main = this.props.main

    return new BodyComponent({
      aside: aside.render(),
      clips,
      main,
      hideAside: true,
    }).element
  }
}

function render(el: Element) {
  const root = document.querySelector('#root')
  root?.appendChild(el)
  return root
}

render(new LoginPage().element)
