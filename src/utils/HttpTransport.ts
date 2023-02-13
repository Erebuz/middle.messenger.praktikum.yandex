export interface RequestOptionsInterface {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
  headers?: { [key: string]: string }
  timeout?: number
}

export type HTTPRequest<T = any> = XMLHttpRequest & { data?: T }

type HTTPMethod = (
  url: string,
  options?: Partial<RequestOptionsInterface>
) => Promise<unknown>

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
  private readonly base_url: string

  constructor(base: string) {
    this.base_url = base + '/'
  }

  get: HTTPMethod = (url, options = {}) => {
    return this.request(
      this.base_url + url,
      {
        ...options,
        method: 'GET',
      },
      options.timeout
    )
  }

  post: HTTPMethod = (url, options = {}) => {
    return this.request(
      this.base_url + url,
      {
        ...options,
        method: 'POST',
        data: options.data,
      },
      options.timeout
    )
  }

  put: HTTPMethod = (url, options = {}) => {
    return this.request(
      this.base_url + url,
      {
        ...options,
        method: 'PUT',
        data: options.data,
      },
      options.timeout
    )
  }

  delete: HTTPMethod = (url, options = {}) => {
    return this.request(
      this.base_url + url,
      { ...options, method: 'DELETE' },
      options.timeout
    )
  }

  request = (
    url: string,
    options: RequestOptionsInterface,
    timeout: number = 5000
  ) => {
    const {
      headers = { 'Content-Type': 'application/json' },
      method,
      data,
    } = options

    return new Promise<XMLHttpRequest>(function (resolve, reject) {
      if (!method) {
        reject('No method')
        return
      }

      const xhr = new XMLHttpRequest()
      const isGet = method === 'GET'

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url)

      if (!(data instanceof FormData)) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key])
        })
      }

      xhr.withCredentials = true

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else if (data instanceof FormData) {
        xhr.send(data)
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
      .then((res: HTTPRequest) => {
        if (res.response) {
          try {
            res.data = JSON.parse(res.response)
          } catch (e) {
            res.data = res.response
          }
        }

        return new Promise(function (resolve, reject) {
          if (res.status >= 200 && res.status < 400) {
            resolve(res)
          } else {
            reject(res)
          }
        })
      })
      .catch((res: HTTPRequest) => {
        if (res.response) {
          res.data = JSON.parse(res.response)
        }

        return new Promise(function (_, reject) {
          reject(res)
        })
      })
  }
}
