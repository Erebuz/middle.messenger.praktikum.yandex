import './general/index.html'
import TemplateBuilder from "./templateBuilder/templateBuilder";


const root = document.querySelector('#root')

const helloBuilder = new TemplateBuilder('<a href="general.html">General</a>')

root.insertAdjacentHTML('beforeend', helloBuilder.render())
