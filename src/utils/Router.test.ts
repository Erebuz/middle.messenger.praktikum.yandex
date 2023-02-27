import {
  afterEach,
  // afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals'
import { Component } from '~src/utils/Component'
import { Route, Router } from '~src/utils/Router'

class TestComponent extends Component {
  protected render(): Element {
    return document.createElement('div')
  }
}

class TestComponentWithId extends Component {
  protected render(): Element {
    const div = document.createElement('div')
    div.id = 'testId'
    return div
  }
}

describe('Router', () => {
  let router: Router
  const oldPushState = window.history.pushState

  beforeEach(() => {
    router = new Router('body')
    window.history.pushState = jest.fn()
  })

  afterEach(() => {
    window.history.pushState = oldPushState
  })

  test('Router set route', () => {
    router.use({ pathname: '/test', component: TestComponent })

    const res = router.getRoute('/test') instanceof Route

    expect(res).toBe(true)
  })

  test('Router set new state to history', () => {
    router.use({ pathname: '/', component: TestComponent })
    router.use({ pathname: '/test', component: TestComponent })
    router.start()

    router.go('/test')

    expect(window.history.pushState).toBeCalledTimes(1)
  })

  test('Router render Component after set new location.pathname', () => {
    router.use({ pathname: '/', component: TestComponent })
    router.use({ pathname: '/with_id', component: TestComponentWithId })

    router.go('/with_id')
    const res = document.getElementById('testId') instanceof HTMLElement

    expect(res).toBe(true)
  })
})
