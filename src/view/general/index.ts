import test from './test.tmpl'
import parent from './parent.tmpl'
import TemplateBuilder from '~src/utils/templateBuilder/templateBuilder'

const testTemplate = new TemplateBuilder(test)

testTemplate.setKey('spanStyle', 'color: red')
testTemplate.setKey('text', 'Hello, Header!!!')

const test2Template = new TemplateBuilder(test)

test2Template.setKey('spanStyle', 'color: blue')
test2Template.setKey('text', "Hello, <a href='/'>Body</a>!!!")

const parentTemplate = new TemplateBuilder(parent)

parentTemplate.setKey('header', testTemplate)
parentTemplate.setKey('body', test2Template)

document
  .querySelector('#root')
  .insertAdjacentHTML('beforeend', parentTemplate.render())
