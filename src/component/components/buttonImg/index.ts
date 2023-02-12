import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/templateBuilder'
import ButtonComponent from '~src/component/components/button'
import './index.scss'

const tmpl = '<img src="{{ image }}" width="40px" height="40px" alt="Logout" />'

export interface ButtonImgOptionsInterface {
  buttonType?: 'submit' | 'button'
  img: string
  classes?: string
}

export default class ButtonImgComponent extends Component<ButtonImgOptionsInterface> {
  protected render(): Element {
    const img = new TemplateBuilder(tmpl)

    img.setKey('image', this.props.img)

    const button = new ButtonComponent({
      buttonType: this.props.buttonType,
      classes: 'button-img ' + this.props.classes,
      label: img.render_result_string(),
    })

    return button.element
  }
}
