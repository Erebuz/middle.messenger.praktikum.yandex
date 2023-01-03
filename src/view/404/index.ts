import '~src/static/style.scss'
import './index.scss'

import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import ErrorComponent from '~src/component/error'

export default class Page extends ComponentClass {
  constructor() {
    super()

    this.template = new ErrorComponent(
      '404',
      'Page not found',
      '404.jpg'
    )
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
