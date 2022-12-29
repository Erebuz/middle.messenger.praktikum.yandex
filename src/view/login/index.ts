import '~src/static/style.scss'
import './index.scss'
import BodyComponent from '~src/component/bodyTemplate'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'

export default class LoginPage extends ComponentClass {
  public bodyComponent = new BodyComponent()

  constructor() {
    super([])

    this.template = this.bodyComponent.template
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

window.thisPage = new LoginPage()
window.thisPage.render()
