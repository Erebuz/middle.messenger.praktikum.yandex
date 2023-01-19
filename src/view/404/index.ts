import '~src/assets/style.scss'
import img404 from '~src/assets/404.jpg'
import { Component } from '~src/utils/templateBuilder/Component'
import ErrorComponent from '~src/component/error'

export default class Error404Page extends Component {
  protected render(): Element {
    const template = new ErrorComponent({
      image: img404,
      code: '404',
      text: 'Page not found',
      errorStyle: 'background-color: #121715',
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
