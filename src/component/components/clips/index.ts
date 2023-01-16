import { TemplateBuilder } from '~src/utils/templateBuilder'
import './index.scss'
import { range } from '~src/utils/mydash/range'
import { Component } from '~src/utils/templateBuilder/Component'

const clipsTemplate = `<div id="clips" class="clips">{{ clipBlock }}</div>`

const clipBlockTemplate = `<div class="clips__block">{{ clip }}</div>`

const clipTemplate = `<div class="clips__clip">
                        <div class="clips__arc"></div>
                        <div class="clips__arc_back" style="{{ backClipStyle }}"></div>
                      </div>`

export default class ClipComponent extends Component {
  public id_list = (<T extends string[]>(...o: T) => o)('clips')
  public template = new TemplateBuilder('{{ body }}')

  constructor(showBackClip: boolean) {
    super(['clips'])

    this.template.setKey('body', this._templateCreaters.clips(!showBackClip))
  }

  protected _templateCreaters = {
    clips: (hideBackClip: boolean = false) => {
      const clipGeneral = new TemplateBuilder(clipsTemplate)
      const clipBlock = new TemplateBuilder(clipBlockTemplate)
      const clip = new TemplateBuilder(clipTemplate)

      if (hideBackClip) {
        clip.setKey('backClipStyle', 'display: none')
      }

      let clipString = ''
      for (const i in range(3)) {
        clipString += clip.render()
      }

      clipBlock.setKey('clip', clipString)

      let clipBlockString = ''
      for (const i in range(2)) {
        clipBlockString += clipBlock.render()
      }

      clipGeneral.setKey('clipBlock', clipBlockString)

      return clipGeneral
    },
  }
}
