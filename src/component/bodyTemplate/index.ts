import { TemplateBuilder } from '~src/utils/templateBuilder'
import './index.scss'
import ClipComponent from '~src/component/components/clips'
import { ComponentClass } from '~src/utils/templateBuilder/ComponentClass'

const generalTemplate = `{{ aside }}{{ main}}{{ clips }}`

const asideTemplate = `<aside id="aside" class="left-page" style="{{ asideStyle }}">{{ aside }}</aside>`
const mainTemplate = `<main id="main" class="right-page">{{ main }}</main>`

export default class BodyComponent extends ComponentClass {
  constructor() {
    super(['aside', 'main'])

    this.childs.clip_component = new ClipComponent()
    this.childs.aside = this._templateCreaters.aside()
    this.childs.main = this._templateCreaters.main()

    this.template = new TemplateBuilder(generalTemplate)

    this.template.setKey('aside', this.childs.aside)
    this.template.setKey('main', this.childs.main)
    this.template.setKey('clips', this.childs.clip_component.render())
  }

  protected _templateCreaters = {
    aside: (hideAside: boolean = false) => {
      const template = new TemplateBuilder(asideTemplate)

      if (hideAside) {
        template.setKey('asideStyle', 'background: inherit')
      }

      return template
    },
    main: (text = '') => {
      const template = new TemplateBuilder(mainTemplate)

      template.setKey('main', text)
      return template
    },
  }
}
