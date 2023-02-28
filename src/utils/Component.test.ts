import { beforeEach, describe, expect, jest, test } from '@jest/globals'
import { Component } from '~src/utils/Component'

interface TestComponentOptions {
  id: string
}
class TestComponent extends Component<TestComponentOptions> {
  protected render(): Element {
    const body = document.createElement('div')

    if (this.props.id) {
      body.id = this.props.id
    }

    return body
  }
}

describe('Component', () => {
  let component: Component<TestComponentOptions>

  beforeEach(() => {
    component = new TestComponent()
  })

  test('Component render element', () => {
    const res = component.element instanceof Element

    expect(res).toBe(true)
  })

  test('Component set props', () => {
    component.setProps({ id: 'props_test' })

    const res = component.props.id

    expect(res).toBe('props_test')
  })

  test('Component render element with props', () => {
    component.setProps({ id: 'props_render_test' })

    const res = component.element.id

    expect(res).toBe('props_render_test')
  })

  test('Remove component from DOM', () => {
    component.setProps({ id: 'remove_test' })
    document.body.appendChild(component.element)

    const res1 = document.getElementById('remove_test') !== null

    expect(res1).toBe(true)

    component.remove()
    const res2 = document.getElementById('remove_test') !== null

    expect(res2).toBe(false)
  })

  test('Component create events', () => {
    const spyFn = jest.fn()
    component.setProps({
      id: 'event_test',
      events: {
        click: () => {
          spyFn()
        },
      },
    })
    document.body.appendChild(component.element)
    const el = document.getElementById('event_test') as HTMLElement

    el.click()

    expect(spyFn).toBeCalledTimes(1)
  })
})
