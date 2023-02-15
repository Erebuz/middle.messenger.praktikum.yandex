import { Component } from '~src/utils/Component'
import { TemplateBuilder } from '~src/utils/TemplateBuilder'
import './index.scss'
import store from '~src/store'

export default class CancelSearchComponent extends Component {
  protected initProps() {
    this.props.events = {
      click: () => {
        store.set('search_users', [])
      },
    }
  }

  protected render(): Element {
    const body = new TemplateBuilder(
      '<div class="cancel-search">Cancel search</div>'
    )
    return body.render()
  }
}
