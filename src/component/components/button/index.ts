import { TemplateBuilder } from '~src/utils/templateBuilder'
import template from './index.tmpl'
import './index.scss'

export function create(title: string, onclick: string, linkClasses = '') {
  const templateBuilder = new TemplateBuilder(template)

  templateBuilder.setKey('text', title)
  templateBuilder.setKey('classes', linkClasses)
  templateBuilder.setKey('onclick', onclick)

  return templateBuilder
}
