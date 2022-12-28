import '~src/static/style.scss'
import './index.scss'
import { create } from '~src/component/bodyTemplate'
import { create as createButton } from '~src/component/components/button'
import { registrationFunction } from '~src/utils/templateBuilder'
import { rerenderClips } from '~src/component/components/clips'

const button = createButton('Test', registrationFunction('main', test))

const pageComponent = create(button, '<div id="main">window.fn.value</div>')

const root = document.querySelector('#root')

root.insertAdjacentHTML('beforeend', pageComponent.render())

function test() {
  rerenderClips()
}
