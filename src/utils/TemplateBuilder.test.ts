import { beforeEach, describe, expect, test } from '@jest/globals'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import { Component } from '~src/utils/Component'

class TestComponent extends Component {
  protected render(): Element {
    return document.createElement('div')
  }
}

describe('Template builder', () => {
  let templateBuilder: TemplateBuilder

  beforeEach(() => {
    templateBuilder = new TemplateBuilder('<div>{{ key }}</div>')
  })

  test('key is set to keys after create object', () => {
    const res = templateBuilder.keys.includes('key')

    expect(res).toBe(true)
  })

  test('setKey method with incorrect key', () => {
    const res = () => templateBuilder.setKey('incorrect', 'key')

    expect(res).toThrow(Error)
  })

  test('setKey method with correct key with string data', () => {
    const res = () => templateBuilder.setKey('key', 'string')

    expect(res).not.toThrow(Error)
  })

  test('setKey method with correct key with Element data', () => {
    const element = document.createElement('div')

    const res = () => templateBuilder.setKey('key', element)

    expect(res).not.toThrow(Error)
  })

  test('setKey method with correct key with Element[] data', () => {
    const element = document.createElement('div')
    const element2 = document.createElement('div')

    const res = () => templateBuilder.setKey('key', [element, element2])

    expect(res).not.toThrow(Error)
  })

  test('setKey method with correct key with Component data', () => {
    const component = new TestComponent()

    const res = () => templateBuilder.setKey('key', component)

    expect(res).not.toThrow(Error)
  })

  test('setKey method with correct key with Component[] data', () => {
    const component = new TestComponent()
    const component2 = new TestComponent()

    const res = () => templateBuilder.setKey('key', [component, component2])

    expect(res).not.toThrow(Error)
  })

  test('render_result_string method return string', () => {
    const res = typeof templateBuilder.render_result_string()

    expect(res).toBe('string')
  })

  test('render method return Element', () => {
    const res = templateBuilder.render() instanceof Element

    expect(res).toBe(true)
  })
})
