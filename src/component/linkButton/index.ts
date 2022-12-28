import TemplateBuilder from '~src/utils/templateBuilder/templateBuilder'
import template from './index.tmpl'
import './index.scss'

export default function create(
  linkText: string,
  href: string,
  linkClasses = ''
) {
  const linkTemplate = new TemplateBuilder(template)

  linkTemplate.setKey('text', linkText)
  linkTemplate.setKey('classes', linkClasses)
  linkTemplate.setKey('href', href)

  return linkTemplate
}
