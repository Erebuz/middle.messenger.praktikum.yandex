import TextFieldComponent from '~src/component/components/textField/textField'

export function validation(textField: TextFieldComponent) {
  const inputEl = textField.props.input?.element

  if (inputEl) {
    textField.props.showError = !(inputEl as HTMLInputElement).checkValidity()
  }
}

// латиница или кириллица, первая буква должна быть заглавной, без пробелов и
// без цифр, нет спецсимволов (допустим только дефис)
export const nameReg = '^[A-ZА-Я][a-zA-Zа-яА-Я_]*$'

//от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них,
// без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)
export const loginReg = '^(?!\\d+$)[\\da-zA-Z_-]{3,20}$'

//латиница, может включать цифры и спецсимволы вроде дефиса,
// обязательно должна быть «собака» (@) и точка после неё, но перед точкой
// обязательно должны быть буквы
export const emailReg = '^\\S+@[a-zA-Z]+\\.\\S+$'

// от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра
export const passwordReg = '^(?![a-zA-Zа-яА-Я\\W]+$)(?![a-zа-я\\W]+$).{8,40}$'

// от 10 до 15 символов, состоит из цифр, может начинаться с плюса
export const phoneReg = '^(\\+|)\\d{10,15}$'
