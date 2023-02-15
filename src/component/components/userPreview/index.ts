import { Component } from '~src/utils/Component'
import tmpl from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import { createChat } from '~src/controller/chatController'
import { UserInterface } from '~src/interfaces/user'
import { BASE_URL } from '~src/api/baseApi'

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

    if (this.props.user.avatar) {
      const src = BASE_URL + '/resources' + this.props.user.avatar
      body.setKey('image', `<img src="${src}" alt="Avatar">`)
    }

    body.setKey('name', this.props.user.login)

    return body.render()
  }
}
