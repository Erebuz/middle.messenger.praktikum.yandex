import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ChatPreviewComponent from '~src/component/components/chatPreview'

export default class GeneralAsideComponent extends Component {
  constructor() {
    super()

    this.template = new TemplateBuilder(template)

    this.template.setKey(
      'searchField',
      new TextFieldComponent({ visualType: 'block', label: 'Search:' }).render()
    )

    const firstChat = new ChatPreviewComponent({
      name: 'First chat',
      message: 'Message text',
      time: '14:00',
      count: 0,
    }).render()

    const secondChat = new ChatPreviewComponent({
      name: 'Second chat',
      message: 'Message text',
      time: '12:00',
      count: 3,
    }).render()

    this.template.setKey('chats', firstChat + secondChat)
  }

  protected _templateCreaters = {}
}
