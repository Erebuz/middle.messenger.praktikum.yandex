import '~src/view/index/index.html'
import create from '~src/component/linkButton'

const linkA = create('General link', '/general.html')

document.querySelector('#root').insertAdjacentHTML('beforeend', linkA.render())
