import { Component } from '~src/utils/Component'
import tmpl from './index.tmpl'
import './index.scss'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import TextFieldComponent from '~src/component/components/textField/textField'
import ButtonComponent from '~src/component/components/button'

export interface ModalDialogOptionsInterface {
  show?: boolean
  add: boolean
}

export default class ModalDialogComponent extends Component<ModalDialogOptionsInterface> {
  protected initProps() {
    this.props.events = {
      submit: (ev: SubmitEvent) => {
        ev.preventDefault()
        const form = ev.target as HTMLFormElement
        const formData = new FormData(form)

        const user = formData.get('user')

        if (user == '') {
          form.checkValidity()
        }

        console.log(user)
      },
    }
  }

  protected render(): Element {
    const body = new TemplateBuilder(tmpl)

    body.setKey('title', this.props.add ? 'Add user' : 'Remove user')

    body.setKey(
      'textField',
      new TextFieldComponent({
        name: 'user',
        label: 'Username',
        required: true,
      })
    )

    body.setKey(
      'addButton',
      new ButtonComponent({
        buttonType: 'submit',
        label: this.props.add ? 'Add' : 'Remove',
      })
    )

    body.setKey(
      'cancelButton',
      new ButtonComponent({
        buttonType: 'button',
        label: 'Cancel',
        events: {
          click: () => {
            this.props.show = false
          },
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
