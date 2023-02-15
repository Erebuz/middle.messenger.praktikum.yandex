import AuthApi from '~src/api/authApi'
import router from '~src/router'
import store from '~src/store'
import { HTTPResponse } from '~src/utils/HttpTransport'

const authApi = new AuthApi()

export function login(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    login: formData.get('username') as string,
    password: formData.get('password') as string,
  }

  authApi
    .sign_in(data)
    .then(() => {
      router.go('/messenger')
    })
    .catch(() => {
      console.log('error')
    })
}

export function logout() {
  authApi.logout().then(() => {
    router.go('/')
    store.removeState()
  })
}

export function getUser() {
  return authApi.get_user().then((res: HTTPResponse) => {
    store.set('user', res.data)
  })
}

export function registration(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    email: formData.get('email') as string,
    login: formData.get('login') as string,
    first_name: formData.get('first_name') as string,
    second_name: formData.get('second_name') as string,
    phone: formData.get('phone') as string,
    password: formData.get('password') as string,
    confirm_password: formData.get('confirm_password') as string,
  }

  if (data.password !== data.confirm_password) {
    console.log('error')
    return
  }

  authApi
    .registration(data)
    .then(() => {
      router.go('/messenger')
    })
    .catch(() => {
      console.log('error')
    })
}
