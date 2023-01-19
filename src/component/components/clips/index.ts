import { TemplateBuilder } from '~src/utils/templateBuilder/templateBuilder'
import './index.scss'
import { Component } from '~src/utils/templateBuilder/Component'

const clipsTemplate = `<div id="clips" class="clips">{{ clipBlock }}</div>`

const clipBlockTemplate = `<div class="clips__block">{{ clip }}</div>`

const clipTemplate = `<div class="clips__clip">
                        <div class="clips__arc"></div>
                        <div class="clips__arc_back" style="{{ backClipStyle }}"></div>
                      </div>`

export interface ClipOptionsInterface {
  hideBackClip: boolean
}

export default class ClipComponent extends Component<ClipOptionsInterface> {
  protected render(): Element {
    const clipGeneral = new TemplateBuilder(clipsTemplate)
    const clipBlock = new TemplateBuilder(clipBlockTemplate)
    const clip = new TemplateBuilder(clipTemplate)

    if (this.props.hideBackClip) {
      clip.setKey('backClipStyle', 'display: none')
    }

    const clipString = clip.render_result_string().repeat(3)

    clipBlock.setKey('clip', clipString)

    const clipBlockString = clipBlock.render_result_string().repeat(2)

    clipGeneral.setKey('clipBlock', clipBlockString)

    return clipGeneral.render()
  }
}
