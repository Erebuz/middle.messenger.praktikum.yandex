import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import RegistrationComponent from '~src/component/registration'

export default class Page extends Component {
  constructor() {
    super()

    this.childs.bodyComponent = new BodyComponent()

    const aside = this.childs.bodyComponent.childs.aside as TemplateBuilder
    const main = this.childs.bodyComponent.childs.main as TemplateBuilder

    aside.setKey('asideBody', '<p>Registration rules</p>')
    main.setKey('mainBody', new RegistrationComponent().render())

    this.template = this.childs.bodyComponent
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
