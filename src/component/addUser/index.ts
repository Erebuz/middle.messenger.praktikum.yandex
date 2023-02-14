import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import tmpl from './index.tmpl'
import './index.scss'
import ButtonComponent from '~src/component/components/button'

import addImg from '~src/assets/account-plus.svg'
import removeImg from '~src/assets/account-minus.svg'
import {
  show_add_user_dialog,
  show_remove_user_dialog,
} from '~src/store/Actions'

export default class AddUserComponent extends Component<{}> {
  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    const add_btn = new ButtonComponent({
      label: `<img width="20px" src="${addImg}">Add user`,
      classes: 'add-user__button',
      events: {
        click: show_add_user_dialog,
      },
    })

    body.setKey('addButton', add_btn)

    const remove_btn = new ButtonComponent({
      label: `<img width="20px" src="${removeImg}">Remove user`,
      classes: 'add-user__button',
      events: {
        click: show_remove_user_dialog,
      },
    })

    body.setKey('removeButton', remove_btn)

    return body.render()
  }
}
