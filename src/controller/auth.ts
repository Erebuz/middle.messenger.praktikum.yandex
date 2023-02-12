import router from '~src/router'
import HTTPTransport from '~src/utils/HttpTransport'

const http = new HTTPTransport('https://ya-praktikum.tech/api/v2')

export function login(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    login: formData.get('username'),
    password: formData.get('password'),
  }

  http
    .post('auth/signin', { data })
    .then(() => {
      router.go('/messenger')
    })
    .catch(() => {
      console.log('error')
    })
}

export function logout() {
  http.post('/auth/logout').then(() => {
    router.go('/')
  })
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

  if (data.password !== data.confirm_password) {
    console.log('error')
    return
  }

  http
    .post('auth/signup', { data })
    .then(() => {
      router.go('/messenger')
    })
    .catch(() => {
      console.log('error')
    })
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
