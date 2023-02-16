import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import router from '~src/router'
import './index.scss'

export interface RouterLnkOptionsInterface {
  text: string
  link: string
}

export default class RouterLink extends Component<RouterLnkOptionsInterface> {
  protected initProps() {
    this.props.events = {}
    this.props.events['click'] = () => router.go(this.props.link)
  }

  protected render(): Element {
    const body = new TemplateBuilder('<div class="link">{{ text }}</div>')

    body.setKey('text', this.props.text)

    return body.render()
  }
}
