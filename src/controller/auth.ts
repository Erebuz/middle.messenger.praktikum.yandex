import router from '~src/router'

export function login(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    username: formData.get('username'),
    password: formData.get('password'),
  }

  console.log(data)

  router.go('/messenger')
}

export function logout() {
  router.go('/')
}

export function registration(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    email: formData.get('email'),
    login: formData.get('login'),
    first_name: formData.get('first_name'),
    second_name: formData.get('second_name'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  }

  console.log(data)

  router.go('/messenger')
}

export function updateSettings(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    email: formData.get('email'),
    login: formData.get('login'),
    first_name: formData.get('first_name'),
    second_name: formData.get('second_name'),
    display_name: formData.get('display_name'),
    phone: formData.get('phone'),
  }

  console.log(data)
}

export function updatePassword(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    oldPassword: formData.get('oldPassword'),
    newPassword: formData.get('newPassword'),
    confirmNewPassword: formData.get('confirmNewPassword'),
  }

  console.log(data)
}
