import template from './index.tmpl'
import './index.scss'
import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import BurgerComponent from '~src/component/components/burger'
import AddUserComponent from '~src/component/addUser'

export interface ChatInfoOptionsInterface {
  img: string
  name: string
  burger?: Component<{}>
}

export default class ChatInfoComponent extends Component<ChatInfoOptionsInterface> {
  protected initProps() {
    this.props.burger = new BurgerComponent({
      body: new AddUserComponent(),
    })
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    body.setKey('img', this.props.img)
    body.setKey('name', this.props.name)
    if (this.props.burger) {
      body.setKey('burger', this.props.burger)
    }

    return body.render()
  }
}
