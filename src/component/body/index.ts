import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import UserSettingsComponent, {
  UserSettingsOptionsInterface,
} from '~src/component/userSettings'
import { GeneralAsideOptionsInterface } from '~src/component/generalAside/AsideClass'
import { GeneralBodyOptionsInterface } from '~src/component/generalMain'
import { ClipOptionsInterface } from '~src/component/components/clips'
import { LoginOptionsInterface } from '~src/component/login'
import { RegistrationOptionsInterface } from '~src/component/registration'
import ModalDialogComponent from '~src/component/modalDialog'

export interface BodyOptionsInterface {
  aside: Component<GeneralAsideOptionsInterface> | Element
  main: Component<
    | GeneralBodyOptionsInterface
    | LoginOptionsInterface
    | RegistrationOptionsInterface
  >
  clips: Component<ClipOptionsInterface>
  hideAside?: boolean
  showUserSettings?: boolean
  userSettings?: Component<UserSettingsOptionsInterface>
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

    body.setKey('modalDialog', new ModalDialogComponent())

    return body.render()
  }
}
