import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export class ComponentClass {
  public id_list: string[]
  public template: TemplateBuilder
  public childs: { [key: string]: string | TemplateBuilder | ComponentClass } =
    {}

  protected _templateCreaters: { [key: string]: (...args) => TemplateBuilder }

  constructor(list: string[]) {
    this.id_list = list
  }

  public render(): string {
    return this.template.render()
  }

  public rerenderId(id: typeof this.id_list[number], ...args) {
    document.getElementById(id).outerHTML = this._templateCreaters[id](
      ...args
    ).render()
  }
}
