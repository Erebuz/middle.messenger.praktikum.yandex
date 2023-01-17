import '~src/assets/style.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import UserSettingsComponent from '~src/component/userSettings'

export default class UserSettingsPage extends Component {
  public render() {
    const template = new UserSettingsComponent()

    return template.element
  }
}

function render(el: Element) {
  const root = document.querySelector('#root')
  root?.appendChild(el)
  return root
}

render(new UserSettingsPage().element)
