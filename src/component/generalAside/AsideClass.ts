import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import { MessageFieldOptionsInterface } from '~src/component/components/messageField'
import { ChatPreviewOptionsInterface } from '~src/component/components/chatPreview'

export interface GeneralAsideOptionsInterface {
  searchField: Component<MessageFieldOptionsInterface>
  chats: Component<ChatPreviewOptionsInterface>[]
}

export default class GeneralAsideComponent extends Component<GeneralAsideOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('searchField', this.props.searchField)

    body.setKey('chats', this.props.chats)

    return body.render()
  }
}
