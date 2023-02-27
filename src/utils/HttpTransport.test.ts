import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals'
import HTTPTransport from '~src/utils/HttpTransport'

describe('HttpTransport', () => {
  let open: jest.Mock
  let send: jest.Mock
  let setRequestHeader: (key: string, value: string) => void

  function createXHRmock() {
    open = jest.fn()
    send = jest.fn()
    setRequestHeader = jest.fn()

    window.XMLHttpRequest = jest.fn().mockImplementation(() => ({
      open,
      send,
      setRequestHeader,
    })) as any
  }
  let oldXml: XMLHttpRequest
  let http: HTTPTransport

  beforeEach(() => {
    // @ts-ignore
    oldXml = window.XMLHttpRequest
    createXHRmock()

    http = new HTTPTransport('http://localhost:80')
  })

  afterEach(() => {
    window.XMLHttpRequest = oldXml as any
  })

  test('HTTP empty get', () => {
    http.get('test')

    expect(open).toBeCalledWith('GET', 'http://localhost:80/test')
  })

  test('get with params', () => {
    http.get('test', { data: { key1: 'with', key2: 'key' } })

    expect(open).toBeCalledWith(
      'GET',
      'http://localhost:80/test?key1=with&key2=key'
    )
  })

  test('put/post', () => {
    http.post('test', { data: { key1: 'with', key2: 'key' } })

    expect(open).toBeCalledWith('POST', 'http://localhost:80/test')
    expect(send).toBeCalledWith('{"key1":"with","key2":"key"}')
  })

  test('delete', () => {
    http.delete('test')

    expect(open).toBeCalledWith('DELETE', 'http://localhost:80/test')
  })

  test('send form data', () => {
    const formData = new FormData()
    formData.append('key', 'value')

    http.post('test', { data: formData })

    expect(open).toBeCalledWith('POST', 'http://localhost:80/test')
    expect(send).toBeCalledWith(formData)
  })
})
