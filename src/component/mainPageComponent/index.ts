import template from './index.tmpl'
import { TemplateBuilder } from '~src/utils/templateBuilder'

export function create(body: string | TemplateBuilder) {
  const templateBuilder = new TemplateBuilder(template)

  templateBuilder.setKey('body', body)

  return templateBuilder
}
