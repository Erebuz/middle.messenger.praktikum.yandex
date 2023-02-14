import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'

export default class AddUserComponent extends Component<{}> {
  protected render(): Element {
    return new TemplateBuilder('<div style="width: 200px">add asda asdasd </div>').render()
  }
}
