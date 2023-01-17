import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import ChatInfoComponent from "~src/component/chatInfo";

export interface GeneralMainOptionsInterface {
  textField: Component
}

export default class GeneralMainComponent extends Component {
  constructor(options: GeneralMainOptionsInterface) {
    super(options)

    this.props.chatInfo = new ChatInfoComponent({
      img: 'img',
      name: 'Ivanov'
    })
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('textField', this.props.textField)

    body.setKey('chatInfo', this.props.chatInfo)

    return body.render()
  }
}
