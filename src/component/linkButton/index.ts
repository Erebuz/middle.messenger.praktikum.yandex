import TemplateBuilder from '~src/utils/templateBuilder/templateBuilder'
import template from './index.tmpl'
import './index.scss'

export default function create(
  linkText: string,
  href: string,
  linkClasses = ''
) {
  const linkTemplate = new TemplateBuilder(template)

  linkTemplate.set('text', linkText)
  linkTemplate.set('classes', linkClasses)
  linkTemplate.set('href', href)

  return linkTemplate
}
