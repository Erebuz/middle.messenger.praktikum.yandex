import { Component } from '~src/utils/Component'
import './index.scss'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'

const tmpl =
  '<div class="popup" style="left: {{ left }}; right: {{ right }};' +
  ' top: {{ top }}; bottom: {{ bottom }}; {{ show }}">{{ body }}</div>'

export interface PopupOptionsInterface {
  body: Component
  left?: string
  right?: string
  top?: string
  bottom?: string
  show: boolean
}

export default class PopupComponent extends Component<PopupOptionsInterface> {
  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    body.setKey('body', this.props.body)

    if (this.props.left) body.setKey('left', this.props.left)
    if (this.props.right) body.setKey('right', this.props.right)
    if (this.props.top) body.setKey('top', this.props.top)
    if (this.props.bottom) body.setKey('bottom', this.props.bottom)

    if (this.props.show) {
      body.setKey('show', 'display: block')
    } else {
      body.setKey('show', 'display: none')
    }

    return body.render()
  }
}
