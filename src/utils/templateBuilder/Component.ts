import EventBus from '~src/utils/EventBus'

interface PropsType {
  events?: {
    [key: string]: object
  }
}

export abstract class Component<T = unknown> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  protected _element: Element

  public props

  public flowBus: () => EventBus

  constructor(options: PropsType | T = {}) {
    this.props = this._makeProxyProps(options)

    this._registerEvents()

    this.flowBus().emit(Component.EVENTS.INIT)

    this.initProps()
  }

  protected initProps() {}

  private _registerEvents() {
    const eventBus = new EventBus()
    this.flowBus = () => eventBus

    this.flowBus().on(Component.EVENTS.INIT, this.init.bind(this))
    this.flowBus().on(
      Component.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    )
    this.flowBus().on(
      Component.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    )
    this.flowBus().on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _makeProxyProps(props: any) {
    props = new Proxy(props, {
      set: (target, prop: string, value) => {
        const old_value = target[prop]
        target[prop] = value
        this.flowBus().emit(Component.EVENTS.FLOW_CDU, old_value, value)
        return true
      },
    })

    return props
  }

  private init() {
    this.flowBus().emit(Component.EVENTS.FLOW_CDM)
  }

  private _componentDidMount() {
    this.beforeMount()

    this.flowBus().emit(Component.EVENTS.FLOW_RENDER)
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps)

    if (response) {
      this.flowBus().emit(Component.EVENTS.FLOW_RENDER)
    }
  }

  private _render() {
    if (this._element) {
      this._removeEvents()
    }

    if (this._element?.parentElement) {
      const parent = this._element.parentElement
      const new_element = this.render()

      parent.replaceChild(new_element, this._element)
      this._element = new_element
    } else {
      this._element = this.render()
    }

    this._addEvents()
  }

  private _addEvents() {
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      if (Array.isArray(events[eventName])) {
        events[eventName].forEach((foo: (...args: any) => void) => {
          this._element.addEventListener(eventName, foo)
        })
      } else {
        this._element.addEventListener(eventName, events[eventName])
      }
    })
  }

  private _removeEvents() {
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      events[eventName].forEach((foo: (...args: any) => void) => {
        this._element.removeEventListener(eventName, foo)
      })
    })
  }

  protected beforeMount() {}

  protected componentDidUpdate(oldProps: string, newProps: string) {
    return oldProps !== newProps
  }

  protected render(): Element {
    return new Element()
  }

  public setProps = (newProps: typeof this.props) => {
    if (!newProps) {
      return
    }
    Object.assign(this.props, newProps)
  }

  public get element() {
    return this._element
  }
}
