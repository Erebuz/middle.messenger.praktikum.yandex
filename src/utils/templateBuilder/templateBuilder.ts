import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'

export class TemplateBuilder {
  private readonly _template: string
  private _result_template: string
  private _keys: string[] = []
  private _keysData: {
    [key: string]: undefined | string | TemplateBuilder | ComponentClass
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

    this.render_result_template()
  }

  public setKey(key: string, value: string | TemplateBuilder) {
    if (!this._keys.includes(key))
      throw new TypeError(`"${key}" not exist in [${this._keys}]`)

    this._keysData[key] = value
  }

  public get keys() {
    return this._keys
  }

  public render() {
    this.render_result_template()

    return this._result_template
  }

  private render_result_template() {
    this._result_template = this._template

    const keys = this._keys

    keys.forEach((key) => {
      const key_data = this._keysData[key]

      if (key_data === undefined) {
        this._replace_key_to_string(key, '')
      } else if (
        key_data instanceof TemplateBuilder ||
        key_data instanceof ComponentClass
      ) {
        const childTemplate = key_data.render()
        this._replace_key_to_string(key, childTemplate)
      } else {
        this._replace_key_to_string(key, key_data)
      }
    })
  }

  private _replace_key_to_string(key: string, replace_text: string) {
    const keyReg = new RegExp('{{' + '[ ]*' + key + '[ ]*' + '}}')
    this._result_template = this._result_template.replace(keyReg, replace_text)
  }
}
