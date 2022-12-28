import '~src/view/index/index.html'
import create from "~src/component/linkButton";

const linkA = create('General link', '/general.html')

const root = document.querySelector('#root')
root.insertAdjacentHTML('beforeend', linkA.render())
