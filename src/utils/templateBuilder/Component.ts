import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'

export class Component {
  public id_list: string[]
  public template: TemplateBuilder | Component
  public childs: { [key: string]: TemplateBuilder | Component } = {}

  protected _templateCreaters: { [key: string]: (...args: any[]) => TemplateBuilder }

  constructor(list: string[] = []) {
    this.id_list = list
  }

  public render(): string {
    return this.template.render()
  }
}
