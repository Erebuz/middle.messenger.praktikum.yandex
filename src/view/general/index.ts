import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import GeneralAsideComponent from '~src/component/generalAside'
import GeneralBodyComponent from '~src/component/generalBody'

export default class Page extends Component {
  constructor() {
    super()

    this.childs.bodyComponent = new BodyComponent()

    const aside = this.childs.bodyComponent.childs.aside as TemplateBuilder
    const main = this.childs.bodyComponent.childs.main as TemplateBuilder

    aside.setKey('asideBody', new GeneralAsideComponent().render())
    main.setKey('mainBody', new GeneralBodyComponent().render())

    this.template = this.childs.bodyComponent
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
