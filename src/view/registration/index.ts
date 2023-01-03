import '~src/static/style.scss'
import './index.scss'
import BodyComponent from '~src/component/bodyTemplate'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'

export default class Page extends ComponentClass {
  constructor() {
    super()

    this.childs.bodyComponent = new BodyComponent()

    const aside = this.childs.bodyComponent.childs.aside as TemplateBuilder
    const main = this.childs.bodyComponent.childs.main as TemplateBuilder

    aside.setKey('asideText', 'Правила регистрации')
    main.setKey('main', 'Регистрация')

    this.template = this.childs.bodyComponent
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
