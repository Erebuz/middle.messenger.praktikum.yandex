import '~src/assets/style.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import UserSettingsComponent from '~src/component/userSettings'

export default class Page extends ComponentClass {
  constructor() {
    super()

    this.template = new TemplateBuilder(new UserSettingsComponent().render())
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
