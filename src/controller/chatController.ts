import { api_get_search_users } from '~src/store/Actions'

export function searchChat(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const login = formData.get('search') as string

  api_get_search_users(login)
}

export function sendMessage(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    message: formData.get('message'),
  }

  console.log(data)
}
