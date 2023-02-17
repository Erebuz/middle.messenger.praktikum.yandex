import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import MessageFieldComponent, {
  MessageFieldOptionsInterface,
} from '~src/component/components/messageField'
import InputComponent from '~src/component/components/input'
import { searchChat } from '~src/controller/chatController'
import { ChatPreviewInterface } from '~src/interfaces/chat'
import ButtonComponent from '~src/component/components/button'
import { show_create_chat_dialog } from '~src/store/Actions'

export interface GeneralAsideOptionsInterface {
  searchField?: Component<MessageFieldOptionsInterface>
  preview?: Component<ChatPreviewInterface>[]
}

export default class GeneralAsideComponent extends Component<GeneralAsideOptionsInterface> {
  protected initProps() {
    this.props.searchField = new MessageFieldComponent({
      textField: new InputComponent({
        name: 'search',
        placeholder: 'Search',
      }),
      events: {
        submit: searchChat,
      },
    })
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    if (this.props.searchField)
      body.setKey('searchField', this.props.searchField)

    body.setKey(
      'createButton',
      new ButtonComponent({
        label: 'Create chat',
        classes: 'general-aside__create-chat',
        events: {
          click: show_create_chat_dialog,
        },
      })
    )

    if (this.props.preview) body.setKey('preview', this.props.preview)

    return body.render()
  }
}
