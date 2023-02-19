import { Component } from '~src/utils/Component'
import tmpl from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import TextFieldComponent, {
  TextFieldOptionsInterface,
} from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'
import State from '~src/store/state'
import UserPreviewComponent from '~src/component/components/userPreview'
import { UserInterface } from '~src/interfaces/user'
import { searchUser } from '~src/controller/userController'
import { hide_modal_dialog } from '~src/store/Actions'
import { createChat, setChatAvatar } from '~src/controller/chatController'
import ChatAvatarInputComponent from '~src/component/chatAvatarInput'

export interface ModalDialogOptionsInterface {
  show?: boolean
  type?: 'add' | 'remove' | 'create' | 'add_avatar'
  current_users?: UserInterface[]
  search_field?: Component<TextFieldOptionsInterface>
}

export default class ModalDialogComponent extends Component<ModalDialogOptionsInterface> {
  protected initProps() {
    this.props.current_users = State.store.current_chat_users

    this.props.search_field = new TextFieldComponent({
      name: 'data',
      label: 'Chat name',
      required: true,
    })

    this.props.events = {
      submit: (ev: SubmitEvent) => {
        ev.preventDefault()
        const form = ev.target as HTMLFormElement
        const formData = new FormData(form)

        const data = formData.get('data') as string

        if (data) {
          form.checkValidity()
        }

        if (this.props.type === 'add') {
          searchUser(data).catch()
        } else if (this.props.type === 'add_avatar') {
          setChatAvatar()
        } else {
          createChat(data)
            .then(() => hide_modal_dialog())
            .catch()
        }
      },
    }
  }

  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    if (!this.props.type) return body.render()

    const title =
      this.props.type !== 'create'
        ? this.props.type[0].toUpperCase() + this.props.type.slice(1) + ' user'
        : 'Create chat'
    body.setKey('title', title)

    if (this.props.type === 'add') {
      body.setKey('search', this.props.search_field as Component)

      body.setKey(
        'searchButton',
        new ButtonComponent({
          label: 'Search',
          buttonType: 'submit',
          classes: 'modal-dialog__search-button',
        })
      )
    }

    if (this.props.type === 'add_avatar') {
      body.setKey('search', new ChatAvatarInputComponent())

      body.setKey(
        'addButton',
        new ButtonComponent({
          label: 'Upload',
          buttonType: 'submit',
          classes: 'button',
        })
      )
    }

    if (this.props.type == 'remove' || this.props.type === 'add') {
      const users = []
      for (const user of this.props.current_users ?? []) {
        if (user.id === State.store.user.id) continue

        if (
          this.props.type === 'add' &&
          State.store.current_chat_users.find(
            (cur_user) => cur_user.id === user.id
          )
        )
          continue

        users.push(new UserPreviewComponent({ user, type: this.props.type }))
      }

      if (users.length > 0) {
        body.setKey('body', users)
      } else {
        body.setKey('body', '<p>No users in chat</p>')
      }
    }

    if (this.props.type == 'create') {
      body.setKey(
        'body',
        new TextFieldComponent({
          name: 'data',
          label: 'Chat name',
          required: true,
        })
      )

      body.setKey(
        'addButton',
        new ButtonComponent({
          buttonType: 'submit',
          label: 'Create',
        })
      )
    }

    body.setKey(
      'cancelButton',
      new ButtonComponent({
        buttonType: 'button',
        label: 'Cancel',
        events: {
          click: hide_modal_dialog,
        },
      })
    )

    if (this.props.show) {
      body.setKey('show', 'modal-dialog__show')
    } else {
      body.setKey('show', 'modal-dialog__hide')
    }

    return body.render()
  }
}
