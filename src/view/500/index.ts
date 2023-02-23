import '~src/assets/style.scss'
import { Component } from '~src/utils/Component'
import ErrorComponent from '~src/component/error'

import img500 from '~src/assets/500.jpg'

export default class Error404Page extends Component {
  protected render(): Element {
    const template = new ErrorComponent({
      image: img500,
      code: '500',
      text: 'Eternal error',
    })

    return template.element
  }
}
