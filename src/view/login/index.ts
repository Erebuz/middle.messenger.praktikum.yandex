import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import ClipComponent from '~src/component/components/clips'
import { Component } from '~src/utils/templateBuilder/Component'
import LoginComponent from '~src/component/login'

import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'
import { login } from '~src/controller/auth'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export default class LoginPage extends Component {
  constructor() {
    super({})
  }

  protected render(): Element {
    const aside = new TemplateBuilder('<p>Project description</p>')

    const clips = new ClipComponent({ hideBackClip: false })

    const usernameField = new TextFieldComponent({
      name: 'username',
      label: 'Username',
      inputType: 'text',
      required: true,
    })

    const main = new LoginComponent({
      inputFieldUsername: usernameField,
      inputFieldPassword: new TextFieldComponent({
        name: 'password',
        label: 'Password',
        inputType: 'password',
        required: true,
      }),
      loginButton: new ButtonComponent({ label: 'Login' }),
    })

    main.on('submit', login)

    return new BodyComponent({
      aside: aside.render(),
      main,
      clips,
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
