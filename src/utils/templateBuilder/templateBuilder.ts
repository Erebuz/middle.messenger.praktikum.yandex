import { Component } from '~src/utils/templateBuilder/Component'

export class TemplateBuilder {
  private readonly _template: string
  private _element: null | Element
  private _keys: string[] = []
  private _keysData: {
    [key: string]:
      | undefined
      | string
      | Element
      | Element[]
      | Component
      | Component[]
  } = {}

  constructor(template: string) {
    this._template = template

    const key_reg_exp = /\{\{[^}]+}}/g
    const key_arr = template.match(key_reg_exp) || []

    for (let key of key_arr) {
      key = key.slice(2, -2).trim()

      this._keys.push(key)
      this._keysData[key] = undefined
    }
  }

  public setKey(
    key: string,
    value: string | Element | Element[] | Component | Component[]
  ) {
    if (!this._keys.includes(key)) {
      throw new TypeError(`"${key}" not exist in [${this._keys}]`)
    }

    this._keysData[key] = value
  }

  public get keys() {
    return this._keys
  }

  public render() {
    const textTmp = this.render_result_string()

    this._element = document.createElement('div')
    this._element.innerHTML = textTmp

    const result = this._element.firstChild as Element

    for (const key in this._keysData) {
      if (!this._keysData[key] || typeof this._keysData[key] === 'string') {
        continue
      }

      const el = result.querySelector(`[data-id=${key}]`) as HTMLElement
      const key_data = this._keysData[key]

      if (key_data instanceof Element) {
        el.parentElement!.replaceChild(key_data as Element, el)
      } else if (key_data instanceof Component) {
        el.parentElement!.replaceChild(key_data.element as Element, el)
      } else if (Array.isArray(key_data)) {
        const parent = el.parentElement as Element
        parent.removeChild(el)

        for (const child of key_data) {
          if (child instanceof Element) {
            parent.appendChild(child)
          } else {
            parent.appendChild(child.element)
          }
        }
      }
    }

    return result
  }

  public get element() {
    if (!this._element) {
      throw new Error('Element not render')
    }
    return this._element
  }

  public render_result_string() {
    let template = this._template

    const keys = this._keys

    keys.forEach((key: string) => {
      const key_data = this._keysData[key]

      if (key_data === undefined) {
        template = TemplateBuilder._replace_key_to_string(template, key, '')
      } else if (typeof key_data === 'string') {
        template = TemplateBuilder._replace_key_to_string(
          template,
          key,
          key_data
        )
      } else {
        template = TemplateBuilder._replace_key_to_string(
          template,
          key,
          `<div data-id="${key}"></div>`
        )
      }
    })

    return template
  }

  private static _replace_key_to_string(
    template: string,
    key: string,
    replace_text: string
  ) {
    const keyReg = new RegExp('{{' + '[ ]*' + key + '[ ]*' + '}}')
    return template.replace(keyReg, replace_text)
  }
}
