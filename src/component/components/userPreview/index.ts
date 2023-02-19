import { Component } from '~src/utils/Component'
import tmpl from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import {
  addUserToCurrentChat,
  getCurrentChatUsers,
  removeUserByCurrentChat,
} from '~src/controller/chatController'
import { UserInterface } from '~src/interfaces/user'
import { BASE_URL } from '~src/api/baseApi'
import { clear_search_user, hide_modal_dialog } from '~src/store/Actions'

export interface UserPreviewOptionsInterface {
  user: UserInterface
  type: 'add' | 'remove'
}

export default class UserPreviewComponent extends Component<UserPreviewOptionsInterface> {
  protected initProps() {
    this.props.events = {
      click: () => {
        if (this.props.type === 'remove') {
          removeUserByCurrentChat(this.props.user.id)
        }
        if (this.props.type === 'add') {
          addUserToCurrentChat(this.props.user.id)
            .then(() => {
              hide_modal_dialog()
              clear_search_user()
              getCurrentChatUsers().catch()
            })
            .catch()
        }
      },
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
