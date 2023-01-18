export interface RequestOptionsInterface {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
  headers?: { [key: string]: string }
  timeout?: number
}

function queryStringify(data: {
  [key: string]: string | number | Array<string | number> | object
}) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object')
  }

  const keys = Object.keys(data)
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
  }, '?')
}

export default class HTTPTransport {
  get = (url: string, options: Partial<RequestOptionsInterface> = {}) => {
    return this.request(url, { ...options, method: 'GET' }, options.timeout)
  }

  post = (url: string, options: Partial<RequestOptionsInterface> = {}) => {
    return this.request(url, { ...options, method: 'POST' }, options.timeout)
  }

  put = (url: string, options: Partial<RequestOptionsInterface> = {}) => {
    return this.request(url, { ...options, method: 'PUT' }, options.timeout)
  }

  delete = (url: string, options: Partial<RequestOptionsInterface> = {}) => {
    return this.request(url, { ...options, method: 'DELETE' }, options.timeout)
  }

  request = (
    url: string,
    options: RequestOptionsInterface,
    timeout: number = 5000
  ) => {
    const { headers = {}, method, data } = options

    return new Promise<XMLHttpRequest>(function (resolve, reject) {
      if (!method) {
        reject('No method')
        return
      }

      const xhr = new XMLHttpRequest()
      const isGet = method === 'GET'

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url)

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }
}
