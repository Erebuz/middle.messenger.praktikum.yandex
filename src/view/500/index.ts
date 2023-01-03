import '~src/static/style.scss'
import './index.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'

export default class Page extends ComponentClass {
  constructor() {
    super()

    this.template = new TemplateBuilder('500')
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
