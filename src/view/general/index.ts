import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/Component'
import GeneralAsideComponent from '~src/component/generalAside'

import ClipComponent from '~src/component/components/clips'
import GeneralBodyComponent from '~src/component/generalBody'

interface GeneralPageOptionsInterface {}

export default class GeneralPage extends Component<GeneralPageOptionsInterface> {
  protected render(): Element {
    const aside = new GeneralAsideComponent()

    const main = new GeneralBodyComponent()

    const clips = new ClipComponent({ hideBackClip: true })

    return new BodyComponent({
      aside,
      main,
      clips,
      showUserSettings: true,
    }).element
  }
}
