import HTTPTransport from '~src/utils/HttpTransport'

export const BASE_URL = 'https://ya-praktikum.tech/api/v2/'

export default class BaseAPI {
  http: HTTPTransport

  constructor(baseUrl: string) {
    this.http = new HTTPTransport(BASE_URL + baseUrl)
  }

  _get(uri = '', options = {}) {
    return this.http.get(uri, options)
  }

  _create(uri = '', options = {}) {
    return this.http.post(uri, options)
  }

  _set(uri = '', options = {}) {
    return this.http.post(uri, options)
  }

  _update(uri = '', options = {}) {
    return this.http.put(uri, options)
  }

  _delete(uri = '', options = {}) {
    return this.http.delete(uri, options)
  }
}
