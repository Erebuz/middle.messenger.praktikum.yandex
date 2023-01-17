import EventBus from '~src/utils/EventBus'

export class Component extends EventBus {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  protected _element: Element

  public props

  public flowBus: () => EventBus

  constructor(props: { [key: string]: any } = {}) {
    super()
    this.props = this._makeProxyProps(props)

    this._registerEvents()

    this.flowBus().emit(Component.EVENTS.INIT)
  }

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

  private _makeProxyProps(props: { [key: string]: any }) {
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
    if (this._element?.parentElement) {
      const parent = this._element.parentElement
      const new_element = this.render()

      parent.replaceChild(new_element, this._element)
      this._element = new_element
    } else {
      this._element = this.render()
    }

    this._addEventsListeners()
  }

  private _addEventsListeners() {
    for (const key in this.listeners) {
      this.listeners[key].forEach((foo) => {
        this._element.addEventListener(key, foo)
      })
    }
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

  public on(event: string, callback: (...args: any) => void) {
    super.on(event, callback)

    this._element.addEventListener(event, callback)
  }

  public off(event: string, callback: (...args: any) => void) {
    super.off(event, callback)

    this._element.removeEventListener(event, callback)
  }
}
