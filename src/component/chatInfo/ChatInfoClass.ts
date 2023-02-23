import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import BurgerComponent from '~src/component/burger'

import { ChatPreviewInterface } from '~src/interfaces/chat'
import { BASE_URL } from '~src/api/baseApi'
import ChatActionsComponent from '~src/component/chatActions'

export interface ChatInfoOptionsInterface {
  chat: ChatPreviewInterface | null
  burger?: Component<{}>
}

export default class ChatInfoComponent extends Component<ChatInfoOptionsInterface> {
  protected initProps() {
    this.props.burger = new BurgerComponent({
      body: new ChatActionsComponent(),
    })
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)
    if (this.props.chat && this.props.chat.avatar !== null) {
      const src = BASE_URL + '/resources' + this.props.chat.avatar
      body.setKey('avatar', `<img src="${src}" alt="Avatar">`)
    }

    if (this.props.chat) body.setKey('title', this.props.chat.title)

    if (this.props.burger) body.setKey('burger', this.props.burger)

    return body.render()
  }
}
