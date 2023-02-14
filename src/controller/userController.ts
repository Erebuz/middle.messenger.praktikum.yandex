import router from '~src/router'
import HTTPTransport, { HTTPResponse } from '~src/utils/HttpTransport'
import store from '~src/store'

export const baseUrl = 'https://ya-praktikum.tech/api/v2'

const http = new HTTPTransport(baseUrl)

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
    store.removeState()
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

  http
    .put('user/profile', { data })
    .then(() => {})
    .catch(() => {
      console.log('error')
    })
}

export function updatePassword(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data: {
    oldPassword: FormDataEntryValue | null
    newPassword: FormDataEntryValue | null
    confirmNewPassword?: FormDataEntryValue | null
  } = {
    oldPassword: formData.get('oldPassword'),
    newPassword: formData.get('newPassword'),
    confirmNewPassword: formData.get('confirmNewPassword'),
  }

  if (data.newPassword !== data.confirmNewPassword) {
    console.log('Error')
    return
  }

  delete data['confirmNewPassword']

  http
    .put('user/password', { data })
    .then(() => {})
    .catch(() => {
      console.log('error')
    })
}

export function updateAvatar() {
  const avatar = document.getElementById('avatar') as HTMLInputElement
  const file = avatar.files?.[0]

  if (file) {
    const formData = new FormData()
    formData.set('avatar', file)

    http
      .put('user/profile/avatar', {
        data: formData,
        headers: {},
      })
      .then((res: HTTPResponse) => {
        store.set('user', res.data)
      })
  }
}

export function checkAuth() {
  return http.get('/auth/user').then((res: HTTPResponse) => {
    store.set('user', res.data)
  })
}
