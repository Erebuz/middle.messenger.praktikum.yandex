import '~src/assets/style.scss'
import img404 from '~src/assets/404.jpg'

import { Component } from '~src/utils/templateBuilder/Component'
import ErrorComponent from '~src/component/error'

export default class Page extends Component {
  constructor() {
    super()

    this.template = new ErrorComponent(
      '404',
      'Page not found',
      img404,
      'background-color: #121715'
    )
  }

  public render() {
    const root = document.querySelector('#root')
    root.insertAdjacentHTML('beforeend', this.template.render())
    return ''
  }
}

new Page().render()
