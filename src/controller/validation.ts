import TextFieldComponent from '~src/component/components/textField/textField'

export function validation(textField: TextFieldComponent) {
  const inputEl = textField.props.input.element as HTMLInputElement

  textField.props.showError = !inputEl.checkValidity();
}

export const usernameReg = ''
export const passwordReg = ''
