import { TemplateBuilder } from '~src/utils/templateBuilder'
import './index.scss'
import { range } from '~src/utils/mydash/range'

const clipsTemplate = `<div id="clips" class="clips">{{ clipBlock }}</div>`

const clipsBlockTemplate = `<div class="clips__block">{{ clips }}</div>`

const clipTemplate = `<div class="clips__clip">
                        <div class="clips__arc"></div>
                        <div class="clips__arc_back" style="{{ backClipStyle }}"></div>
                      </div>`

export function rerenderClips() {
  const clips = document.querySelector('#clips')

  clips.innerHTML = ''
  clips.insertAdjacentHTML('beforeend', create(true).render())
}

export function create(hideBackClip: boolean = false) {
  const clipGeneral = new TemplateBuilder(clipsTemplate)
  const clipBlock = new TemplateBuilder(clipsBlockTemplate)
  const clip = new TemplateBuilder(clipTemplate)

  if (hideBackClip) {
    clip.setKey('backClipStyle', 'display: none')
  }

  let clipString = ''
  for (const i in range(3)) {
    clipString += clip.render()
  }

  clipBlock.setKey('clips', clipString)

  let clipBlockString = ''
  for (const i in range(2)) {
    clipBlockString += clipBlock.render()
  }

  clipGeneral.setKey('clipBlock', clipBlockString)

  return clipGeneral
}
