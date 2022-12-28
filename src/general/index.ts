import test from "./test.tmpl"
import parent from "./parent.tmpl"
import TemplateBuilder from '../templateBuilder/templateBuilder'

const root = document.querySelector('#general')

const testTemplate = new TemplateBuilder(test)

testTemplate.set('spanStyle', 'color: red')
testTemplate.set('text', "Hello, Header!!!")

const test2Template = new TemplateBuilder(test)

test2Template.set('spanStyle', 'color: blue')
test2Template.set('text', "Hello, <a href='/'>Body</a>!!!")

const parentTemplate = new TemplateBuilder(parent)


parentTemplate.set('header', testTemplate)
parentTemplate.set('body', test2Template)

root.insertAdjacentHTML("beforeend", parentTemplate.render())
