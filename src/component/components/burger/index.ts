import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import './index.scss'
import PopupComponent, {
  PopupOptionsInterface,
} from '~src/component/components/popup'

const tmpl = `<div class="burger">
    <div class="burger__point"></div>
    <div class="burger__point"></div>
    <div class="burger__point"></div>
    {{ popup }}
  </div>`

export interface BurgerOptionsInterface {
  popup?: Component<PopupOptionsInterface>
  body: Component
}

export default class BurgerComponent extends Component<BurgerOptionsInterface> {
  protected initProps() {
    this.props.events = {
      click: () => {
        this.props.popup!.props.show = !this.props.popup!.props.show
      },
    }

    this.props.popup = new PopupComponent({
      body: this.props.body,
      bottom: '-60px',
      right: '-20px',
      show: false,
    })
  }

  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    if (this.props.popup) body.setKey('popup', this.props.popup)

    return body.render()
  }
}
