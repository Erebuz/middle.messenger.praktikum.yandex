class TemplateBuilder {
  private readonly _template: string
  private _result_template: string
  private _keys: string[] = []
  private _keysData: { [key: string]: null | string | TemplateBuilder } = {}

  constructor(template: string) {
    this._template = template

    const regExp = /\{\{[^}]+}}/g

    const arr = template.match(regExp) || []

    for (let key of arr) {
      key = key.slice(2, -2).trim()

      this._keys.push(key)
      this._keysData[key] = null
    }
  }

  private _replace_key_to_string(key: string, replace_text: string) {
    const keyReg = new RegExp('{{' + '[ ]*' + key + '[ ]*' + '}}')
    this._result_template = this._result_template.replace(keyReg, replace_text)
  }

  public set(key: string, value: string | TemplateBuilder) {
    if (!this._keys.includes(key))
      throw new TypeError(`"${key}" not exist in [${this._keys}]`)

    this._keysData[key] = value
  }

  public get keys() {
    return this._keys
  }

  public render() {
    const keys = this._keys

    this._result_template = this._template

    keys.forEach((key) => {
      const key_data = this._keysData[key]

      if (key_data instanceof TemplateBuilder) {
        const childTemplate = key_data.render()

        this._replace_key_to_string(key, childTemplate)
      } else {
        this._replace_key_to_string(key, key_data)
      }
    })

    return this._result_template
  }
}

export default TemplateBuilder
