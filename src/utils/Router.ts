import { Component } from '~src/utils/Component'
import { TypeOf } from '~src/utils/mydash/ts'

export class Route {
  _pathname: string
  _blockClass: TypeOf<Component>
  _block: Component | null
  _rootQuery: string
  _props: Record<string, any>

  constructor(
    pathname: string,
    view: typeof Component,
    rootQuery: string,
    props: Record<string, any>
  ) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._rootQuery = rootQuery
    this._props = props
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.remove()
    }
  }

  match(pathname: string) {
    return pathname === this._pathname
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass()
    }

    const root = document.querySelector(this._rootQuery)
    if (!root) {
      throw Error('Root not exist')
    }

    root.appendChild(this._block.element)
  }
}

export class Router {
  static __instance: Router
  routes: Route[]
  history: History
  _currentRoute: Route | null
  _rootQuery: string

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery

    Router.__instance = this
  }

  use(route: {
    pathname: string
    component: TypeOf<Component>
    auth?: boolean
    beforeRoute?: (oldRoute: string, newRoute: string) => void
  }) {
    const route_to = new Route(
      route.pathname,
      route.component as typeof Component,
      this._rootQuery,
      { auth: route.auth, beforeRoute: route.beforeRoute }
    )

    this.routes.push(route_to)

    return this
  }

  start() {
    window.onpopstate = (ev: PopStateEvent) => {
      this._onRoute((ev.currentTarget! as Window).location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    let route = this.getRoute(pathname)

    this.beforeRoute()

    if (!route) {
      route = this.getRoute('/404')
    }

    if (!route) {
      throw new Error('Route not exist')
    }

    const oldRoute = this._currentRoute?._pathname
    const newRoute = route._pathname

    if (route._props.auth) {
      this.checkAuth(route)
    } else {
      this._goto(route)
    }

    if (route._props.beforeRoute) route._props.beforeRoute(oldRoute, newRoute)
  }

  beforeRoute() {}

  checkAuth(this: Router, route: Route) {
    console.log(route)
  }

  _goto(route: Route) {
    if (this._currentRoute) {
      this._currentRoute.leave()
    }
    this._currentRoute = route
    route.render()
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname))
  }
}
