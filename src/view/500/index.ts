import '~src/static/style.scss'
import './index.scss'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'
import ErrorComponent from '~src/component/error'

export default class Page extends ComponentClass {
  constructor() {
    super()

    this.template = new ErrorComponent(
        '500',
        'Internal error',
        '500.jpg'
    )
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
