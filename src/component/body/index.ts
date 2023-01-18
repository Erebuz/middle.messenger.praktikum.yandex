import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import UserSettingsComponent from '~src/component/userSettings'

export interface BodyOptionsInterface {
  aside: Component | Element
  main: Component
  clips: Component
  hideAside?: boolean
  showUserSettings?: boolean
  userSettings?: Component
}

export default class BodyComponent extends Component<BodyOptionsInterface> {
  protected initProps() {
    this.props.userSettings = new UserSettingsComponent()
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('aside', this.props.aside)
    body.setKey('main', this.props.main)
    body.setKey('clips', this.props.clips)

    if (this.props.showUserSettings && this.props.userSettings) {
      body.setKey('userSettings', this.props.userSettings)
    }

    if (this.props.hideAside) {
      body.setKey('asideClass', 'left-page__close')
    }

    return body.render()
  }
}
