import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import LoginComponent from '~src/component/login'

export default class Page extends ComponentClass {
  constructor() {
    super()

    this.childs.bodyComponent = new BodyComponent(false)

    const aside = this.childs.bodyComponent.childs.aside as TemplateBuilder
    const main = this.childs.bodyComponent.childs.main as TemplateBuilder

    aside.setKey('asideBody', '<p>Project description</p>')
    main.setKey('mainBody', new LoginComponent().render())

    this.template = this.childs.bodyComponent
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
