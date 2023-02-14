export function searchChat(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    search: formData.get('search'),
  }

  console.log(data)
}

export function sendMessage(ev: SubmitEvent) {
  ev.preventDefault()
  const formData = new FormData(ev.target as HTMLFormElement)

  const data = {
    message: formData.get('message'),
  }

  console.log(data)
}
