import { HTTPResponse } from '~src/utils/HttpTransport'
import store from '~src/store'
import UserApi from '~src/api/userApi'
import { UserInterface } from '~src/interfaces/user'

const userApi = new UserApi()

export function updateSettings(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    email: formData.get('email') as string,
    login: formData.get('login') as string,
    first_name: formData.get('first_name') as string,
    second_name: formData.get('second_name') as string,
    display_name: formData.get('display_name') as string,
    phone: formData.get('phone') as string,
  }

  userApi
    .update_settings(data)
    .then(() => {})
    .catch(() => {
      console.log('error')
    })
}

export function updatePassword(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data: {
    oldPassword: string
    newPassword: string
    confirmNewPassword?: string
  } = {
    oldPassword: formData.get('oldPassword') as string,
    newPassword: formData.get('newPassword') as string,
    confirmNewPassword: formData.get('confirmNewPassword') as string,
  }

  if (data.newPassword !== data.confirmNewPassword) {
    console.log('Error')
    return
  }

  delete data['confirmNewPassword']

  userApi
    .update_password(data)
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

    userApi
      .update_avatar(formData)
      .then((res: HTTPResponse) => {
        store.set('user', res.data)
      })
      .catch()
  }
}

export function searchUser(login: string) {
  return userApi
    .search_user(login)
    .then((res: HTTPResponse<UserInterface[]>) =>
      store.set('search_users', res.data)
    )
}
