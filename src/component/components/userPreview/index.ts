import { Component } from '~src/utils/Component'
import tmpl from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import { createChat } from '~src/controller/chatController'
import { UserInterface } from '~src/interfaces/user'

export interface UserPreviewOptionsInterface {
  user: UserInterface
}

export default class UserPreviewComponent extends Component<UserPreviewOptionsInterface> {
  protected initProps() {
    this.props.events = {
      click: () => createChat(this.props.user.login),
    }
  }

  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    body.setKey('name', this.props.user.login)

    return body.render()
  }
}
