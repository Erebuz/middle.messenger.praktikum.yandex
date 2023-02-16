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
        required: true,
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

    if (this.props.preview) body.setKey('preview', this.props.preview)

    return body.render()
  }
}
