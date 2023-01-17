import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import RegistrationComponent from '~src/component/registration'
import ClipComponent from '~src/component/components/clips'
import { registration } from '~src/controller/auth'

export default class RegistrationPage extends Component {
  protected render(): Element {
    const aside = new TemplateBuilder('<p>Registration rules</p>')

    const main = new RegistrationComponent()

    main.on('submit', registration)

    const clips = new ClipComponent({ hideBackClip: false })

    const body = new BodyComponent({
      aside: aside.render(),
      main,
      clips,
      hideAside: true,
    })

    return body.element
  }
}

function render(el: Element) {
  const root = document.querySelector('#root')
  root?.appendChild(el)
  return root
}

render(new RegistrationPage().element)
