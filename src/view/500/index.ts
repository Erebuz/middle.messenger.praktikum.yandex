import '~src/assets/style.scss'
import { Component } from '~src/utils/templateBuilder/Component'
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
function render(el: Element) {
  const root = document.querySelector('#root')
  root?.appendChild(el)
  return root
}

render(new Error404Page().element)
