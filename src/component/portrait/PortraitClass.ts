import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import template from './index.tmpl'
import { updateAvatar } from '~src/controller/auth'
import './index.scss'

export interface PortraitOptionsInterface {
  src?: string
  hide?: string
}

export default class PortraitComponent extends Component<PortraitOptionsInterface> {
  protected initProps() {
    this.props.events = {
      change: updateAvatar,
    }
  }

  protected render(): Element {
    const body = new TemplateBuilder(template)

    if (this.props.src) {
      body.setKey('src', this.props.src)
    }

    if (this.props.hide) {
      body.setKey('style', 'display: none')
    }

    return body.render()
  }
}
