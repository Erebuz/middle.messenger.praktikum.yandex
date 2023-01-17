export function login(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    username: formData.get('username'),
    password: formData.get('password'),
  }

  console.log(data)
}
