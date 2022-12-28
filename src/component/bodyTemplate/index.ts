import { TemplateBuilder } from '~src/utils/templateBuilder'
import template from './index.tmpl'
import './index.scss'
import { create as createClips } from '~src/component/components/clips'

export function create(
  aside: string | TemplateBuilder,
  main: string | TemplateBuilder,
  hideAside: boolean = false
) {
  const templateBuilder = new TemplateBuilder(template)

  templateBuilder.setKey('aside', aside)
  templateBuilder.setKey('main', main)

  templateBuilder.setKey('clips', createClips())

  if (hideAside) {
    templateBuilder.setKey('asideStyle', 'background: inherit')
  }

  return templateBuilder
}
