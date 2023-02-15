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
import { deleteChat, leaveChat } from '~src/controller/chatController'

export default class ChatActionsComponent extends Component<{}> {
  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    const add_btn = new ButtonComponent({
      label: `<img width="20px" src="${addImg}" alt="icon">Add user`,
      classes: 'add-user__button',
      events: {
        click: show_add_user_dialog,
      },
    })
    body.setKey('addButton', add_btn)

    const remove_btn = new ButtonComponent({
      label: `<img width="20px" src="${removeImg}" alt="icon">Remove user`,
      classes: 'add-user__button',
      events: {
        click: show_remove_user_dialog,
      },
    })
    body.setKey('removeButton', remove_btn)

    const leave_btn = new ButtonComponent({
      label: `<img width="20px" src="${removeImg}" alt="icon">Leave chat`,
      classes: 'add-user__button',
      events: {
        click: leaveChat,
      },
    })
    body.setKey('leaveButton', leave_btn)

    const delete_btn = new ButtonComponent({
      label: `<img width="20px" src="${removeImg}" alt="icon">Delete chat`,
      classes: 'add-user__button',
      events: {
        click: deleteChat,
      },
    })
    body.setKey('deleteButton', delete_btn)

    return body.render()
  }
}
