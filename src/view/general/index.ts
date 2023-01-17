import '~src/assets/style.scss'
import BodyComponent from '~src/component/body'
import { Component } from '~src/utils/templateBuilder/Component'
import GeneralAsideComponent from '~src/component/generalAside'
import GeneralMainComponent from '~src/component/generalBody'
import TextFieldComponent from '~src/component/components/textField/textField'
import ChatPreviewComponent from '~src/component/components/chatPreview'
import ClipComponent from '~src/component/components/clips'

export default class GeneralPage extends Component {
  constructor() {
    super({})
  }

  protected render(): Element {
    const aside = new GeneralAsideComponent({
      search: new TextFieldComponent({
        name: 'sasd',
        label: 'Search',
        visualType: 'block',
      }),
      chats: [
        new ChatPreviewComponent({
          name: 'name',
          message: 'message',
          time: '12:00',
          count: '3',
        }),
      ],
    })

    const main = new GeneralMainComponent({
      textField: new TextFieldComponent({
        name: 'sasd',
        label: 'Search',
        visualType: 'block',
      }),
    })

    const clips = new ClipComponent({ hideBackClip: true })

    return new BodyComponent({
      aside,
      main,
      clips,
    }).element
  }
}

function render(el: Element) {
  const root = document.querySelector('#root')
  root?.appendChild(el)
  return root
}

render(new GeneralPage().element)
