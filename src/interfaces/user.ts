export interface UserInterface {
  id: number
  first_name: string
  second_name: string
  display_name: string | null
  login: string
  avatar: string | null
  email: string
  phone: string
}

export interface UserRegistrationInterface {
  email: string
  login: string
  first_name: string
  second_name: string
  display_name: string
  phone: string
  password: string
}

export interface UpdatePasswordInterface {
  oldPassword: string
  newPassword: string
}
