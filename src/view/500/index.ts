import '~src/assets/style.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import ErrorComponent from '~src/component/error'

import img500 from '~src/assets/500.jpg'

export default class Page extends ComponentClass {
  constructor() {
    super()

    this.template = new ErrorComponent(
        '500',
        'Internal error',
        img500
    )
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
